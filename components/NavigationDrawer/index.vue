<template>
  <v-navigation-drawer v-model="isShow" bottom temporary>
    <v-list nav>
      <v-list-item
        v-for="pageList in pageLists"
        active-color="light-blue lighten-3"
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
  </v-navigation-drawer>
</template>

<script>
import { drawerStore } from '@/store/drawer';
import { pageListsStore } from '@/store/page_lists';

export default {
  name: 'Navigation-Drawer',

  setup() {
    const drawerState = drawerStore();
    const isShow = computed({
      set: () => drawerState.toggle(),
      get: () => drawerState.isShow
    });

    const { pageLists } = pageListsStore();
    return { isShow, pageLists };
  }
};
</script>
