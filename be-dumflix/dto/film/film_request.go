package filmdto

type FilmRequest struct {
	Title       string `json:"title" form:"title" validate:"required"`
	Thumbnail   string `json:"thumbnail" form:"thumbnail" validate:"required"`
	Year        int    `json:"year" form:"year" validate:"required"`
	CategoryID  int    ` json:"category_id" form:"category" validate:"required"`
	Description string `json:"description" form:"description" validate:"required"`
}
