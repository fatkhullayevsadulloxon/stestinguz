<template>
    <section class="publicaton-top">
        <div class="container publication__container">
            <Box>
                <div class="publicaton-top__left pt-7 ms-5">
                    <span class="text-4xl font-semibold">Nashrlar</span>
                </div>
                <div class="flex items-center justify-between mt-2">
                    <div>
                        <CategoryButton class="ml-5">
                            Xalqaro
                        </CategoryButton>
                        <CategoryButton class="ml-5">
                            Milliy
                        </CategoryButton>
                    </div>
                    <CategoryButton class="mr-5">
                        Xalqaro
                    </CategoryButton>
                </div>
            </Box>
        </div>
    </section>
</template>
<script>
import CategoryButton from '../../ui-components/CategoryButton.vue';

export default {
    components: { CategoryButton }
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
</style>