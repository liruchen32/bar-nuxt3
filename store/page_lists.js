import { defineStore } from 'pinia';
import { mdiHome, mdiGlassCocktail, mdiNoodles, mdiBook } from '@mdi/js';

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
          name: 'Cocktails',
          title: 'COCKTAILS',
          router: 'cocktails',
          icon: mdiGlassCocktail
        },
        {
          name: 'Food',
          title: 'FOOD',
          router: 'food',
          icon: mdiNoodles
        },
        {
          name: 'Reservation',
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
