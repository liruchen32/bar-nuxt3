import { defineStore } from 'pinia';
import { mdiHome, mdiGlassCocktail, mdiNoodles } from '@mdi/js';

export const pageListsStore = defineStore({
  id: 'page-lists-store',
  state: () => {
    return {
      lists: [
        {
          name: 'Home',
          title: 'HOME',
          router: '/',
          icon: mdiHome
        },
        {
          name: 'Cocktail',
          title: 'COCKTAIL',
          router: 'cocktail',
          icon: mdiGlassCocktail
        },
        {
          name: 'Food',
          title: 'FOOD',
          router: 'food',
          icon: mdiNoodles
        }
      ]
    };
  },
  getters: {
    pageLists: (state) => state.lists
  }
});
