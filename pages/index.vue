<template>
  <div class="ma-0 pa-0">
    <v-parallax
      src="https://i.ibb.co/RQ9Ttbv/home-page-bg.png"
      class="parallax_body"
    >
      <Transition name="slide-y">
        <div
          class="h-100 d-flex flex-column justify-center align-center"
          v-if="render"
        >
          <div style="width: 40%">
            <v-img src="https://i.ibb.co/Xbq8hBr/logo.png"></v-img>
          </div>
          <h1 class="text-h3 my-2 text-white">BAR 宮</h1>
          <h4 class="text-h6 text-white">我有酒，你有故事嗎？</h4>
        </div>
      </Transition>
    </v-parallax>
    <div class="d-flex justify-center align-center mt-3">
      <h4 class="text-h5">熱門調酒</h4>
      <v-btn
        class="mx-4"
        variant="outlined"
        position="absolute"
        style="right: 0px"
        size="small"
        to="cocktails"
      >
        更多
      </v-btn>
    </div>
    <CardSlider :cocktails="popularCocktails" />
  </div>
</template>

<script>
import { cocktailsStore } from '@/store/cocktails';
export default {
  name: 'Home-Paeg',
  setup() {
    const render = ref(false);

    onMounted(() => {
      setTimeout(() => {
        render.value = true;
      }, 500);
      window.scrollTo(0, 0);
    });

    const cocktailImages = ref([
      '015_ALPHA',
      '008_LEMON_SEA',
      '004_MATCHA',
      '007_THAI',
      '003_JUGURONI'
    ]);

    const { popularCocktails } = cocktailsStore();

    return { render, popularCocktails };
  }
};
</script>

<style lang="scss" scoped>
.slide-y-enter-active {
  transition: all 0.8s ease-out;
}

.slide-y-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-y-enter-from {
  transform: translateY(100vh);
}
.slide-y-leave-to {
  transform: translateY(0);
  opacity: 0;
}

.parallax_body {
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 100%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
