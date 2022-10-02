<template>
  <v-row class="d-flex ma-4">
    <v-col
      class="d-flex justify-center"
      cols="12"
      sm="6"
      md="4"
      v-for="cocktail in cocktailsList"
      :key="cocktail.id"
    >
      <CocktailCard
        :front-img-src="cocktail.front_image"
        :back-img-src="cocktail.back_image"
      />
    </v-col>
  </v-row>
</template>

<script>
import { cocktailsStore } from '@/store/cocktails';
export default {
  name: 'Cocktails',
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    const { cocktailsList } = cocktailsStore();

    return { cocktailsList };
  }
};
</script>
