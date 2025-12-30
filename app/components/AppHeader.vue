<script setup lang="ts">

import type { NavigationMenuItem } from '@nuxt/ui'
import LogoDark from "./LogoDark.vue";
const route = useRoute()

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
        />



    </template>
  </UHeader>
</template>

<style scoped>

</style>