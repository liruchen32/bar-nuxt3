<template>
  <v-window v-model="onboarding" :show-arrows="mdAndUp ? 'hover' : true">
    <v-window-item v-for="n in windowItemsLength" :key="`item-${n}`">
      <v-row class="ma-4">
        <v-col class="d-flex justify-center" v-for="idx in singlePageCardCount">
          <CocktailCard
            v-if="cocktails[idx + currentPage]"
            :front-img-src="cocktails[idx + currentPage].front_image"
            :back-img-src="cocktails[idx + currentPage].back_image"
          />
        </v-col>
      </v-row>
    </v-window-item>
  </v-window>
</template>

<script>
import { useDisplay } from 'vuetify';
export default {
  name: 'Card-Slider',

  props: {
    cocktails: {
      type: Array,
      default: []
    }
  },

  setup(props) {
    const onboarding = ref(0);
    const { cocktails } = toRefs(props);

    const { xs, sm, mdAndUp, name } = useDisplay();

    const windowItemsLength = computed(() => {
      switch (name.value) {
        case 'xs':
          return cocktails.value.length;
        case 'sm':
          return Math.ceil(cocktails.value.length / 2);
        default:
          return Math.ceil(cocktails.value.length / 3);
      }
    });

    const singlePageCardCount = computed(() => {
      switch (name.value) {
        case 'xs':
          return 1;
        case 'sm':
          return 2;
        default:
          return 3;
      }
    });

    const currentPage = computed(() =>
      Number(onboarding.value * singlePageCardCount.value - 1)
    );

    return {
      onboarding,
      currentPage,
      cocktails,
      xs,
      sm,
      mdAndUp,
      windowItemsLength,
      singlePageCardCount
    };
  }
};
</script>
