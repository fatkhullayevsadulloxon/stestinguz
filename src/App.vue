<template>
    <Header :headerdata="dataArr1.list" :logo="dataArr1.logo" />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
import axios from "axios"
export default {
  components: {
    Header
  },

  data() {
    return {
      dataArr1: {
        list: [],
        logo: ""

      },
    }
  },
  methods: {
    async fetchHeader() {
      try {
        const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/menu/', {
          headers: {
            'Accept-Language': 'uz'
          },
        })

        const dataArr = data.header_menu
        const newArr = dataArr.map(item => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          url: item.url
        }))
        this.dataArr1.list = newArr
        this.dataArr1.logo = data.logo_url
        console.log(this.dataArr1);
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


<style>
/* @import url("assets/base.css"); */
</style>
