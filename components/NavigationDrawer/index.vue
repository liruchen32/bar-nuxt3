<template>
  <v-navigation-drawer v-model="isShow" bottom temporary>
    <v-list nav>
      <v-list-item
        v-for="pageList in pageLists"
        active-color="light-blue lighten-3"
        :active="$route.name === pageList.name"
        exact
        :key="pageList?.name"
        :value="pageList?.router"
        :to="pageList?.router"
        :title="pageList?.title"
        :prepend-icon="pageList?.icon"
        :href="pageList?.href"
        :target="pageList?.target"
      />
    </v-list>
    <v-row class="d-flex justify-center">
      <v-btn
        v-for="button in icons"
        :key="button.link"
        class="ma-4 black--text"
        variant="flat"
        rounded
        :href="button.link"
        target="_blank"
      >
        <v-icon size="36px">{{ button.icon }}</v-icon>
      </v-btn>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import { drawerStore } from '@/store/drawer';
import { pageListsStore } from '@/store/page_lists';
import { mdiFacebook, mdiInstagram } from '@mdi/js';

export default {
  name: 'Navigation-Drawer',

  setup() {
    const drawerState = drawerStore();
    const isShow = computed({
      set: () => drawerState.toggle(),
      get: () => drawerState.isShow
    });
    const icons = [
      {
        icon: mdiFacebook,
        link: 'https://www.facebook.com/pages/category/Bar/BAR%E5%AE%AE-Miya-337530157118054/'
      },
      {
        icon: mdiInstagram,
        link: 'https://www.instagram.com/miya_taipei/?hl=zh-tw'
      }
    ];

    const { pageLists } = pageListsStore();
    return { isShow, icons, pageLists };
  }
};
</script>
