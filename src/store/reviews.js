import { defineStore } from 'pinia'

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    reviews: [], // Список отзывов
  }),
  actions: {
    addReview(review) {
      console.log('Добавление отзыва: ', review)  // Логируем новый отзыв
      this.reviews.push(review)
      console.log('После добавления отзыва, состояние reviews: ', this.reviews)  // Логируем текущее состояние reviews
    },
    
  },
})
