<script setup lang="ts">

import {getServices} from '../firestore/services.js'



const services = ref([])

 onMounted(async () => {

  services.value = await getServices()

})



</script>

<template>



  <UPageSection class="h-[30vh] bg-gradient-to-b from-primary to-95% to-neutral-800 hero">

    <UContainer class="text-white lg:px-0 flex flex-col items-center">

      <h1 class="text-[60px] font-bold">Welcome To Digilin<span class="text-secondary">x</span></h1>
      <p class="mb-5 text-[24px]">Best Marketplace For Selling And Buying Digital Services</p>
      <div class="flex ">
        <UButton
            label="Buy"
            color="secondary"
            size="xl"
            class="me-2 px-26 py-3 text-2xl cursor-pointer rounded-4xl"
        />

        <UButton
            label="Sell"
            size="xl"
            variant="outline"
            class="px-16 text-2xl cursor-pointer rounded-4xl"
            color="neutral"
        />

      </div>


    </UContainer>


  </UPageSection>



  <UPageSection class="bg-neutral-800 text-white">

    <UContainer>


      <UPageGrid
          class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-6"
      >

        <div
            v-for="(service, index) in services"
            :style="{ '--svc': service.color}"
        >

        <UPageCard

            :key="service.id"
            :title="service.name"
            :icon="service.icon"
            :to="`/services/${service.id}`"
            class="text-center bg-transparent hover:bg-[var(--svc)] hover:scale-105 transition-all duration-300 ease-in-out"
            :ui = "{
            root: 'hover:ring-[var(--svc)]',
            leadingIcon: 'size-12 text-white transition-colors duration-300 ease-in-out',
            wrapper: `flex flex-col justify-center items-center  `,
            title: 'text-white   text-xl font-semibold mt-4',
          }"
            variant="solid"
        />

        </div>
      </UPageGrid>

    </UContainer>

    </UPageSection>


</template>