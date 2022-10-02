import { defineStore } from 'pinia';
import { mdiHome, mdiGlassCocktail, mdiNoodles, mdiBook } from '@mdi/js';

export const pageListsStore = defineStore({
  id: 'page-lists-store',
  state: () => {
    return {
      lists: [
        {
          name: 'index',
          title: 'HOME',
          router: '/',
          icon: mdiHome
        },
        {
          name: 'cocktails',
          title: 'COCKTAILS',
          router: 'cocktails',
          icon: mdiGlassCocktail
        },
        {
          name: 'food',
          title: 'FOOD',
          router: 'food',
          icon: mdiNoodles
        },
        {
          name: 'reservation',
          title: 'RESERVATION',
          icon: mdiBook,
          href: 'https://inline.app/booking/-MzXuKPk5Tmrv9ICzpQo:inline-live-2/-MzXuKeY8t26PYaNslDS',
          target: '_blank'
        }
      ]
    };
  },
  getters: {
    pageLists: (state) => state.lists
  }
});
