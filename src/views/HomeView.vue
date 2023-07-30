<template>
  <div class="">
        <hero :registrations="registrations"/>
        <about :short_description="short_description"/>
        <stastik :statistics="statistics"/>
        <research :research="research"/>
        <video-lesson :main_video="main_video"/>
  </div>
</template>
<script>

import About from "../components/About/About.vue";
import Hero from "../components/Hero/Hero.vue";
import axios from "axios";
import Stastik from "../components/Statistik/Stastik.vue";
import Research from "../components/Research/Research.vue";
import VideoLesson from "../components/VideoLesson/VideoLesson.vue";

export default {
  components: {
    Hero,
    About,
    Stastik,
    Research,
    VideoLesson,
},
   data() {
    return {
      registrations: {},
      statistics: {},
      short_description: {},
      research: [],
      main_video: {},
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
        this.main_video = data.main_video
        const dataArr = data.research
        const newArr = dataArr.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image_url: item.image_url,
          views: item.views,
          date: '2021-09-04'
        }))
        this.research = newArr
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
