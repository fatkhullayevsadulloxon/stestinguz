<template>
    <section class="publicaton-top">
        <div class="container publication__container">
            <Box>
                <div class="publicaton-top__left pt-7 ms-5">
                    <span class="text-4xl font-semibold">Nashrlar</span>
                </div>
                <div class="2xl:flex xl:flex lg:flex md:block sm:block items-center justify-between mt-2">
                    <div class="2xl:flex xl:flex lg:flex md:flex sm:block">
                        <div>
                            <CategoryButton class="ml-5 btn-category">
                                Xalqaro
                            </CategoryButton>
                        </div>
                        <div>
                            <CategoryButton class="ml-5 btn-category">
                                Milliy
                            </CategoryButton>
                        </div>
                    </div>
                    <!-- <select class="select bg-white 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-96 outline-none h-10 border 2xl:mr-5 xl:mr-5 lg:mr-5 md:ml-5 md:mt-5 sm:ms-5 sm:mt-5  border-sky-500    ">
                        <option value="">Barchasi</option>
                        <option class="barchaso" v-for="publicData in publication" :key="publicData.id" value="">
                            {{ publicData.title }}</option>
                    </select> -->
                    <div
                        class="select bg-white 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-96 outline-none h-10 border 2xl:mr-5 xl:mr-5 lg:mr-5 md:ml-5 md:mt-5 sm:ms-5 sm:mt-5  border-sky-500    ">
                        <div class="relative text-lg">
                            <button class="flex items-center justify-between px-3 py-2 bg-white w-full  rounded-lg"
                                @click="isOptionsExpanded = !isOptionsExpanded" @blur="isOptionsExpanded = false">
                                <span class="text-sm opacity-50">Barcha yo'nalishlar</span>
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
                                    :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <transition enter-active-class="transform transition duration-500 ease-custom"
                                enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                                enter-to-class="translate-y-0 scale-y-100 opacity-100"
                                leave-active-class="transform transition duration-300 ease-custom"
                                leave-class="translate-y-0 scale-y-100 opacity-100"
                                leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                                <ul v-show="isOptionsExpanded"
                                    class="absolute list_box left-0 right-0 mb-4 mt-2 bg-white rounded shadow-lg overflow-hidden border">
                                    <li class="px-3 py-2 text-sm duration-300 hover:bg-gray-200">
                                        Barchasi
                                    </li>
                                    <li v-for="publicData in publicationCategory" :key="publicData.id"
                                        class="px-3 py-2 text-sm duration-300 hover:bg-gray-200"
                                        @mousedown.prevent="setOption(option)">
                                        {{ publicData.title }}
                                    </li>
                                </ul>
                            </transition>
                        </div>
                    </div>
                </div>
            </Box>
            <Card class="mt-10 " v-for="publicationAll in publication" :key="publicationAll.id">
                <div class="2xl:flex xl:flex 2xl:flex lg:flex md:block sm:block p-5">
                    <img class="mt-6 ms-5" :src="`${publicationAll.image_url}`" alt="" width="150" height="147">
                    <div class="ms-10 flex-direction ">
                        <h1 class="text-2xl font-bold max-w-xl text-2xl	m-0 p-0">{{ publicationAll.title }}</h1>
                        <p class="text-lg opacity-75 mt-2" v-html="`${publicationAll.description}`"></p>
                        <PrimaryButton class="fixedbutton">
                            <a :href="`${publicationAll.file_url}`">
                                Yuklab olish
                            </a>
                        </PrimaryButton>
                    </div>
                </div>
            </Card>
        </div>
    </section>
</template>
<script>
import Card from '../../ui-components/Card.vue';
import CategoryButton from '../../ui-components/CategoryButton.vue';

export default {
    components: { CategoryButton, Card },
    props: {
        publicationCategory: {
            type: Array,
            required: true
        },
        publication: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            isOptionsExpanded: false,
            selectedOption: "1x",
            options: ["1x", "2x", "3x", "4x or more"]
        };
    },
    methods: {
        setOption(option) {
            this.selectedOption = option;
            this.isOptionsExpanded = false;
        }
    }
}
</script>
<style scoped>
.publicaton-top {
    margin-top: 100px !important
}

span {
    font-family: "Poppins";
    color: #161c27
}

select option:checked,
option:hover {
    background-color: gray !important;
    color: white;
    padding: 20px !important;
}

h1,
p {
    font-family: sans-serif;
}

.list_box {
    border-radius: 0px 15px 15px 15px
}

img {
    position: relative;
}

.flex-direction {
    -webkit-flex-direction: column !important;
    display: flex;
    flex-direction: column !important;
    justify-content: space-between !important;
}

.fixedbutton{
    width: 300px;
    margin-top: 20px !important
}

@media only screen and (max-width: 1020px) {
    .flex-direction{
        margin-left: 20px !important;
        margin-top: 20px
    }

    .flex-direction p{
        margin-top: 10px !important
    }
}

@media only screen and (max-width: 768px) {
    .select {
        margin-left: 15% !important
    }

    .btn-category {
        margin-left: 15% !important;
        width: 384px !important;
        margin-top: 20px
    }
}

@media only screen and (max-width: 640px) {
    .select {
        width: 384px !important;
        margin-top: 20px
    }

    .btn-category {
        margin-left: 15% !important;
        width: 384px !important;
        margin-top: 20px
    }
}

@media only screen and (max-width: 600px) {
    .select {
        width: 300px !important;
        margin-top: 20px;
        margin-left: 20px !important
    }

    .btn-category {
        margin-left: 20px !important;
        width: 300px !important;
        margin-top: 20px
    }
}

@media only screen and (max-width: 500px) {
    .container {
        width: 400px !important
    }

    .fixedbutton{
        width: 250px !important;
    }
    
}
</style>