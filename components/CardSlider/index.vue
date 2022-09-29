<template>
  <v-window v-model="onboarding" :show-arrows="mdAndUp ? 'hover' : true">
    <v-window-item v-for="n in windowItemsLength" :key="`item-${n}`">
      <v-row class="ma-4">
        <v-col class="d-flex justify-center" v-for="idx in singlePageCardCount">
          <CocktailCard
            v-if="cocktailImages[idx + currentPage]"
            :front-img-src="`${cocktailImages[idx + currentPage]}_front`"
            :back-img-src="`${cocktailImages[idx + currentPage]}_back`"
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

  setup() {
    const onboarding = ref(0);
    const cocktailImages = ref([
      '001_FLAVORED_GIN_TONIC',
      '002_NENE',
      '003_JUGURONI'
    ]);

    const { xs, sm, mdAndUp, name } = useDisplay();

    const windowItemsLength = computed(() => {
      switch (name.value) {
        case 'xs':
          return cocktailImages.value.length;
        case 'sm':
          return Math.ceil(cocktailImages.value.length / 2);
        default:
          return Math.ceil(cocktailImages.value.length / 3);
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
      cocktailImages,
      xs,
      sm,
      mdAndUp,
      windowItemsLength,
      singlePageCardCount
    };
  }
};
</script>
