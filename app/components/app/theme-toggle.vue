<script lang="ts" setup>

    const colorMode = useColorMode()

    const isDark = computed({
        get() {
            return colorMode.value === 'dark'
        },
        set(value) {
            colorMode.preference = value ? "dark" : "light"
        }
    })


</script>
<template>
    <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input v-model="isDark" type="checkbox" />

        <!-- sun icon -->
        <Icon class="swap-on" name="tabler:sun" size="24" />
        <Icon class="swap-off" name="tabler:moon-filled" size="24" />

        <!-- moon icon -->
    </label>
</template>