package routes

import (
	"be-dumflix/handlers"
	"be-dumflix/pkg/middleware"
	"be-dumflix/pkg/mysql"
	"be-dumflix/repositories"

	"github.com/labstack/echo/v4"
)

func EpisodeRoutes(e *echo.Group) {
	EpisodeRepository := repositories.RepositoryEpisode(mysql.DB)

	h := handlers.HandlerEpisode(EpisodeRepository)

	e.GET("/film/:filmID/episodes", h.FindEpisodesByFilm)
	e.GET("/film/:filmID/episode/:id", h.GetEpisodeByFilm)
	e.POST("/episode", middleware.UploadImage(h.AddEpisode))
	e.PATCH("/episode/:id", middleware.UploadImage(h.EditEpisode))
	e.DELETE("/episode/:id", h.DeleteEpisode)
}
