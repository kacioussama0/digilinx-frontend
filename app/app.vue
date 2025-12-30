<script setup lang="ts">

  import {onAuthStateChanged} from "firebase/auth";
  import {auth} from "./firebase.js";
  import {useRouter} from "vue-router";


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


  onAuthStateChanged(auth,(user) => {
    if(user) {
      console.log('User is signed in:', user);
    } else {
      console.log('No user is signed in, redirecting to login page.');
    }

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

      <UMain>
        <NuxtPage />
      </UMain>

      <AppFooter/>

  </UApp>
</template>

<script setup lang="ts">
</script>