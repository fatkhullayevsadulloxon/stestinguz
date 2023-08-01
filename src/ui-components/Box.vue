<template>
    <div class="box shadow-lg mb-10 bg-cyan-50 bg-opacity-30">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Box'
}
</script>
<style>

.box{
    /* max-width: 1100  px !important; */
    /* margin: 0 auto !important; */
    height: 150px;
    margin-left: 50px !important
}
    
</style>