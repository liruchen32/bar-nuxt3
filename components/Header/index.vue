<template>
  <v-app-bar>
    <v-row class="mx-2">
      <v-col class="d-sm-none pa-0 ma-auto" cols="2">
        <v-btn :icon="mdiMenu" @click="handleDrawerShow"></v-btn>
      </v-col>
      <v-col class="header_left mx-4" cols="6" sm="4" @click="toHome">
        <v-avatar class="mx-2" size="x-large">
          <v-img src="logos/logo.png"></v-img>
        </v-avatar>
        <h2>BAR 宮</h2>
      </v-col>
      <v-spacer />
      <v-col class="header_rigth mx-4 d-none d-sm-flex" cols="4">
        <v-btn
          v-for="pageList in pageLists.reverse()"
          :key="pageList.title"
          variant="plain"
          :to="pageList.router"
        >
          {{ pageList.title }}
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mdiMenu } from '@mdi/js';
import { drawerStore } from '@/store/drawer';
import { pageListsStore } from '@/store/page_lists';

export default {
  name: 'Header',

  setup() {
    const { pageLists } = pageListsStore();

    const drawer = drawerStore();
    const handleDrawerShow = () => {
      drawer.toggle();
    };

    const toHome = () => {
      useRouter().push('/');
    };
    return { pageLists, handleDrawerShow, mdiMenu, toHome };
  }
};
</script>

<style lang="scss" scoped>
.header_left {
  display: flex;
  align-items: center;
}

.header_rigth {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
</style>
