<template>
    <div class="flex flex-col gap-4 justify-center items-center min-h-screen bg-[url('./assets/images/bg-panela.jpg')]" >

        <form @submit.prevent="submitNewGift()" class="flex flex-col shadow-md px-20 py-10 gap-4 justify-center items-center bg-slate-50 ">
    <h1 class="text-slate-900 text-xl"> Cadastro de novo presente</h1>
    <img v-if="formGift.imgLink":src="formGift.imgLink" class="max-h-[150px]" />
    <img v-else src="https://www.4me.com/wp-content/uploads/2018/01/4me-icon-product.png" />
    <div class="card flex flex-col justify-center items-center gap-8">
      <FloatLabel>
        <InputText id="title" v-model="formGift.title" class="bg-slate-50" />
        <label for="title">Título</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="description" v-model="formGift.description" class="bg-slate-50"/>
        <label for="description">Descrição</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="imgLink" v-model="formGift.imgLink" class="bg-slate-50"/>
        <label for="imgLink">link imagem:</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="exampleLink" v-model="formGift.exampleLink" class="bg-slate-50" />
        <label for="exampleLink">link de exemplo:</label>
      </FloatLabel>
    </div>
    <Button label="Cadastar" type="submit" class="!text-white"/>
  </form>

    </div>
 
</template>
<script lang="ts">
import { GiftService } from './gift.service';



export default {
  name: "add-gifts",
  data() {
    return {
      formGift: {
        exampleLink: "",
        imgLink: "",
        title: "",
        description: "",
      },
    };
  },
  methods: {
    submitNewGift() {
        this.addNewGift()
    },
    addNewGift(){
        this.service.addNewGift(this.formGift).then((res)=>console.log(res))
    }
  },
  computed:{
    service():GiftService{
        return new GiftService()
    }
  }
};
</script>
