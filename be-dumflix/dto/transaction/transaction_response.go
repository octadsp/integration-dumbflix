package transactiondto

import "be-dumflix/models"

type TransactionResponse struct {
	ID        int                  `json:"id"`
	StartDate string               `json:"startDate"`
	DueDate   string               `json:"dueDate"`
	UserID    int                  `json:"user_id"`
	User      models.UsersResponse `json:"user"`
	Status    string               `json:"status" gorm:"type: VARCHAR(25)"`
}
