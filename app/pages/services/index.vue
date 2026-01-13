<script setup lang="ts">


import {collection} from "firebase/firestore";

const db = useFirestore();
const services = useCollection(collection(db, 'services'));




</script>
<template>



  <UHeader
      title=""
      class="h-50 bg-primary"
  >

    <template #left>




        <h1 class="text-4xl font-bold my-0 text-white">
          <UIcon name="i-lucide-server" size="40" />
          Our Services
        </h1>





    </template>

  </UHeader>


  <section class="bg-gray-50">

    <UContainer class="py-16">

      <UPageGrid
          class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-4 gap-6 "
      >

        <div
            v-for="(service, index) in services"
            :style="{ '--svc': service.color,order:service.order}"
        >

          <UPageCard

              :key="service.slug"
              :title="service.name"
              :to="`/services/${service.id}`"
              class="hover:ring-[var(--svc)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
              :ui = "{
            root: 'hover:ring-[var(--svc)] rounded-2xl',
            leadingIcon: ' text-white transition-colors duration-300 ease-in-out',
            title: 'font-semibold mt-4',
          }"
              variant="outline"

          >

            <template #leading>
            <span class="w-[50px] h-[50px]  rounded-2xl bg-gradient-to-t  from-[var(--svc)] to-neutral-900 flex justify-center items-center">
               <UIcon :name="service.icon" class="size-6 text-white" />
            </span>

            </template>

            <p class="line-clamp-1">{{service.description}}</p>

          </UPageCard>

        </div>
      </UPageGrid>

    </UContainer>

  </section>

</template>