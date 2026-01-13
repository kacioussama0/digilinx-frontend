<script setup lang="ts">

  useHead({
    title: 'Digilinx - The Way Of Trust',
    meta: [
      {
        name: 'description',
        content: 'Digilinx is a trusted technology solutions provider, delivering innovative digital services to empower businesses worldwide.'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  })


  function isHidden(routes) {

    const route = useRoute()

    for(let rt of routes) {
      if(route.path.includes(rt) || route.name.includes(rt)) return true;
    }

    return  false;

  }




  import type { NavigationMenuItem } from '@nuxt/ui'

  const items: NavigationMenuItem[][] = [[{

    label: 'Account',
    icon: 'i-lucide-user',
    active: true
  }], [{
    label: 'Feedback',
    icon: 'i-lucide-message-circle',
    to: 'https://github.com/nuxt-ui-templates/dashboard',
    target: '_blank'
  }, {
    label: 'Help & Support',
    icon: 'i-lucide-info',
    to: 'https://github.com/nuxt/ui',
    target: '_blank'
  }]]





</script>


<template>


  <UApp class="py-0 my-0">


    <AppHeader v-if="!isHidden(['login','register'])" />

      <UMain>
          <NuxtPage />
      </UMain>

      <AppFooter v-if="!isHidden(['login','register','dashboard'])"/>

  </UApp>
</template>

