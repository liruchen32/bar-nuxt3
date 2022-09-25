<template>
  <v-app>
    <v-navigation-drawer v-model="isShow" bottom temporary>
      <v-list :items="pageLists"></v-list>
    </v-navigation-drawer>
    <Header />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pa-0">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup>
import { drawerStore } from '@/store/drawer';
import { pageListsStore } from '@/store/page_lists';

const drawerState = drawerStore();
const isShow = computed({
  set: () => drawerState.toggle(),
  get: () => drawerState.isShow
});

const { pageLists } = pageListsStore();
</script>
