<template>
    <button class="header__btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'PrimaryButton'
}
</script>
<style>
.header__btn {
    padding: 12px 65px;
    background-color: #4f95ff;
    color: white;
    transition: all 0.4s;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}

.header__btn:hover {
    background-color: #007bff;
    transition: all 0.4s
}
</style>