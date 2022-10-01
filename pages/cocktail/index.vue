<template>
  <v-row class="d-flex ma-4">
    <v-col cols="12" sm="6" md="4" v-for="n in cocktailImages" :key="n">
      <CocktailCard :front-img-src="`${n}_front`" :back-img-src="`${n}_back`" />
    </v-col>
  </v-row>
</template>

<script>
//   '001_FLAVORED_GIN_TONIC_front'
// '001_FLAVORED_GIN_TONIC_back'
// '002_NENE_front'
// '002_NENE_back'
// '003_JUGURONI_front'
// '003_JUGURONI_back'
// '004_MATCHA_front'
// '004_MATCHA_back'
export default {
  setup() {
    const cocktailImages = ref([
      '001_FLAVORED_GIN_TONIC',
      '002_NENE',
      '003_JUGURONI',
      '004_MATCHA'
    ]);

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { cocktailImages };
  }
};
</script>
