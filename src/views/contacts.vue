<template>
  <ion-page
    ><ion-header>
      <ion-toolbar>
        <ion-title class="text-center text-black">Contacts</ion-title>
        <ion-buttons slot="end">
          <ion-button class="next-button" color="primary" @click="done">
            <i class="bi bi-plus-lg"></i>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <section class="content-container">
        <ion-list>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <i class="bi bi-geo-alt text-primary icon"></i>
            </ion-avatar>
            <ion-label color="primary">Add People Nearby</ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <i class="bi bi-person-add text-primary icon"></i>
            </ion-avatar>
            <ion-label color="primary">Invite Friends</ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/1f61/ca60/cbc85c23d3705e0ea9b22359ff9489cc?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OuyYlN9eIaf3mgg374pNo6t2iqt3H6criDg4aO5oQYC8RMVM9QzE9qR7-sRF9X6LjOHxK82EtiJ6VDDXA1LWwrpdxBv2iWgtiSHEOQedunT9hYnXfGtWrJhNJ5FaIsOLmGsUYcGyFahk-omOlnmiDD7qL61ivEMjF7Ds1xpmnajJoXMpe5BtZWjwQ217v-t4l5xLR222huSqc~QIcBi0awa0uIvZarbdu320fCCwi8omh-5WPj5cdBntGfxXk3-jb8t4Ve0bD7UsJFkHPEAYQaFQXwtRnqg23lXaCKKyKL198NxqodP6QRMwlzvAntyg0C-IfP-p1-yFVqjou0UlQA__"
              />
            </ion-avatar>
            <ion-label
              >Joshua Lawrence <br />
              <p class="text-primary">online</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/387c/a494/2fc3950a30517d15533459ef9feb5b9f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NJVQSjh8-eBG3eLoFuKDGLAA08bSmMpUycgLM6CNWrZ76YoAQEaYY-tw5Uil3T8ek~hYX2b~jHZ4aOT92-cSkX9ZFu51UJxdy4j0iZamNXHMMA6EYzZ4Vc3ATUjW~Cs9mI5bnWuNLj5mf2LQkt10WSzUXr5zLY9HIFcU66SKM7aLCwMxwtER745EC6qZgxCyf3Q2rxNw4lmtu27UOdyNbhfXHw3mgkPcvtZ4t3T97l57W~s-GhJpPEe1Ml5GaNhsxYXx~yabvWedzEa6~RyZjZjfhBuE7opWraHvRapnlipcqiHptxw7dm7hGz-eX6zAcdNsWVdFrwTi20RiG0tlcg__"
              />
            </ion-avatar>
            <ion-label
              >Andrew Parker <br />
              <p class="text-primary">online</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/d93f/9ad8/04eab2cfd2bf9ca9e8f5e542e1fbdb51?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gxBdSoYqeStgt9CduZALnAtY89~u5p4bRdahE5tRikAN9oLKO3zOgl384Ii0ah6eoXDI0JAcBfiKzGZcwRbkbgUg9NgZkIFo47Pf3cRU9WFGO4-s-gN~Lx~5DpPWAeQCK3qDS9d9fSMZSle5Dn1BohZUBeuJOBKVMd1MnUOb8UFLT4OUzPJr-k0q8C3TZOQnARSSbjwBNENok6iPj-Pwz0~RBm6faElorZ0f3v3x2mXH71e-eQTlqhstAfs1yH1Y~XLTwDSd-xi3dm66g9S502QTBPwLNE7TIWi7dWNLSVVbZHHJLrX-exy5aR7~ZV3roCLWrMRRuW9xO1TudDgQEg__"
              />
            </ion-avatar>
            <ion-label
              >Martin Randolph <br />
              <p class="text-primary">online</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/a677/a41f/027410390877dbe19c213b2e6ee60b75?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aiREclHwj03qKPJC9lBF09BJogfKG1pcM26mmrYtNSPBFp6v91hCgQG2X4mLVlZkkUkeek87a-f2j3tNlMYRMRnMCIYz8~mJGFAGqTpETV-p5TLJXEwpG5WK6Ep2pKiXCnVJKfCBNXNC3BAX1ExTa1rdWk3gH~QdxbdbbmmGeSfNheFfcSW1ExMgDGFqgchJeq~rZZLHas8dHRpfdO-18khmn7F6cBn8FQfdJ68stedABQz~w5KpjOL7HF~mua2gsndHivz32t~yasKSNBtJH56DBjMP3qpANiNJTpVvqTD~1ZHynbTMscfzzgfRwDUqKX0jsXgX3JmiLjesSjm5rA__"
              />
            </ion-avatar>
            <ion-label
              >Kieron Dotson <br />
              <p>last seen 10 minutes ago</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/9c54/bfee/48f1801e657b098f5792c61365f65c75?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7XeFOu-fbWCYIel37lsgP99vPGcXUwI26W~ToH3wi-eWzo2lNcB9FaWH6WwLEMqJApMZwr7uV25pKxeP1sve-K~FVYOPnmqobqKKLPQvrN9xgBT9jNkP-5So6aQkGhn4MsVOAZ52pwHuFyByW3paD9znPY4XslqnmW5ej0aex60g2PSDEQkXj~qHt1JRUwn4Yde9GSkZrG42CVto4XE8nyguPhZK9Mj4MhTeCHsZDmeRxls7-BTM-OHP3~-SlTF2dk6h8Gv9fWTPx2aoIbsFo4AKk-dEKl-r8~vwE1VZXLSGNXoJuBoI6mmCSYhDd-hgGUqiA1cKewz1MyIaLfWng__"
              />
            </ion-avatar>
            <ion-label
              >Zack John <br />
              <p>last seen 25 minutes ago</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/d4c1/7ff9/18583bf15a6bdc083bcee64acc58ed55?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i8XiMhTP8bw6KnNEHA0cfaOCv0MHFWvhT5rBuOhkNCo6zVEdfOr~jCUzQSykGFzbANsIKpZt9sYU1TR9vDUgYCuPzXFnO5~1E~8sUtjjC5QZbEcVsuUY8LH4T2JBCSUTXujDdn46QSJG3ImRnQ88hbqfqMUQvOL4dxgCiEg869kltwYhaHAX6hmaCVqoogjsmDu5LAZuBagfxycZ5W5XdLU0b0gkKsSOxE2Qqw6d8Vm8WsmHJ8nQDLw2pwj3pAJADc7-rHLN3eDkfNaA1OHs0BbcFHQUehLgXOTnVHaT0QUH4xNmgI9AK6y3qpXqobDS882gmgSMbwhjIbl-wtuDlQ__"
              />
            </ion-avatar>
            <ion-label
              >Karen Castillo <br />
              <p>last seen 1 hour ago</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/5497/474a/85840582fe2715d5382fb881c91e3f70?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdpuD9XxAUJ4n50Y-EOUI6e3JLQu2IVNa9TTJM7l1l~Fj2tMxlyOIhq-YtTQuZOpYddtJZcQgOjfMhcJupvtx67udJujFNYmSGG1C70JsACD23gKyBFWc6BEyJ0JSyObHYaIhxP7dpzSsMVyqdVMWciZ~Gr6S5AJqtdAhUYtkQfadfkRnGPWf0CJ-m4qaoim4Ht~crd8UX6wdFjnWyzSkU9AKNg0XaLgL34PfKwZTnDtfE0oUYVSFhsSul9BjMKm7ncnXBxDrM8l03~c0s2cCtVa1PBPklAQTKY7GMTzKhKGDICDtqhJmcB7ta-v6D0CneAmrhBEPu7H9~Y0KllVbA__"
              />
            </ion-avatar>
            <ion-label
              >Jamie Franco <br />
              <p>last seen 2 hour ago</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/9491/a0bd/9f49e97c567d926a47eea03dd4ae0658?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lWVVbOxFdwVXsAelg4FTK1po5tA6k13eA6DLL78-N3HjKbLU~~~0fyavYGL1~P~Lo09FWxMH6tHOr~kQyJxLK54onaMrIDGHDY0BKn0ingzauszJcmMM9NNtjZodoZYyWVqIvH6pUxdS6J3Z9VxOIL409B2fjesf~6WqaD0S6Y3I13QRUN8vHd~Q5mUOyXAP4aDT54CXinxRgRM3MN57m2t5AMv1tOGZizyP7lYMmEzM5v3sgP9EvmJjwVvHEN8s~CjX~uDJKZIrlXmPUPGYXAJOB4kSo76JoAmJ2Zf5g1G9saWtLYk0NI4XvcASflfbocCv59p-pI09ykpg6P9wiA__"
              />
            </ion-avatar>
            <ion-label
              >Maximillian Jacobson <br />
              <p>last seen 5 hour ago</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/fe10/b423/a179f6612bd6b395294a31af333e0bb6?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oSwQQtwLPJnOk9lGYr9fCza~k8cZhYC~laQ2dhv7JU8bLF~jJVEG5P~1PBVwXA9a2Yf0f6qL9bZGVVKnDJ9jHwcORodMbnVrS7wf8IHk4I2cc16Zr5Nc8Yq5NtdXHie5oLZWXrt1hEUs8KzObIShB8xucLXSFUghjeiV1CKTvIYxAlAxL6uHciWRCdc80ieBysK3xBjYMnjbAqNyov8v4xDRFToQRFG3HKa09YQIwVlO6Y2U-VThr70~Io0jqRVxgfnJTl3FfvGAL4MLytE-PDXf2SkXV2HPkCS-NN2KXLIQwLEvD57rJT5LJZeq7mNrZx2JtVJVpjIo3l22o1de1A__"
              />
            </ion-avatar>
            <ion-label
              >Martha Craig <br />
              <p>last seen yesterday at 21:22</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/295c/97d7/1fa72d8d7942512985499d585e42fa53?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X9DfGAUEo83WW6icTb-jHWUX9Wq~HqgAgzbUvm2Eo3JEvnZ5xwwTnM9kOwf71XpjAo0hbqEcJPyCPS5xESsb2zVo67lr8PXe9Q7thXGdNBQDaq0m-ngshlXoMzkURwR09uivHgCKzrwxHccwSG11PoYxk8Y8kV2hBywM053PdyY4pyjlY~SnmdJUsGqe8YXnx4hxrTtQ6lvdWo681GRwbD0f5~eb3of7zXhz4EwfzTYf~ZYJF4yYXYKXyCEDZFrrSUCXN03NvDdP-sHliL0qf4pNaRUg-lVKfHmzV8jxOk8qACX62FDFE0TCE3d1oj3wWC9jRDAem12HlmD2Am1K5w__"
              />
            </ion-avatar>
            <ion-label
              >Tabitha Potter <br />
              <p>last seen recently</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar aria-hidden="true" slot="start">
              <img
                alt="Profile picture of Martha"
                src="https://s3-alpha-sig.figma.com/img/f887/f67b/2de99f90fe3015016cceb7ffc0d9f7f4?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7ve5WEgBslmbh2cd0gG34ZYH5EIbblrnHPMqpu9rh0gOve1tnY9EU12aQwbNitF5Zt1RMZvxmCAsRaoSqvj2iAy529lEkM9Lz-7yZXlNsWh8EU2q-J4tgPJaZHL-OfkrnKaWWhfNbYLdStmxwLwwiXFiGKa7FY5rgEiTHKveSihpuhMkYsrD9jSZmfIZvdEXSblvRvJjT3brSyhwQ-uYFk-EvCuL17UGs7wXTjQ69~CnDxfg3oILpA5HNhqzM~RkVVM~ChyjnSaGEQ15x8WpYp6sbdeFUnTxvVQkArdJR8dk4TryL6GZEYV1lFw8qTR~fUdm5zQbEi9GK9DSSVKvQ__"
              />
            </ion-avatar>
            <ion-label
              >Maisy Humphrey <br />
              <p>last seen recently</p>
            </ion-label>
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
  name: 'Contacts',
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
.icon {
  font-size: 2rem;
}
</style>
