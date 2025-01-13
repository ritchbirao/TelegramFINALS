<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <button class="button mb-4 mt--4 mx-2" :button="true" @click="next()">
        <span> continue </span> <i class="fa-solid fa-arrow-right"></i>
      </button>
      <section class="vh-100 d-flex align-items-center justify-content-center">
        <div class="container">
          <div class="form-container mx-auto"></div>
          <div class="welcome">
            <i class="bi bi-telegram"></i>
          </div>
          <p class="text mt-4">Telegram</p>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonRouterOutlet } from '@ionic/vue';

export default defineComponent({
  name: 'welcomeScreen',
  components: {
    IonPage,
    IonContent,
    IonRouterOutlet,
  },
  methods: {
    async next() {
      this.$router.push('/authorization');
    },
  },
});
</script>

<style scoped>
.welcome {
  padding: 30px;
  text-align: center;
  color: #34b0df;
  font-size: 10rem;
}
.button {
  font-size: 1rem;
  color: #007aff;
  background: none;
  border: none;
  cursor: pointer;
  top: 10px;
  right: 2%;
  position: absolute;
}
.text {
  font-size: 2.4rem;
  text-align: center;
  color: #3b3b3b;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
