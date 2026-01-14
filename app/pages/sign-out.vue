<script setup lang="ts">

const authStore = useAuthStore();

onMounted(() => {
    authStore.signOut();
});

</script>

<template>
    <p>Logging out...</p>
</template>

<style scoped>

</style>
