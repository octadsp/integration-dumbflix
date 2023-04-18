package authdto

type RegisterResponse struct {
	Email string `gorm:"type: varchar(255)" json:"email"`
	Token string `gorm:"type: varchar(255)" json:"token"`
}
type LoginResponse struct {
	ID            int    `gorm:"type: varchar(255)" json:"id"`
	AvatarProfile string `gorm:"type: varchar(255)" json:"avatarprofile"`
	Email         string `gorm:"type: varchar(255)" json:"email"`
	Token         string `gorm:"type: varchar(255)" json:"token"`
	Role          string `gorm:"type: varchar(20)" json:"role"`
}
