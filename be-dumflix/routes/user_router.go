package routes

import (
	"be-dumflix/handlers"
	"be-dumflix/pkg/middleware"
	"be-dumflix/pkg/mysql"
	"be-dumflix/repositories"

	"github.com/labstack/echo/v4"
)

func UserRoutes(e *echo.Group) {
	userRepository := repositories.RepositoryUser(mysql.DB)
	h := handlers.HandlerUser(userRepository)

	e.GET("/users", h.FindUsers)
	e.GET("/user/:id", h.GetUser)
	e.PATCH("/user/:id", middleware.Auth(middleware.UploadImage(h.EditUser)))
	e.DELETE("/user/:id", h.DeleteUser)
}
