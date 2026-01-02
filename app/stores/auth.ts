import { defineStore } from "pinia";
import { onAuthStateChanged, type User } from "firebase/auth";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null as User | null,
        loading: true,
        isVerified: false,
        error: null as string | null,
    }),

    getters: {
        isLoggedIn: (s) => !!s.user,
    },

    actions: {
        init() {
            const { $firebaseAuth } = useNuxtApp();

            // حماية ضد undefined (سبب خطأك)
            if (!$firebaseAuth) {
                this.loading = false;
                this.error = "Firebase Auth not initialized (plugin order/client)";
                return;
            }

            onAuthStateChanged($firebaseAuth, (u) => {
                this.user = u;
                this.isVerified = u?.emailVerified;
                this.loading = false;
            });
        },

    },



});
