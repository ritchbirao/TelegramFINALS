<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="contacts" href="/tabs/contacts">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Contacts</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="">
          <ion-icon aria-hidden="true" :icon="call" />
          <ion-label>Calls</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="">
          <ion-icon aria-hidden="true" :icon="chatbubbles" />
          <p class="text-white two">2</p>
          <ion-label>Chats</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/tabs/settings">
          <img
            aria-hidden="true"
            class="profile"
            src="https://s3-alpha-sig.figma.com/img/7b51/7fd1/166e1c96bb4d606ab3bc83385540dadb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjcXXoJo3Rlos98AYsDoJgxqwd68x4SX9Zx5JjupysOTnaNN4xJ-miUtVW0Kd5aJY1OqqkweTAQAaGxeOnpULuVqUoQIooUlTRpk6RmtIlBV0yrjH25dXyp1YLVwQ064v9Doc5dARM4CF3KKytlRSnTGO3mr2PzxB7U9-GA2ahCizJw1Hn5sVaX9Kw0qya6VoweSE5QVWvN1keEpscsTyJKGBws1v-ounHomQvjAL2vihZVagBd6Wnl19WBFho~anziVGJfGUjWi-kDCEMF9sp84r7~YyuwFBGAjJQibNy2TORZ3IlKwganbiEHCQmeTXjAWsfD4EhXuiJLZSLg7SQ__"
            alt=""
          />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue';
import { call, chatbubbles, person } from 'ionicons/icons';
</script>
<style scoped>
.profile {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 2px #037ee5 solid;
}
.two {
  position: absolute;
  display: flex;
  font-size: 1.1rem;
  top: 1px;
  left: 45px;
  font-weight: 600;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fe3b30;
}
</style>
