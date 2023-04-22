package transactiondto

type TransactionRequest struct {
	ID        int    `json:"id"`
	StartDate string `json:"startDate" form:"startDate"`
	DueDate   string `json:"dueDate" form:"dueDate"`
	Price     int    `json:"price" validate:"required"`
	UserID    int    `json:"userId" form:"userId" validate:"required"`
	Status    string `json:"status" form:"status" gorm:"type: VARCHAR(25)"`
}
