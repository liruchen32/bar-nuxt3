<template>
  <div class="d-flex justify-center">
    <img src="https://i.ibb.co/SfHsZJ4/food-menu.jpg" />
  </div>
</template>

<script>
export default {
  name: 'Food',
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  max-width: 768px;
  object-fit: contain;
}
</style>
