<template>
  <div class="">
        <hero :registrations="registrations"/>
        <about :short_description="short_description"/>
        <stastik :statistics="statistics"/>
        <!-- <research/> -->
  </div>
</template>
<script>

import About from "../components/About/About.vue";
import Hero from "../components/Hero/Hero.vue";
import axios from "axios";
import Stastik from "../components/Statistik/Stastik.vue";
import Research from "../components/Research/Research.vue";

export default {
  components: {
    Hero,
    About,
    Stastik,
    Research
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
        this.short_description = data.short_description  
        console.log(this.statistics);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchStatistik() {
      try {
        const {data}  = await axios.get('https://api.stesting.uz/api/v1/stat/top/', {
          headers: {
            'Accept-Language': 'uz'
          },
        })       
        this.statistics = data  
        // console.log(this.statistics);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.fetchHeader()
    this.fetchStatistik()
  }
}
</script>
<style scoped>
  
</style>
