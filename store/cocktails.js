import { defineStore } from 'pinia';

export const cocktailsStore = defineStore({
  id: 'cocktails-store',
  state: () => {
    return {
      lists: [
        {
          id: 1,
          name: 'FLAVORED-GIN-TONIC',
          front_image:
            'https://i.ibb.co/0FBKVTw/001-FLAVORED-GIN-TONIC-front.jpg',
          back_image: 'https://i.ibb.co/8sv453J/001-FLAVORED-GIN-TONIC-back.jpg'
        },
        {
          id: 2,
          name: 'NENE',
          front_image: 'https://i.ibb.co/ftfLn1J/002-NENE-front.jpg',
          back_image: 'https://i.ibb.co/9vt2PZD/002-NENE-back.jpg'
        },
        {
          id: 3,
          name: 'JUGURONI',
          front_image: 'https://i.ibb.co/C0Dc9ch/003-JUGURONI-front.jpg',
          back_image: 'https://i.ibb.co/Yj1dYyQ/003-JUGURONI-back.jpg'
        },
        {
          id: 4,
          name: 'MATCHA',
          front_image: 'https://i.ibb.co/XF3wCtX/004-MATCHA-front.jpg',
          back_image: 'https://i.ibb.co/SyK5393/004-MATCHA-back.jpg'
        },
        {
          id: 5,
          name: 'DAILY-LIFE',
          front_image: 'https://i.ibb.co/KjkJJBb/005-DAILY-LIFE-front.jpg',
          back_image: 'https://i.ibb.co/Qpp6J7r/005-DAILY-LIFE-back.jpg'
        },
        {
          id: 6,
          name: 'TREACLE-A',
          front_image: 'https://i.ibb.co/j4qwfCR/006-TREACLE-A-front.jpg',
          back_image: 'https://i.ibb.co/dDmytPF/006-TREACLE-A-back.jpg'
        },
        {
          id: 7,
          name: 'THAI',
          front_image: 'https://i.ibb.co/Wg98jKK/007-THAI-front.jpg',
          back_image: 'https://i.ibb.co/wNNWHTc/007-THAI-back.jpg'
        },
        {
          id: 8,
          name: 'LEMON-SEA',
          front_image: 'https://i.ibb.co/hdKgpcc/008-LEMON-SEA-front.jpg',
          back_image: 'https://i.ibb.co/mBwL74q/008-LEMON-SEA-back.jpg'
        },
        {
          id: 9,
          name: 'CLAMNICILLIN',
          front_image: 'https://i.ibb.co/zndMMjy/009-CLAMNICILLIN-front.jpg',
          back_image: 'https://i.ibb.co/8Kyj83m/009-CLAMNICILLIN-back.jpg'
        },
        {
          id: 10,
          name: 'COFFASHION',
          front_image: 'https://i.ibb.co/n3kqNLc/010-COFFASHION-front.jpg',
          back_image: 'https://i.ibb.co/yWgFxRD/010-COFFASHION-back.jpg'
        },
        {
          id: 11,
          name: 'GROUND-POUND',
          front_image: 'https://i.ibb.co/d71CQ0Q/011-GROUND-POUND-front.jpg',
          back_image: 'https://i.ibb.co/0BwwbjT/011-GROUND-POUND-back.jpg'
        },
        {
          id: 12,
          name: 'WOOD-CARRE',
          front_image: 'https://i.ibb.co/xjRxk9t/012-WOOD-CARRE-front.jpg',
          back_image: 'https://i.ibb.co/zRDXBfw/012-WOOD-CARRE-back.jpg'
        },
        {
          id: 13,
          name: 'SANGRIAI-I',
          front_image: 'https://i.ibb.co/rmyk0Zp/013-SANGRIAI-I-front.jpg',
          back_image: 'https://i.ibb.co/wyW6mX3/013-SANGRIAI-I-back.jpg'
        },
        {
          id: 14,
          name: 'MICHI',
          front_image: 'https://i.ibb.co/FmCWZXh/014-MICHI-front.jpg',
          back_image: 'https://i.ibb.co/9bDLSQm/014-MICHI-back.jpg'
        },
        {
          id: 15,
          name: 'ALPHA',
          front_image: 'https://i.ibb.co/dJvLD25/015-ALPHA-front.jpg',
          back_image: 'https://i.ibb.co/FbX15pb/015-ALPHA-back.jpg'
        }
      ]
    };
  },

  actions: {},

  getters: {
    cocktailsList: (state) => state.lists,
    popularCocktails: (state) => {
      const result = JSON.parse(JSON.stringify(state.lists));
      return result.sort(() => Math.random() - 0.5).slice(0, 5);
    }
  }
});
