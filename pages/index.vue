<template>
  <div class="ma-0 pa-0">
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      height="100vh"
    >
      <div
        class="h-100 d-flex flex-column justify-center align-center"
        v-if="render"
      >
        <h1 class="text-h3 mb-4">BAR 宮</h1>
        <h4 class="text-h6">我有酒，你有故事嗎？</h4>
      </div>
    </v-parallax>
  </div>
</template>

<script>
import { useDisplay } from 'vuetify';
export default {
  setup() {
    const render = ref(false);

    const { smAndDown, mdAndUp } = useDisplay();

    onMounted(() => {
      setTimeout(() => {
        render.value = true;
      }, 500);
    });

    return { render, smAndDown, mdAndUp };
  }
};
</script>
