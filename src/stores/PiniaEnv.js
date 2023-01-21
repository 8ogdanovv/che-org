import { defineStore } from 'pinia'

export const usePiniaEnv = defineStore('PiniaEnv', {
  state: () => {
    return {
      search: false,
      menu: false
    };
  },
  getters: {
  },
  actions: {
    toggleSearch() {
      this.search = !this.search
    },
    hideSearch() {
      this.search = false
      this.menu = false
    },
    toggleMenu() {
      this.menu = !this.menu
    },
    hideMenu() {
      this.menu = false
      this.search = false
    },
  },
})