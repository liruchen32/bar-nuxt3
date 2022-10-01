<template>
  <div
    class="card"
    :class="[
      isHover ? 'elevation-12' : 'elevation-2',
      isClick ? 'toggle_card' : ''
    ]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @click="onClick"
  >
    <div class="card_face card_face--front">
      <img :src="`/cocktails/${frontImgSrc}.jpg`" />
    </div>
    <div class="card_face card_face--back">
      <img :src="`/cocktails/${backImgSrc}.jpg`" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cocktail-Card',

  props: {
    frontImgSrc: {
      type: String
    },
    backImgSrc: {
      type: String
    }
  },

  setup(props) {
    const isHover = ref(false);
    const isClick = ref(false);
    const { frontImgSrc, backImgSrc } = toRefs(props);

    function onClick() {
      isClick.value = !isClick.value;
    }

    return { isHover, isClick, frontImgSrc, backImgSrc, onClick };
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 300px;
  height: 500px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transform-style: preserve-3d;
  border-radius: 12px;

  // &:hover {
  //   transform: rotateY(0.5turn);
  // }

  .card_face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: 0.5s ease-in-out;

    // -webkit-box-reflect: below 0
    //   linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));

    img {
      width: 300px;
      height: 500px;
      object-fit: cover;
      border-radius: 12px;
    }

    &--back {
      transform: rotateY(0.5turn);
    }
  }
}
.toggle_card {
  transform: rotateY(0.5turn);
}
</style>
