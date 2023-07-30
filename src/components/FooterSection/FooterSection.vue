<template>
    <section class="footer bg-[url('https://stesting.uz/footerbg.png')] bg-no-repeat w-full bg-cover h-96">
        <div class="container footer__container 2xl:flex xl:flex lg:flex md:block sm:block items-center justify-between">
            <div class="footer__container">
                <h3 class="mt-12 text-4xl text-white font-bold">Bogʻlaning</h3>
                <div class="mt-10">
                    <p class="text-white font-normal opacity-50">Manzil</p>
                    <p class="text-white text-lg mt-2 max-w-md">{{ footerinfo.address }}</p>
                </div>
                <div class="mt-7">
                    <p class="text-white font-normal opacity-50">Elektron Pochta</p>
                    <p class="text-white text-lg mt-2">{{ footerinfo.email }}</p>
                </div>
                <div class="mt-7">
                    <p class="text-white font-normal opacity-50">Telefon Raqami</p>
                    <p class="text-white text-lg mt-2">{{ footerinfo.phone }}</p>
                </div>
            </div>
            <iframe class="iframe" width="500" height="315" :src="`${footerinfo.location}`" />
        </div>
    </section>
</template>
<script>
export default {
    props: {
        footerinfo: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.footer h3 {
    font-family: "Poppins"
}

.footer p {
    font-family: "Poppins"
}

@media only screen and (max-width: 1020px) {
    .footer {
        height: 800px !important;
    }
}

@media only screen and (max-width: 640px) {
    .container {
        width: 600px !important;
    }
}

@media only screen and (max-width: 600px) {
    .container {
        width: 500px !important;
    }

    .iframe {
        width: 400px !important;
    }
}

@media only screen and (max-width: 500px) {
    .container {
        width: 400px !important;
    }
}
@media only screen and (max-width: 445px) {
    .container {
        width: 350px !important;
    }

    .footer{
        width: 100vh !important;
    }
    .footer__container{
        margin-left: -60px
    }
    .iframe{
        margin-left: -60px;
        width: 350px !important
    }
}
</style>