package models

type User struct {
	ID        int    `json:"id"`
	Name      string `json:"fullname" gorm:"type: varchar(255)"`
	Email     string `json:"email" gorm:"type: varchar(255)"`
	Password  string `json:"password" gorm:"type :varchar(255)"`
	Gender    string `json:"gender"`
	Phone     string `json:"phone"`
	Address   string `json:"address"`
	Subscribe string `json:"subscribe"`
	Role      string `json:"role"`
}

type UsersResponse struct {
	ID        int    `json:"id"`
	Name      string `json:"fullname"`
	Email     string `json:"email"`
	Password  string `json:"password" gorm:"type :varchar(255)"`
	Gender    string `json:"gender"`
	Phone     string `json:"phone"`
	Address   string `json:"address"`
	Subscribe string `json:"subscribe"`
	Role      string `json:"role"`
}

func (UsersResponse) TableName() string {
	return "users"
}
