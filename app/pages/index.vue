<script setup lang="ts">

import {getServices} from '../firestore/services.js'

const services = ref([])

 onMounted(async () => {
  services.value = await getServices()

})



</script>

<template>

  <UPageSection>

    <UContainer>


      <UPageCard
          variant="outline"
          orientation="horizontal"
          class="rounded-xl border-1 border-secondary p-10  gap-10 lg:gap-20 items-center justify-between"
      >

        <template #body>
          <h1 class="text-[60px] font-bold">Welcome To Digilinx</h1>
          <p class="mb-5 text-[24px]">Best Marketplace For Selling And Buying Digital Services</p>
          <div class="flex ">
            <UButton
                label="Buy"
                size="xl"
                class="me-2 px-26 py-3 text-2xl cursor-pointer"
            />

            <UButton
                label="Sell"
                size="xl"
                variant="subtle"
                class="px-16 text-2xl cursor-pointer"
                color="secondary"
            />

          </div>

        </template>

        <img src="../assets/imgs/hero.svg">

      </UPageCard>


    </UContainer>


  </UPageSection>




    <UPageSection>

    <UContainer>

      <h2 class="text-4xl font-bold mb-16">Our Services</h2>

      <UPageGrid
          class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        <UPageCard
            v-for="(service, index) in services"
            :key="service.id"
            :title="service.name"
            :icon="service.icon"
            :description="service.description"
            :to="`/services/${service.id}`"
            spotlight-color="secondary"
            spotlight
            :class="`order-[${service.order}] text-center`"
            :ui = "{
            leadingIcon: 'size-12',
            wrapper: `flex flex-col justify-center items-center `,

          }"
            variant="outline"
        />
      </UPageGrid>

    </UContainer>

    </UPageSection>


</template>