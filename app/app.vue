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

</script>


<template>
  <UApp>

<!--      <UMarquee-->
<!--       reverse-->
<!--        class="bg-primary text-white py-2 text-center font-semibold"-->
<!--      >-->
<!--        <h3 class="fs-1">Digilinx The Way Of Trust</h3>-->
<!--      </UMarquee>-->


    <AppHeader/>

      <UMain class="bg-blue-100 py-16">
        <NuxtPage />
      </UMain>

      <AppFooter/>

  </UApp>
</template>

