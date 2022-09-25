<template>
  <v-app-bar v-if="smAndUp">
    <v-row class="mx-2">
      <v-col class="header_left mx-4 pointer" cols="6" @click="toHome">
        <v-avatar class="mx-2" size="x-large">
          <v-img src="logos/logo.png"></v-img>
        </v-avatar>
        <h2>BAR 宮</h2>
      </v-col>
      <v-spacer />
      <v-col class="header_rigth mx-4" cols="4">
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
  <v-app-bar v-if="xs">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="handleDrawerShow" />
    </template>
    <div class="d-flex align-center pointer" @click="toHome">
      <v-avatar class="mx-2" size="x-large">
        <v-img src="logos/logo.png"></v-img>
      </v-avatar>
      <h2>BAR 宮</h2>
    </div>

    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import { mdiMenu } from '@mdi/js';
import { drawerStore } from '@/store/drawer';
import { pageListsStore } from '@/store/page_lists';
import { useDisplay } from 'vuetify';

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

    const { xs, smAndUp } = useDisplay();
    return { pageLists, handleDrawerShow, mdiMenu, toHome, xs, smAndUp };
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

.pointer {
  cursor: pointer;
}
</style>
