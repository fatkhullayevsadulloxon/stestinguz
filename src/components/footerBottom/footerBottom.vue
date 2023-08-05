<template>
    <section class="footer-bottom">
        <div class="container">
            <div class="footer-bottom__container flex items-center justify-between">
                <div class="footer-bottom__logos flex items-center mt-5">
                    <a target="_blank" href="https://uzedu.uz/">
                        <img src="https://uzedu.uz/img/logoSecondaryDark.svg" alt="" width="112" height="40">
                    </a>
                    <a target="_blank" href="https://onlinedu.uz">
                        <img class="ms-5" src="https://onlinedu.uz/images/assets/logo.png" alt="" width="220" height="40">
                    </a>
                </div>
                <ul class="list 2xl:flex xl:flex lg:flex md:hidden sm:hidden">
                    <li class="item ms-5" v-for="data in headerdata" :key="data.id">
                        <router-link class="link transition ease-in-out delay-100 hover:opacity-50" :to="`${data.url}`">{{
                            data.title }}</router-link>
                    </li>
                </ul>
            </div>
            <hr class="mb-10 mt-5">
            <div class="2xl:flex xl:flex lg:flex md:block sm:block items-center justify-between">
                <p class="opacity-50">©Stesting2023. All rights reserved</p>
                <div>
                    <a :href="`${footerinfo.facebook}`">
                        <PrimaryButton class="rounded-lg button-network m-3">
                            <i class="fa-brands fa-facebook-f" style="color: #ffffff;"></i>
                        </PrimaryButton>
                    </a>
                    <a :href="`${footerinfo.telegram}`">
                        <PrimaryButton class="rounded-lg button-network m-3">
                            <i class="fa-brands fa-telegram" style="color: #ffffff;"></i>
                        </PrimaryButton>
                    </a>
                    <a :href="`${footerinfo.instagram}`">
                        <PrimaryButton class="rounded-lg button-network m-3">
                         <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
                        </PrimaryButton>
                    </a>
                </div>
                <div class="flex items-center developed">
                    <p class="select-none">Developed by</p>
                    <img class="" src="https://uic.group/uic-images/about/about-uic-logo.png" alt="" width="150" height="100">
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import { RouterLink, RouterView } from "vue-router"
import PrimaryButton from "../../ui-components/PrimaryButton.vue";

export default {
    props: {
        headerdata: {
            type: Object,
            required: true
        },
        footerinfo: {
            type: Object,
            required: true
        }
    },
    components: { PrimaryButton }
}
</script>
<style scoped>
.link {
    font-family: 'Poppins';
}

.button-network {
    padding: 10px 15px !important;

}

p {
    font-family: "Poppins"
}
@media only screen and (max-width: 640px) {
    .container {
        width: 600px !important;
    }

    .list{
        display: none !important
    }
}

@media only screen and (max-width: 600px) {
    .container {
        width: 500px !important;
    }

    .developed{
        display: none !important
    }
}

@media only screen and (max-width: 500px) {
    .container {
        width: 400px !important;
    }
}
@media only screen and (max-width: 445px) {
    /* .container {
        width: 350px !important;
    } */
}
</style>