<template>
  <v-app>
    <Header />
    <NavigationDrawer />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pa-0">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />
    <transition name="scale-transition">
      <v-btn
        v-if="offsetTop"
        style="bottom: 20px; right: 20px"
        color="grey darken-1"
        :position="'fixed'"
        :icon="mdiArrowUpBoldHexagonOutline"
        :elevation="12"
        @click="scrollToTop"
      ></v-btn>
    </transition>
  </v-app>
</template>

<script>
import { mdiArrowUpBoldHexagonOutline } from '@mdi/js';
export default {
  setup() {
    const offsetTop = ref(0);

    function onScroll() {
      offsetTop.value =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    onMounted(() => {
      if (!process.client) return;
      window.addEventListener('scroll', onScroll);
    });

    onBeforeUnmount(() => {
      if (!process.client) return;
      window.removeEventListener('scroll', onScroll);
    });

    return { offsetTop, scrollToTop, mdiArrowUpBoldHexagonOutline };
  }
};
</script>
