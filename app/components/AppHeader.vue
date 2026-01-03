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

onMounted(() => {

  const header = document.querySelector('header')

  window.onscroll = function() {
    if (window.pageYOffset >= header.offsetHeight) {
      header?.classList.add('shadow-lg');

    } else {
      header?.classList.remove('shadow-lg');

    }
  };

})





</script>

<template>


  <UHeader class="bg-primary border-0 my-0 py-0">
    <template #title>

      <LogoDark class="h-8 w-auto"/>

    </template>

    <UNavigationMenu variant="solid" class="text-white" :items="items" />

    <template #right>

      <UColorModeButton variant="outline" class="rounded-4xl" />

      <UButton
            label="Login"
            size="lg"
            color="light"
            class="rounded-4xl text-white"
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