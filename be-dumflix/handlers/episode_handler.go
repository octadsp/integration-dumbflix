package handlers

import (
	episodedto "be-dumflix/dto/episode"
	dto "be-dumflix/dto/result"
	"be-dumflix/models"
	"be-dumflix/repositories"
	"fmt"
	"net/http"
	"os"
	"strconv"

	"context"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

type handlerEpisode struct {
	EpisodeRepository repositories.EpisodeRepository
}

func HandlerEpisode(EpisodeRepository repositories.EpisodeRepository) *handlerEpisode {
	return &handlerEpisode{EpisodeRepository}
}

func (h *handlerEpisode) FindEpisodesByFilm(c echo.Context) error {
	filmID, _ := strconv.Atoi(c.Param("filmID"))
	episodes, err := h.EpisodeRepository.FindEpisodesByFilm(filmID)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: episodes})
}

func (h *handlerEpisode) GetEpisodeByFilm(c echo.Context) error {
	filmID, _ := strconv.Atoi(c.Param("filmID"))
	episodeID, _ := strconv.Atoi(c.Param("id"))

	episode, err := h.EpisodeRepository.GetEpisodeByFilm(filmID, episodeID)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: episode})
}

func (h *handlerEpisode) GetEpisode(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	episode, err := h.EpisodeRepository.GetEpisode(id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: episode})
}

func (h *handlerEpisode) AddEpisode(c echo.Context) error {
	imageFile := c.Get("imageFile").(string)
	film_id, _ := strconv.Atoi(c.FormValue("film_id"))

	request := models.Episode{
		Title:             c.FormValue("title"),
		Episode_Thumbnail: imageFile,
		Episode_Link:      c.FormValue("video"),
		FilmID:            film_id,
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	var ctx = context.Background()
	var CLOUD_NAME = os.Getenv("CLOUD_NAME")
	var API_KEY = os.Getenv("API_KEY")
	var API_SECRET = os.Getenv("API_SECRET")

	// Add your Cloudinary credentials ...
	cld, _ := cloudinary.NewFromParams(CLOUD_NAME, API_KEY, API_SECRET)

	// Upload file to Cloudinary ...
	resp, err := cld.Upload.Upload(ctx, imageFile, uploader.UploadParams{Folder: "dumbflix"})

	if err != nil {
		fmt.Println(err.Error())
	}

	episode := models.Episode{
		Title:             request.Title,
		Episode_Thumbnail: resp.SecureURL,
		Episode_Link:      request.Episode_Link,
		FilmID:            request.FilmID,
	}

	episode, err = h.EpisodeRepository.AddEpisode(episode)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponseEpisode(episode)})
}

func (h *handlerEpisode) EditEpisode(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	imageFile := c.Get("imageFile").(string)
	film_id, _ := strconv.Atoi(c.FormValue("film_id"))

	request := episodedto.EpisodeRequest{
		Title:             c.FormValue("title"),
		Episode_Thumbnail: imageFile,
		Episode_Link:      c.FormValue("video"),
		FilmID:            film_id,
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	var ctx = context.Background()
	var CLOUD_NAME = os.Getenv("CLOUD_NAME")
	var API_KEY = os.Getenv("API_KEY")
	var API_SECRET = os.Getenv("API_SECRET")

	// Add your Cloudinary credentials ...
	cld, _ := cloudinary.NewFromParams(CLOUD_NAME, API_KEY, API_SECRET)

	// Upload file to Cloudinary ...
	resp, err := cld.Upload.Upload(ctx, imageFile, uploader.UploadParams{Folder: "dumbflix"})

	if err != nil {
		fmt.Println(err.Error())
	}

	// Get the episode from the repository by ID
	episode, _ := h.EpisodeRepository.GetEpisode(id)

	if request.Title != "" {
		episode.Title = request.Title
	}

	if request.Episode_Thumbnail != "" {
		episode.Episode_Thumbnail = resp.SecureURL
	}

	if request.Episode_Link != "" {
		episode.Episode_Link = request.Episode_Link
	}

	if request.FilmID != 0 {
		episode.FilmID = request.FilmID
	}

	editedEpisode, err := h.EpisodeRepository.EditEpisode(episode)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponseEpisode(editedEpisode)})
}

func (h *handlerEpisode) DeleteEpisode(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	episode, err := h.EpisodeRepository.GetEpisode(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.EpisodeRepository.DeleteEpisode(episode, id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponseEpisode(data)})
}

func convertResponseEpisode(u models.Episode) episodedto.EpisodeResponse {
	return episodedto.EpisodeResponse{
		ID:        u.ID,
		Title:     u.Title,
		Thumbnail: u.Episode_Thumbnail,
		VideoLink: u.Episode_Link,
		FilmID:    u.FilmID,
		Film:      models.Film(u.Film),
	}
}
