<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
</script>

<template>
    <div class="hero bg-base-300 container mx-auto mt-8">
        <div class="hero-content text-center min-h-96">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">
                    Travel Log
                </h1>
                <p class="py-6">
                    Keep track of your travels and adventure with this simple app.
                    Add photos, maps, notes to create a digital journal of your travels.
                </p>
                <AuthButton v-if="!authStore.user" />

                <NuxtLink v-else to="/dashboard" class="btn btn-primary">
                    Start logging
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
