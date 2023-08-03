<template>
    <div>
        <PublicationTop :publication="publication" :publicationCategory="publicationCategory"/> 
    </div>
</template>
<script>
import { RouterView } from 'vue-router';
import PublicationTop from '../components/PublicationTop/PublicationTop.vue';
import axios from 'axios';
export default {
    components: { RouterView, PublicationTop },
    data() {
        return {
            publicationCategory: [],
            publication: [],
        }
    },
      methods: {
        async fetchPublicationCategory() {
            try {
                const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/publication/category/',)
                const newArr = data.map(item => ({
                    id: item.id,
                    title: item.title,
                    slug: item.slug
                }))
                this.publicationCategory = newArr
            } catch (error) {
                console.log(error);
            }
        },
        async fetchPublication() {
            try {
                const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/publication/', {
                    headers :{
                        'Accept-language': this.$route.params.lan
                    }
                })
                const dataResult = data.results
                const newArr = dataResult.map(item => ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    image_url: item.image_url,
                }))
                this.publication = newArr
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted(){
        this.fetchPublicationCategory()
        this.fetchPublication()
    }
}
</script>
<style>
    
</style>