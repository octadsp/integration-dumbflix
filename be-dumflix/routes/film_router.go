package routes

import (
	"be-dumflix/handlers"
	"be-dumflix/pkg/middleware"
	"be-dumflix/pkg/mysql"
	"be-dumflix/repositories"

	"github.com/labstack/echo/v4"
)

func FilmRoutes(e *echo.Group) {
	FilmRepository := repositories.RepositoryFilm(mysql.DB)

	h := handlers.HandlerFilm(FilmRepository)

	e.GET("/films", h.FindFilms)
	e.GET("/film/:id", h.GetFilm)
	e.GET("/filmadmin/:id", h.GetFilmAdmin)
	e.POST("/film", middleware.Auth(middleware.UploadImage(h.AddFilm)))
	e.PATCH("/film/:id", middleware.Auth(middleware.UploadImage(h.EditFilm)))
	e.DELETE("/film/:id", middleware.Auth(h.DeleteFilm))

}
