// stores/header.js
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => ({
    activeTab: 'home',  // Дефолтная вкладка (главная)
    title: 'Главная'
  }),
  actions: {
    setActiveTab(tab) {
      this.activeTab = tab
      this.setTitle(tab)  // Обновляем заголовок при смене вкладки
    },
    setTitle(tab) {
      if (tab === 'home') {
        this.title = 'Главная'
      } else if (tab === 'about') {
        this.title = 'О нас'
      } else if (tab === 'galery') {
        this.title = 'Галерея'
      }
    }
  }
})
