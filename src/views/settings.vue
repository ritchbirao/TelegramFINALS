<template>
  <ion-page
    ><ion-header>
      <ion-toolbar>
        <ion-title class="text-center text-black">Settings</ion-title>
        <ion-buttons slot="end">
          <ion-button
            class="next-button"
            color="primary"
            @click="editProfile()"
          >
            Edit
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <section class="content-container">
        <ion-searchbar
          class="search-bar mt-4"
          placeholder="Search"
        ></ion-searchbar>

        <ion-list>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/7b51/7fd1/166e1c96bb4d606ab3bc83385540dadb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjcXXoJo3Rlos98AYsDoJgxqwd68x4SX9Zx5JjupysOTnaNN4xJ-miUtVW0Kd5aJY1OqqkweTAQAaGxeOnpULuVqUoQIooUlTRpk6RmtIlBV0yrjH25dXyp1YLVwQ064v9Doc5dARM4CF3KKytlRSnTGO3mr2PzxB7U9-GA2ahCizJw1Hn5sVaX9Kw0qya6VoweSE5QVWvN1keEpscsTyJKGBws1v-ounHomQvjAL2vihZVagBd6Wnl19WBFho~anziVGJfGUjWi-kDCEMF9sp84r7~YyuwFBGAjJQibNy2TORZ3IlKwganbiEHCQmeTXjAWsfD4EhXuiJLZSLg7SQ__"
              />
            </ion-avatar>
            <ion-label>
              <strong> Jacob W. </strong>
              <h2>+1 202 555 0147 <br />@jacob_d</h2>
            </ion-label>
            <i class="bi bi-arrow-right-short text"></i>
          </ion-item>
        </ion-list>

        <ion-list>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/6c44/9fe3/c35495a332d172f47185f4b3bdccc359?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dKBEHmThMxSy6oMitQIFssrNwmu7qUceueQnpWeed1KFZ7111uRWYJuNNVbKmRGrErorHs6M~SixQIEqOcoH8ZpGH7CToIHXQBtXheWc-L3qtj2mMVitN6Mg0Rsw8RcenPJFLe1w1h50vUp81obaRmdik1XoeAIO20l5N9WZYJ5VjZGoQ6greV6agXu6iKbQxeKzM-zhv37VxfzzuxsXGlvYCZXIu~6V98qD7ugypLX7n37y5fscOUW61c1iUzpRwGqpkKDFtE1qKMrDs2-1Ubu5MnXl~qWJaLc4RGjCuFyZutncGXndw6nudXMa~KREI~hjZ-jiVs0FKlomMDD6Zg__"
              />
            </ion-avatar>
            <ion-label>
              <h2>Jacob Design</h2>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <i class="bi bi-plus-lg text-primary icon"></i>
            </ion-avatar>
            <ion-label color="primary">Add Account</ion-label>
          </ion-item>
        </ion-list>

        <ion-list :inset="true">
          <ion-item :button="true">
            <ion-icon
              color="primary"
              slot="start"
              :icon="bookmark"
              size="large"
            ></ion-icon>
            <ion-label>Saved Messages</ion-label>
            <ion-note slot="end"
              ><i class="bi bi-arrow-right-short text"></i
            ></ion-note>
          </ion-item>
          <ion-item :button="true">
            <ion-icon
              color="success"
              slot="start"
              :icon="call"
              size="large"
            ></ion-icon>
            <ion-label>Recent Calls</ion-label>
            <ion-note slot="end"
              ><i class="bi bi-arrow-right-short text"></i
            ></ion-note>
          </ion-item>
          <ion-item :button="true">
            <ion-icon
              color="warning"
              slot="start"
              :icon="listCircle"
              size="large"
            ></ion-icon>
            <ion-label>Stickers</ion-label>
            <ion-note slot="end"><p class="text notif">15</p> </ion-note>
          </ion-item>
        </ion-list>

        <ion-list :inset="true">
          <ion-item :button="true">
            <ion-icon
              color="danger"
              slot="start"
              :icon="notifications"
              size="large"
            ></ion-icon>
            <ion-label>Notifications and Sounds</ion-label>
            <ion-note slot="end"
              ><i class="bi bi-arrow-right-short text"></i
            ></ion-note>
          </ion-item>
          <ion-item :button="true">
            <ion-icon
              color="medium"
              slot="start"
              :icon="lockClosed"
              size="large"
            ></ion-icon>
            <ion-label>Privacy and Security</ion-label>
            <ion-note slot="end"
              ><i class="bi bi-arrow-right-short text"></i
            ></ion-note>
          </ion-item>
          <ion-item :button="true">
            <ion-icon
              color="warning"
              slot="start"
              :icon="server"
              size="large"
            ></ion-icon>
            <ion-label>Data and Storage</ion-label>
            <ion-note slot="end"
              ><i class="bi bi-arrow-right-short text"></i
            ></ion-note>
          </ion-item>
          <ion-item :button="true">
            <ion-icon
              color="primary"
              slot="start"
              :icon="brush"
              size="large"
            ></ion-icon>
            <ion-label>Appearance</ion-label>
            <ion-note slot="end"
              ><i class="bi bi-arrow-right-short text"></i
            ></ion-note>
          </ion-item>
        </ion-list>
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
      this.$router.push('/information-2');
    },
    cancel() {
      this.$router.push('/authorization');
    },
    editProfile() {
      this.$router.push('/editProfile');
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
.text {
  font-size: 1.1rem;
  text-align: center;
  color: black;
}
.notif {
  border-radius: 50%;
  width: 30px;
  height: 25px;
  background-color: #007aff;
}
</style>
