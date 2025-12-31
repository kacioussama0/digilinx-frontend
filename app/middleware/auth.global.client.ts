export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuthStore();

    // استنى حتى يكمّل init
    if (auth.loading) return;

    if (to.meta.requiresAuth && !auth.isLoggedIn) {
        return navigateTo("/login");
    }
});
