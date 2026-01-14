<script setup lang="ts">

const route = useRoute();
const error = route.query.error || 'unknown error';

</script>

<template>
    <div role="alert" class="alert alert-error">
        <span>oh no {{ error }}</span>
    </div>
</template>

<style scoped>

</style>
