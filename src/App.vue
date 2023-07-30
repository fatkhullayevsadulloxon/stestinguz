<template>
    <div>
      <Header :headerdata="dataArr1.list" :logo="dataArr1.logo" />
      <FooterSection :footerinfo="footerinfo"/>
      <FooterBottom :footerinfo="footerinfo" :headerdata="dataArr1.list"/>
    </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import axios from "axios"
import FooterSection from './components/FooterSection/FooterSection.vue'
import FooterBottom from './components/footerBottom/footerBottom.vue'
export default {
  components: {
    Header,
    FooterSection,
    FooterBottom
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
    async fetchHeader() {
      try {
        const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/menu/', {
          headers: {
            'Accept-Language': 'uz'
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
