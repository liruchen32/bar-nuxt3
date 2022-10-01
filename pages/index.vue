<template>
  <div class="ma-0 pa-0">
    <v-parallax
      src="https://lh3.googleusercontent.com/bvcNMdOHgBOvKMJopiq_9Tjys4kLwlYsOU_UHAeycR1kSkaBMsqJKJ-cmbd5UPOVGRWk8xPLFDkT1GSXvEeZcogC2XAMTZ8iq1oojMmcXWIR62EUF_z6OHiV3ARvEegUA84WrDSWGP3_Pld_mDnVov4SXzeDFmLW9YAsIQhRXYQER9hem1CjivNIXsvdUKjS-6VJ7O7_Q24PEzViYBrzkBRVNPQejWKaTDL_WfisKgy3GJDZ7SImcfPn_Ew_gKarstlOwhtaKxZmNK_JtTj17X653VYP9gLkhTVQGTsxcqFf6V45DQgMvqtph49FGYGjXaCaxjereEkcNuWcMUus4oqUVl--hoFO0I1cV7PVpPhHIBhqUWnJ_MUCFoDsevb4KuRCqAoIdr3ByZhB7i_-9FzAONBC6nN0AyCR3-gP6KNAm7wHUaDINB7IbxCiJ2g73uIwCoLS9XVyQl_4GWaC3xBNIgcBRtJdhVJDcEV_rUxW0sULE0VzqTJGysryHMwer5bi6juU7ifxU_tFf7wCYZ1P3TkjKXz3brzbixEzsL8gIcYqcVzOwQyaSyNyjLm9QJfxucb5SHBI903uNBosI4PXNWGmb6Ga_IN6fuyMkZ3264IGXmkDZfAGIpOLBL0Zxm4JZeid3Ws9D5e7QFVNBB6SL0tN20t_iNW1npJwYVrCtHhgDoq8xMCfj_ZM3qinShcz1UG-LQaPDhm-3hSY73D_d2ilP5vewM1QfJLMZZlNPtTH9nI8aD9smLsX_cWr_okwuoqzHIJP7GQhxuVFJ1_dRoVNo-CdZ58OQDSEx7ERn5GPjd9KQAMYkYWncO4bbvkgSWzW-AAQteoAzlksVpSquVamLsh6iLJSIZpBnf91z3ElrLxdERJrMgBsYPuQL0HW-10SiF2kui5hB17iquw1f1EmzlLUtpDpIwge6zmTz9b9ewxpSNVvSkLA7ocFrFsAw_o9NGTV=w2242-h1263-no?authuser=0"
      class="parallax_body"
    >
      <Transition name="slide-y">
        <div
          class="h-100 d-flex flex-column justify-center align-center"
          v-if="render"
        >
          <div style="width: 40%">
            <v-img src="logos/logo.png"></v-img>
          </div>
          <h1 class="text-h3 my-2 text-white">BAR 宮</h1>
          <h4 class="text-h6 text-white">我有酒，你有故事嗎？</h4>
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
