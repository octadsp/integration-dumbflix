package repositories

import (
	"be-dumflix/models"

	"gorm.io/gorm"
)

type FilmRepository interface {
	FindFilms() ([]models.Film, error)
	GetFilm(ID int) (models.Film, error)
	AddFilm(film models.Film) (models.Film, error)
	EditFilm(film models.Film) (models.Film, error)
	DeleteFilm(film models.Film, ID int) (models.Film, error)

	// FindCategoriesById(categoriesId []int) ([]models.Category, error)
	// DeleteFilmCategoryByFilmId(film models.Film) (models.Film, error)
}

func RepositoryFilm(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindFilms() ([]models.Film, error) {
	var film []models.Film
	err := r.db.Preload("Category").Find(&film).Error

	return film, err
}

func (r *repository) GetFilm(ID int) (models.Film, error) {
	var film models.Film
	err := r.db.Preload("Category").First(&film, ID).Error

	return film, err
}
func (r *repository) GetFilmAdmin(ID int) (models.Film, error) {
	var film models.Film
	err := r.db.Preload("Category").First(&film, ID).Error

	return film, err
}

func (r *repository) AddFilm(film models.Film) (models.Film, error) {
	err := r.db.Create(&film).Error

	return film, err
}

func (r *repository) EditFilm(film models.Film) (models.Film, error) {
	// r.db.Exec("DELETE FROM film_categories WHERE film_id=?", film.ID)
	err := r.db.Save(&film).Error

	return film, err
}

func (r *repository) DeleteFilm(film models.Film, ID int) (models.Film, error) {
	err := r.db.Delete(&film).Error

	return film, err
}
