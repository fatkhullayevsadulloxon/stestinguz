<template>
  <div>
    <Header :headerdata="dataArr1.list" :logo="dataArr1.logo" :fetchFunc="fetchHeader" />
    <router-view />
    <FooterSection :footerinfo="footerinfo" />
    <FooterBottom :footerinfo="footerinfo" :headerdata="dataArr1.list" />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import axios from "axios"
import { RouterView } from 'vue-router'
import FooterSection from './components/FooterSection/FooterSection.vue'
import FooterBottom from './components/footerBottom/footerBottom.vue'
export default {
  components: {
    Header,
    FooterSection,
    RouterView,
    FooterBottom,

  },


  data() {
    return {
      footerinfo: {},
      dataArr1: {
        list: [],
        logo: "",
      },
    }
  },
  methods: {
    async fetchHeader(lang = null) {
      if (lang == null) {
        lang = this.$route.params.lan
      }
      try {
        const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/menu/', {
          headers: {
            'Accept-Language': lang
          },
        })

        this.footerinfo = data.footer.footer_info
        const dataArr = data.header_menu
        console.log(this.footer_info);
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

      }
    }
  },
  created() {
    setTimeout(() => {
      console.log('keldi');
      this.fetchHeader()
    }, 0);
  }


}
</script>


<style>
/* @import url("assets/base.css"); */
</style>
