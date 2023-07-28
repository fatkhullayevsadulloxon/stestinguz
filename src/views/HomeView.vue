<template>
  <div class="">
        <hero :registrations="registrations"/>
        
  </div>
</template>
<script>

import Hero from "../components/Hero/Hero.vue";
import axios from "axios";

export default {
  components: {
    Hero
  },
   data() {
    return {
      registrations: {},
      statistics: {},
    }
  },
  methods: {
    async fetchHeader() {
      try {
        const {data}  = await axios.get('https://qlapi.stesting.uz/api/v1/index/', {
          headers: {
            'Accept-Language': 'uz'
          },
        })       
        this.registrations = data.registration  
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.fetchHeader()
  }
}
</script>
<style scoped>
  
</style>
