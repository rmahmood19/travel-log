<script setup lang="ts">

const isSidebarOpen = ref(true)

function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
    <div class="flex flex-1">
        <div class="bg-base-100" :class="{ 'w-64': isSidebarOpen, 'w-16': !isSidebarOpen }">
            <div
                class="flex "
                :class="{ 'justify-end': isSidebarOpen, 'justify-center': !isSidebarOpen }"
                @click="toggleSidebar()"
            >
                <Icon v-if="isSidebarOpen" name="tabler:chevron-left" class="w-6 h-6" size="48" />
                <Icon v-else name="tabler:chevron-right" class="w-6 h-6" size="48" />
            </div>
            <div class="flex flex-col">
                <SidebarButton :showLabel="isSidebarOpen" icon="tabler:map" label="Location" href="/dashboard" />
                <SidebarButton :showLabel="isSidebarOpen" icon="tabler:circle-plus-filled" label="Add location" href="/location/add" />
                <div class="divider" />
                <SidebarButton :showLabel="isSidebarOpen" icon="tabler:logout-2" label="Sign out" href="/sign-out" />
            </div>
        </div>
        <div class="flex-1">
            main
        </div>
    </div>
</template>
