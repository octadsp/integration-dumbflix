package usersdto

type UserRequest struct {
	Name          string `json:"fullname" gorm:"type: varchar(255)" form:"name"`
	AvatarProfile string `json:"thumbnail" gorm:"type: varchar(255)" form:"avatarprofile"`
	Email         string `json:"email" gorm:"type: varchar(255)" form:"name"`
	Password      string `json:"password" gorm:"type :varchar(255)" form:"name"`
	Gender        string `json:"gender" form:"name"`
	Phone         string `json:"phone" form:"name"`
	Address       string `json:"address" form:"name"`
	Subscribe     string `json:"subscribe" form:"name"`
}
