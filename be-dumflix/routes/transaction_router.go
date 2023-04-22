package routes

import (
	"be-dumflix/handlers"
	"be-dumflix/pkg/mysql"
	"be-dumflix/repositories"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group) {
	TransactionRepository := repositories.RepositoryTransaction(mysql.DB)

	h := handlers.HandlerTransaction(TransactionRepository)

	e.GET("/transactions", h.FindTransactions)
	e.GET("/transaction/:id", h.GetTransaction)
	e.POST("/transaction", h.AddTransaction)
	e.PATCH("/transaction/:id", h.EditTransaction)
	e.DELETE("/transaction/:id", h.DeleteTransaction)
	e.POST("/notification", h.Notification)
}
