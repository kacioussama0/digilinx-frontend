<script setup lang="ts">

import type { NavigationMenuItem } from '@nuxt/ui'
import LogoDark from "./LogoDark.vue";
import {signOut} from "firebase/auth";
import {navigateTo} from "nuxt/app";
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

function isDarkMode() {
  const colorMode = useColorMode()
  if(colorMode.value === 'dark') {
    return true
  } else {
    return false
  }
}


async function logout() {
  const { $firebaseAuth } = useNuxtApp();

  if(confirm('Are you sure ?? ')) {
    await signOut($firebaseAuth);
    navigateTo('/login')

  }

}



</script>

<template>


  <UHeader>
    <template #title>

      <LogoWhite class="h-6 w-auto" v-if="!isDarkMode()" />
      <LogoDark class="h-6 w-auto" v-else />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>

      <UColorModeButton />




      <UButton
            label="Login"
            size="lg"
            color="secondary"
            to="/login"
            variant="solid"
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