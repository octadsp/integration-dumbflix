package routes

import (
	"be-dumflix/handlers"
	"be-dumflix/pkg/mysql"
	"be-dumflix/repositories"

	"github.com/labstack/echo/v4"
)

func CategoryRoutes(e *echo.Group) {
	categoryRepository := repositories.RepositoryCategory(mysql.DB)

	h := handlers.HandlerCategory(categoryRepository)

	e.GET("/categories", h.FindCategories)
	e.GET("/category/:id", h.GetCategory)
	e.POST("/category", h.AddCategory)
	e.PATCH("/category/:id", h.EditCategory)
	e.DELETE("/category/:id", h.DeleteCategory)
}
