<template>
  <ion-page
    ><ion-header>
      <ion-toolbar
        ><ion-buttons slot="start">
          <ion-button class="next-button" color="primary" @click="back">
            Back
          </ion-button>
        </ion-buttons>
        <ion-title class="text-center text-black">Edit Profile</ion-title>
        <ion-buttons slot="end">
          <ion-button class="next-button" color="primary" @click="done">
            Done
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <section class="content-container">
        <ion-list>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                class="image"
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/7b51/7fd1/166e1c96bb4d606ab3bc83385540dadb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjcXXoJo3Rlos98AYsDoJgxqwd68x4SX9Zx5JjupysOTnaNN4xJ-miUtVW0Kd5aJY1OqqkweTAQAaGxeOnpULuVqUoQIooUlTRpk6RmtIlBV0yrjH25dXyp1YLVwQ064v9Doc5dARM4CF3KKytlRSnTGO3mr2PzxB7U9-GA2ahCizJw1Hn5sVaX9Kw0qya6VoweSE5QVWvN1keEpscsTyJKGBws1v-ounHomQvjAL2vihZVagBd6Wnl19WBFho~anziVGJfGUjWi-kDCEMF9sp84r7~YyuwFBGAjJQibNy2TORZ3IlKwganbiEHCQmeTXjAWsfD4EhXuiJLZSLg7SQ__"
              />
            </ion-avatar>
            <ion-label>
              <h2>Jacob W.</h2>
              <hr />
              <h2 class="text">Last Name</h2>
            </ion-label>
          </ion-item>
          <p class="text mx-4">
            Enter your name and add an optional profile photo.
          </p>
        </ion-list>

        <ion-list>
          <ion-item>
            <ion-label>
              <h2>Digital goodies designer - Pixsellz</h2>
            </ion-label>
          </ion-item>
          <p class="text mx-4">
            Any details such as age, occupation or city. Example: 23 y.o.
            designer from San Francisco.
          </p>
        </ion-list>

        <ion-list>
          <ion-item :button="true">
            <ion-label><h2>Change Number</h2></ion-label>
            <ion-note slot="end" class="text">+1 202 555 0147</ion-note>
          </ion-item>
          <ion-item :button="true">
            <ion-label><h2>Username</h2></ion-label>
            <ion-note slot="end" class="text">@jacob_designer</ion-note>
          </ion-item>
        </ion-list>

        <ion-button class="w-100 p-3" color="none"
          ><h6 class="text-primary">Add Account</h6></ion-button
        >
        <ion-button class="w-100 p-3" color="none">
          <h6 class="text-danger" @click="logout()">Log Out</h6></ion-button
        >
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  bookmark,
  chevronForward,
  listCircle,
  call,
  notifications,
  lockClosed,
  server,
  brush,
} from 'ionicons/icons';
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonAvatar,
  IonNote,
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonList,
  IonTitle,
  IonSearchbar,
  IonIcon,
} from '@ionic/vue';

export default defineComponent({
  name: 'Settings',
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonAvatar,
    IonNote,
    IonButtons,
    IonButton,
    IonHeader,
    IonToolbar,
    IonList,
    IonTitle,
    IonSearchbar,
    IonIcon,
  },
  methods: {
    done() {
      this.$router.push('/tabs/settings');
    },
    back() {
      this.$router.push('/tabs/settings');
    },
    editProfile() {
      this.$router.push('/editProfile');
    },
    logout() {
      this.$router.push('/welcome');
    },
  },
  setup() {
    return {
      chevronForward,
      listCircle,
      bookmark,
      call,
      notifications,
      lockClosed,
      server,
      brush,
    };
  },
});
</script>

<style scoped>
.cancel-button,
.next-button {
  font-size: 1rem;
  color: #007aff;
  background: none;
  border: none;
  cursor: pointer;
}

.cancel-button:hover,
.next-button:hover {
  text-decoration: underline;
}

ion-label {
  font-size: 1rem;
  color: #333;
}

ion-item {
  margin: 8px 0;
}
.icon {
  font-size: 2rem;
}
.unread-indicator {
  background: var(--ion-color-primary);

  width: 10px;
  height: 10px;

  border-radius: 100%;

  position: absolute;

  inset-inline-start: 12px;
  top: 12px;
}

.metadata-end-wrapper {
  position: absolute;

  top: 10px;
  inset-inline-end: 10px;

  font-size: 0.8rem;

  display: flex;
  align-items: center;
}

ion-label strong {
  display: block;

  max-width: calc(100% - 60px);

  overflow: hidden;

  text-overflow: ellipsis;
}

ion-label ion-note {
  font-size: 0.9rem;
}
.image {
  width: 40px;
  height: 40px;
}
.text {
  color: #636366;
  font-size: 1rem;
}
</style>
