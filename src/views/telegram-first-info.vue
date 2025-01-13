<template>
  <ion-page
    ><ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" aria-hidden="true">
          <ion-button class="cancel-button" color="primary" @click="cancel">
            Cancel
          </ion-button>
        </ion-buttons>
        <ion-title class="text-center text-black">Info</ion-title>
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
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/fe10/b423/a179f6612bd6b395294a31af333e0bb6?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oSwQQtwLPJnOk9lGYr9fCza~k8cZhYC~laQ2dhv7JU8bLF~jJVEG5P~1PBVwXA9a2Yf0f6qL9bZGVVKnDJ9jHwcORodMbnVrS7wf8IHk4I2cc16Zr5Nc8Yq5NtdXHie5oLZWXrt1hEUs8KzObIShB8xucLXSFUghjeiV1CKTvIYxAlAxL6uHciWRCdc80ieBysK3xBjYMnjbAqNyov8v4xDRFToQRFG3HKa09YQIwVlO6Y2U-VThr70~Io0jqRVxgfnJTl3FfvGAL4MLytE-PDXf2SkXV2HPkCS-NN2KXLIQwLEvD57rJT5LJZeq7mNrZx2JtVJVpjIo3l22o1de1A__"
              />
            </ion-avatar>
            <ion-label
              >Martha <br />
              Craig</ion-label
            >
          </ion-item>
          <ion-item>
            <ion-label>
              <h3>main</h3>
              <h2 class="text-success">+1 202 555 0181</h2>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h3>home</h3>
              <h2 class="text-primary">+1 202 555 0113</h2>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              <h3>bio</h3>
              <p>Design adds value faster, than it adds cost</p>
            </ion-label>
          </ion-item>
          <ion-item :button="true">
            <ion-label>Reminders</ion-label>
            <ion-note slot="end"><h6>Enabled</h6></ion-note>
          </ion-item>
          <ion-item>
            <ion-label color="danger">Delete Contact</ion-label>
          </ion-item>
        </ion-list>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
} from '@ionic/vue';

export default defineComponent({
  name: 'InformationScreen',
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
  },
  methods: {
    done() {
      this.$router.push('/information-2');
    },
    cancel() {
      this.$router.push('/authorization');
    },
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
</style>
