<script setup lang="ts">

import type { NavigationMenuItem } from '@nuxt/ui'
import LogoDark from "./LogoDark.vue";
import {signOut} from "firebase/auth";
import {navigateTo} from "nuxt/app";
import {onMounted} from "vue";
const route = useRoute()

const auth = useAuthStore()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/',
  },

  {
    label: 'About',
    to: '/about',
    active: route.path === '/about',
  },
  {
    label: 'Services',
    to: '/services',
    active: route.path === '/services',
  },
  {
    label: 'Contact',
    to: '/contact',
    active: route.path === '/contact',
}

])


async function logout() {
  const { $firebaseAuth } = useNuxtApp();

  if(confirm('Are you sure ?? ')) {
    await signOut($firebaseAuth);
    navigateTo('/login')

  }

}

onMounted(() => {



})





</script>

<template>


  <UHeader>
    <template #title>

      <LogoWhite class="h-8 w-auto"/>

    </template>

    <UNavigationMenu  :items="items" />

    <template #right>


      <UButton
            label="Login"
            size="lg"
            class="rounded-2xl px-5"
            to="/login"
            variant="outline"
            icon="mdi-user-circle"
            aria-label="Login to Digilinx"
            v-if="auth.isLoggedIn == false"
        />



      <UButton
            label="Logout"
            size="lg"
            color="primary"
            @click="logout"
            variant="solid"
            icon="mdi-arrow-right"
            aria-label="Logout"
            v-if="auth.isLoggedIn == true"
        />


      <ULink
          to="/profile"
          v-if="auth.isLoggedIn == true"
      >

        <UAvatar alt="" size="xl" :text="auth.user.displayName[0]"  v-if="auth.isLoggedIn == true"/>


      </ULink>


    </template>
  </UHeader>

</template>

<style scoped>

</style>