<script setup lang="ts">

const props = defineProps<{
    icon: string
    label: string
    href: string
    showLabel: boolean
}>()

const route = useRoute()

</script>

<template>
    <NuxtLink
        :to="props.href"
        :class="{ 'bg-base-300': route.path === props.href, 'justify-center': !props.showLabel, 'justify-start': props.showLabel }"
        class="flex gap-2 p-2 hover:bg-base-300 hover:cursor-pointer"
    >
        <Icon :name="props.icon" size="24" />
        <span v-if="props.showLabel">{{ props.label }}</span>
    </NuxtLink>
</template>

<style scoped>

</style>
