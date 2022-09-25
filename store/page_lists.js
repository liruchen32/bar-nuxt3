import { defineStore } from 'pinia';
import { mdiGlassCocktail, mdiNoodles } from '@mdi/js';

export const pageListsStore = defineStore({
  id: 'page-lists-store',
  state: () => {
    return {
      lists: [
        {
          name: 'Cocktail',
          title: 'COCKTAIL',
          router: 'cocktail',
          icon: mdiGlassCocktail
        },
        { name: 'Food', title: 'FOOD', router: 'food', icon: mdiNoodles }
      ]
    };
  },
  getters: {
    pageLists: (state) => state.lists
  }
});
