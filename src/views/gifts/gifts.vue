<template>
  <main
    class="w-full min-h-screen  bg-[url('./assets/images/bg-panela.jpg')]"
  >
    
    <article
      v-if="gifts"
      v-for="gift in gifts"
      :key="gift?.id"
      class="max-w-[300px] bg-white"
    >
      <Card>
        <template #content>
          <div>
            <img :src="gift.imgLink" />

            <h1>{{ gift.title }}</h1>
          </div>
        </template>
      </Card>
    </article>
  </main>
</template>
<script lang="ts">

import { GiftService } from "./gift.service";
import { Gift } from "../../model/gift.model";

export default {
  name: "gifts",
  data() {
    return {
      gifts:[] as Array<Gift>,
    };
  },
  methods: {
     getAllGifts() {
        this.service.getAllGifts().then((res)=>this.gifts = res);
      console.log("gift", this.gifts)
    },
  },
  mounted() {
    this.getAllGifts();
  },
  computed: {
    service(): GiftService {
      return new GiftService();
    },
  },
};
</script>
