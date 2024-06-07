<template>
    <div class="custom-background min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="min-w-[367px]">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.custom-background {
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    background-position: center;
}
</style>