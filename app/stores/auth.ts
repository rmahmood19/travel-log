import { createAuthClient } from 'better-auth/vue';
import { defineStore } from 'pinia';

const authClient = createAuthClient();

export const useAuthStore = defineStore('authStore', () => {
    const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(null);

    async function init() {
        session.value = await authClient.useSession(useFetch);
    }

    const user = computed(() => session.value?.data?.user || null);
    const loading = computed(() => session.value?.isPending);

    async function signIn() {
        await authClient.signIn.social({
            provider: 'github',
            callbackURL: '/dashboard',
            errorCallbackURL: '/error',
        });
    }

    async function signOut() {
        await authClient.signOut();
        navigateTo('/');
    }

    return {
        init,
        loading,
        signIn,
        signOut,
        user,
    };
});
