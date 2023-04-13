package filmdto

import "be-dumflix/models"

type FilmResponse struct {
	Title       string          `json:"title"`
	Thumbnail   string          `json:"thumbnail"`
	Year        int             `json:"year"`
	CategoryID  int             `json:"category_id"`
	Category    models.Category `json:"category"`
	Description string          `json:"description"`
}
