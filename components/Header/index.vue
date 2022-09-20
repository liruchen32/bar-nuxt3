<template>
  <div>
    <v-app-bar prominent>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          class="d-sm-none"
          variant="text"
          @click.stop="drawer = !drawer"
        />
      </template>

      <v-toolbar-title>BAR 宮</v-toolbar-title>

      <template v-slot:append>
        <div class="d-none d-sm-flex">
          <v-btn
            v-for="link in links"
            :key="link.title"
            variant="plain"
            :to="link.router"
          >
            {{ link.title }}
          </v-btn>
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" bottom temporary>
      <v-list :items="links"></v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { mdiMagnify, mdiFilter, mdiDotsVertical } from '@mdi/js';
const drawer = ref(false);
const links = [
  {
    title: '酒單',
    router: 'menu'
  },
  {
    title: '食物',
    router: 'menu'
  }
];
</script>
