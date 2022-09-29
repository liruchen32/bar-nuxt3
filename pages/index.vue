<template>
  <div class="ma-0 pa-0">
    <v-parallax src="/home_page_bg.png" height="100vh">
      <Transition name="slide-y">
        <div
          class="h-100 d-flex flex-column justify-center align-center"
          v-if="render"
        >
          <h1 class="text-h3 mb-4">BAR 宮</h1>
          <h4 class="text-h6">我有酒，你有故事嗎？</h4>
        </div>
      </Transition>
    </v-parallax>
    <CardSlider />
  </div>
</template>

<script>
export default {
  setup() {
    const render = ref(false);

    onMounted(() => {
      setTimeout(() => {
        render.value = true;
      }, 500);
    });

    return { render };
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
</style>
