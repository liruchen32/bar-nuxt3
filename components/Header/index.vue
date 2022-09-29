<template>
  <v-app-bar v-if="render">
    <v-app-bar-nav-icon v-if="xs" @click="handleDrawerShow" />
    <div v-if="xs" class="d-flex flex-col align-center pointer" @click="toHome">
      <v-avatar class="mx-2" size="x-large">
        <v-img src="logos/logo.png"></v-img>
      </v-avatar>
      <h2>BAR 宮</h2>
    </div>
    <v-row v-if="smAndUp" class="mx-2 justify-center">
      <v-col class="header_left mx-4 pointer" cols="4" @click="toHome">
        <v-avatar class="mx-2" size="x-large">
          <v-img src="logos/logo.png"></v-img>
        </v-avatar>
        <h2>BAR 宮</h2>
      </v-col>
      <v-spacer />
      <v-col class="header_rigth mx-4" cols="4">
        <v-btn
          v-for="(pageList, idx) in pageLists"
          variant="plain"
          :key="pageList.title"
          :to="pageList.router"
          :class="`order-${Number(pageLists.length - idx)}`"
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
import { useDisplay } from 'vuetify';

export default {
  name: 'Header',

  setup() {
    const render = ref(false);
    const { pageLists } = pageListsStore();

    const drawer = drawerStore();
    const handleDrawerShow = () => {
      drawer.toggle();
    };

    const toHome = () => {
      useRouter().push('/');
    };

    onMounted(() => {
      render.value = true;
    });

    const { xs, smAndUp } = useDisplay();
    return {
      render,
      // no need to show home route for header
      pageLists: pageLists.slice(1, pageLists.length),
      handleDrawerShow,
      mdiMenu,
      toHome,
      xs,
      smAndUp
    };
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
