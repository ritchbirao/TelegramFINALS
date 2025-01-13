<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" aria-hidden="true">
          <ion-button class="cancel-button" color="primary" @click="cancel()"
            >Cancel</ion-button
          >
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button class="next-button" color="primary" @click="next()"
            >Next</ion-button
          >
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Main Content -->
      <section class="content-container">
        <!-- Title and Subtitle -->
        <p class="title">Your Phone</p>
        <p class="subtitle">
          Please confirm your country code <br />
          and enter your phone number.
        </p>

        <!-- Phone Input Section -->
        <div class="phone-input">
          <div class="country-label">
            <span class="country-name">USA</span>
            <span class="country-code">+1</span>
          </div>
          <ion-input
            type="tel"
            placeholder="Your phone number"
            class="phone-number"
            inputmode="numeric"
          ></ion-input>
        </div>

        <!-- Sync Contacts Toggle -->
        <ion-item lines="none" class="sync-toggle">
          <ion-label>Sync Contacts</ion-label>
          <ion-toggle checked color="success" class="toggle"></ion-toggle>
        </ion-item>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonToggle,
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
} from '@ionic/vue';

export default defineComponent({
  name: 'AuthorizationScreen',
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonToggle,
    IonButtons,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonRouterOutlet,
  },
  methods: {
    next() {
      this.$router.push('/information-1');
    },
    cancel() {
      this.$router.push('/welcome');
    },
  },
});
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding: 0 16px;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: #000;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 1rem;
  text-align: center;
  color: #6e6e6e;
  margin-bottom: 30px;
}

.phone-input {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 24px;
}

.country-label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 12px;
}

.country-name {
  font-size: 1rem;
  font-weight: bold;
  color: #000;
}

.country-code {
  font-size: 1rem;
  color: #6e6e6e;
}

.phone-number {
  flex: 1;
  font-size: 1rem;
  border: none;
  padding-left: 8px;
}

.sync-toggle {
  width: 100%;
  margin-top: 16px;
}

ion-label {
  font-size: 1rem;
}

.toggle {
  --handle-background: #34c759;
  --background-checked: rgba(52, 199, 89, 0.3);
  position: absolute;
  left: 320px;
}
.cancel-button,
.next-button {
  font-size: 1rem;
  color: #007aff;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
