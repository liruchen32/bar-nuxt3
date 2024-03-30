<template>
  <v-footer class="d-flex flex-column">
    <v-row class="w-100 ma-0 pa-0">
      <v-col cols="12" sm="6">
        <v-row class="d-flex flex-column align-center">
          <v-col cols="12">
            <div class="ma-auto pa-auto text-center">
              <h2>CONTACT</h2>
              <br />
              <h5>
                <v-icon>{{ mdiMapMarker }}</v-icon>
                台北市大安區
              </h5>
              <h5>大安路一段31巷50號</h5>
              <br />
              <h5>
                <v-icon>{{ mdiPhone }}</v-icon>
                02-87738077
              </h5>
              <v-btn
                v-for="button in icons"
                :key="button.link"
                class="ma-4 black--text"
                variant="flat"
                rounded
                :href="button.link"
                target="_blank"
              >
                <v-icon size="36px">{{ button.icon }}</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="ma-auto pa-auto text-center">
              <h2>OPENING HOURS</h2>
              <br />
              <h5>Sun to Mon</h5>
              <h6>6PM - 2AM</h6>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6">
        <h2 class="text-center">FIND US</h2>
        <br />
        <div class="px-5">
          <v-card width="100%" min-height="200px">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.790625209163!2d121.54248085056375!3d25.041178583890346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abf926bee7db%3A0xf2458452829c2195!2zQkFS5a6uLU1peWE!5e0!3m2!1szh-TW!2stw!4v1598167839490!5m2!1szh-TW!2stw"
              frameborder="0"
              width="100%"
              height="270px"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-col>
        <v-col class="py-3 text-center black--text" cols="12">
          <strong>{{ new Date().getFullYear() }} — BAR宮-MIYA</strong>
        </v-col>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mdiFacebook, mdiInstagram, mdiPhone, mdiMapMarker } from '@mdi/js';
export default {
  name: 'Header',
  setup() {
    const icons = [
      {
        icon: mdiFacebook,
        link: 'https://www.facebook.com/pages/category/Bar/BAR%E5%AE%AE-MIYA-337530157118054/'
      },
      {
        icon: mdiInstagram,
        link: 'https://www.instagram.com/MIYA_taipei/?hl=zh-tw'
      }
    ];

    return { icons, mdiPhone, mdiMapMarker };
  }
};
</script>

<style lang="scss" scoped>
.v-footer {
  max-height: 225px;
}
</style>
