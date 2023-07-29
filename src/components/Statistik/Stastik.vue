<template>
    <section class="statistik">
        <div class="container bg-sky-50 h-36 statistik__container flex items-center justify-around">
            <div class="bg-white shadow-lg statistik__box location">
                <vue3-autocounter class="Statistik__link text-sky-600 flex items-center justify-around" ref='counter'
                    :startAmount='0' :endAmount='statistics.student' :duration='3' separator=' ' :decimals='0'
                    :autoinit='true' />
                <h3 class="Statistik__link-heading">O`quvchilar</h3>
            </div>
            <div class="bg-white shadow-lg statistik__box location2">
                <vue3-autocounter class="Statistik__link text-sky-600 flex items-center justify-around" ref='counter'
                    :startAmount='0' :endAmount='statistics.school' :duration='3' separator=' ' :decimals='0' />
                <h3 class="Statistik__link-heading">Maktablar</h3>
            </div>
            <div class="bg-white shadow-lg statistik__box location3">
                <vue3-autocounter class="Statistik__link text-sky-600 flex items-center justify-around" ref='counter'
                    :startAmount='0' :endAmount='statistics.exams' :duration='3' separator=' ' decimalSeparator=' '
                    :decimals='0' :autoinit='true' />
                <h3 class="Statistik__link-heading">Topshiriqlar</h3>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        statistics: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
/* STATISTIK SECTION */
.statistik__container {
    background-image: url("https://stesting.uz/_nuxt/img/news-bg-item.fcbfd23.png") !important;
    background-repeat: no-repeat !important;
    background-position: right bottom !important;
    width: 700px !important
}

.statistik__box {
    width: 250px !important;
    height: 120px !important;
    font-family: 'Poppins', sans-serif !important;
    font-weight: 700 !important;
    font-size: 48px !important;
    border: 1px solid #eae8e8 !important;
    margin-top: -100px !important;
}

.location {
    margin-left: -150px !important;
    /* position: absolute */
}

.location3 {
    margin-right: -150px !important;
    /* position: absolute */
}

.Statistik__link {
    margin-top: 30px !important;
}


.Statistik__link-heading {
    font-family: 'Poppins', sans-serif !important;
    font-size: 19px !important;
    color: #161c27 !important;
    text-align: center !important;
    font-weight: 400 !important;
    /* margin-top: 5px !important; */
}

/* STATISTIK SECTION END */

/* RESPONSIVE */

@media only screen and (max-width: 770px) {
    .statistik__container {
        display: block !important;
        margin: 0 auto !important;
        background-color: transparent !important;
        background-image: none !important
    }

    .location {
        margin-left: 0 !important;
    }

    .statistik__box {
        width: 500px !important;
        margin: 0 auto !important;
        margin-top: 30px !important;
    }
}

@media only screen and (max-width: 640px) {
    .statistik__box {
        width: 400px !important;
    }

    .container {
        width: 500px !important
    }
}

@media only screen and (max-width: 500px) {
    .statistik__box {
        width: 300px !important;
    }

     .container {
        width: 400px !important
    }
}

@media only screen and (max-width: 375px) {
    .header__btn {
        padding: 8px 28px !important;
    }

    .nav-hamburger-img {
        width: 30px !important;
        height: 30px !important;
    }
}</style>