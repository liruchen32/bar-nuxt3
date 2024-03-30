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
          <div style="width: 50%">
            <v-img src="https://i.ibb.co/hCygrVb/LOGO2.png"></v-img>
          </div>
          <div class="my-2 text-h6 text-white">我有酒，你有故事嗎？</div>
        </div>
      </Transition>
    </v-parallax>
    <div class="d-flex flex-row justify-center align-center h-screen bg-black">
      <h5 class="text-h5">關於我們</h5>
      <div class="text-h6">我們就是愛喝酒</div>
    </div>
    <div class="d-flex justify-center align-center mt-3">
      <div class="text-h5">熱門調酒</div>
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
