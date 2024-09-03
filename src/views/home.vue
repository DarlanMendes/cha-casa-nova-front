<template>
  <main
    class="w-full min-h-screen flex flex-col justify-center items-center bg-[url('./assets/images/bg-panela.jpg')] gap-20"
  >
    <Card>
      <template #content>
        <div
          class="bg-white flex flex-col items-center justify-center p-20 rounded-xl"
        >
          <h1 class="font-sevillana text-6xl text-green-500">
            Bem-vindo ao nosso
          </h1>
          <h1 class="font-sevillana text-8xl text-green-500 font-medium leading-[175%]">
            Chá de Casa Nova!!
          </h1>
          <p class="text-7xl font-sevillana text-amber-600 font-medium">Mayara & Darlan</p>
        </div>
      </template>
    </Card>
    <div
      class="w-full min-w-[300px] flex flex-row gap-4 items-center justify-center"
    >
      <Button label="Presentes" raised 
      class="!text-white" size="large" 
        @click="redirectToPage('gift')"
      />
      <Button
        label="Local e Data"
        severity="warn"
        raised
        class="!text-white"
        size="large"
         @click="redirectToPage('addGifts')"
      />
    </div>
  </main>
</template>
<script lang="ts">


export default {
  name: "home",
  methods:{
    redirectToPage(pathName:string){
        this.$router.push({name:pathName})
    }
  }
};
</script>
