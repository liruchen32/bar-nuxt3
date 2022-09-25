<template>
  <div class="d-flex justify-center">
    <v-hover v-slot="{ isHovering, props }">
      <v-img
        class="rounded-xl"
        :class="isHovering ? 'elevation-12' : 'elevation-2'"
        width="300px"
        v-bind="props"
        :src="`/cocktails/${imgSrc}.jpg`"
      />
    </v-hover>
  </div>
</template>

<script>
export default {
  name: 'Cocktail-Card',

  props: {
    imgSrc: {
      type: String
    }
  },

  setup(props) {
    const { imgSrc } = toRefs(props);
    return { imgSrc };
  }
};
</script>
