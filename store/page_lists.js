import { defineStore } from 'pinia';

export const pageListsStore = defineStore({
  id: 'page-lists-store',
  state: () => {
    return {
      lists: [
        { name: 'Cocktail', title: 'COCKTAIL', router: 'cocktail' },
        { name: 'Food', title: 'FOOD', router: 'food' }
      ]
    };
  },
  getters: {
    pageLists: (state) => state.lists
  }
});
