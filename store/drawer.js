import { defineStore } from 'pinia';

export const drawerStore = defineStore({
  id: 'drawer-store',
  state: () => {
    return {
      show: false
    };
  },
  actions: {
    toggle() {
      this.show = !this.show;
    }
  },
  getters: {
    isShow: (state) => state.show
  }
});
