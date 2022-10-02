<template>
  <v-row class="d-flex ma-4">
    <v-col
      class="d-flex justify-center"
      cols="12"
      sm="6"
      md="4"
      v-for="n in cocktailImages"
      :key="n"
    >
      <CocktailCard :front-img-src="`${n}_front`" :back-img-src="`${n}_back`" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Cocktails',
  setup() {
    const cocktailImages = ref([
      '001_FLAVORED_GIN_TONIC',
      '002_NENE',
      '003_JUGURONI',
      '004_MATCHA',
      '005_DAILY_LIFE',
      '006_TREACLE_A',
      '007_THAI',
      '008_LEMON_SEA',
      '009_CLAMNICILLIN',
      '010_COFFASHION',
      '011_GROUND_POUND',
      '012_WOOD_CARRE',
      '013_SANGRIAI_I',
      '014_MICHI',
      '015_ALPHA'
    ]);

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { cocktailImages };
  }
};
</script>
