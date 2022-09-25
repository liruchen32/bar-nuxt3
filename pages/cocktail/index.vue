<template>
  <v-row class="d-flex ma-4">
    <v-col cols="12" sm="6" md="4" v-for="n in 20" :key="n">
      <CocktailCard :img-src="'001_FLAVORED_GIN_TONIC_back'" />
    </v-col>
  </v-row>
</template>
