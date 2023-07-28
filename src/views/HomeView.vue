<template>
  <div class="">
        <hero :registrations="registrations"/>
        <about :statistics="statistics" :short_description="short_description"/>
  </div>
</template>
<script>

import About from "../components/About/About.vue";
import Hero from "../components/Hero/Hero.vue";
import axios from "axios";

export default {
  components: {
    Hero,
    About
},
   data() {
    return {
      registrations: {},
      statistics: {},
      short_description: {},
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
        this.statistics = data.statistics  
        this.short_description = data.short_description  
        console.log(this.statistics);
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
