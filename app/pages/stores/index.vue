<script setup lang="ts">

import {collection} from "firebase/firestore";

const db = useFirestore();
const stores = useCollection(collection(db, 'seller_stores'));


</script>

<template>

  <UHeader
      title=""
      class="h-50 relative text-light bg-primary"
  >

        <template #left class=" flex flex-col items-baseline justify-end">

          <UIcon name="i-lucide-store" size="60" class="text-white" />
          <h1 class="text-5xl font-bold my-0 text-white">
            Stores
          </h1>

        </template>


  </UHeader>


  <section class="stores bg-gray-100 py-16">

    <UContainer>


      <UPageGrid  class=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-3 gap-12">


        <UCard class=" px-4 shadow-sm hover:-translate-y-1 cursor-pointer transition ease-in-out rounded-4xl flex flex-col justify-center items-center text-center" v-for="store in stores">

          <template #default>



            <img :src="store.store_logo" width="150" class="rounded-4xl mx-auto mb-6" :alt="store.store_name"/>

            <h3 class="text-3xl my-0 font-medium mb-4 line-clamp-1">{{store.store_name}}</h3>

            <p class="text-muted mb-6 line-clamp-3">{{store.store_description}}</p>

            <ul class="flex text-sm text-muted justify-between bg-gray-100 p-4 rounded-4xl">

              <li class="flex flex-col gap-3 justify-center items-center">
                  <UIcon name="i-lucide-user" size="20" class="text-primary" />
                  {{store.member_at.toDate().toLocaleDateString('en-GB')}}
              </li>

              <li class="flex flex-col gap-3 justify-center items-center">
                <UIcon name="i-lucide-arrow-up-down" size="20" class="text-warning" />
                {{store.completed_orders}}
              </li>

              <li class="flex flex-col gap-3 justify-center items-center">
                <UIcon name="i-lucide-thumbs-up" size="20" class="text-success" />
                99.6%
              </li>

              <li class="flex flex-col gap-3 justify-center items-center">
                <UIcon name="i-lucide-thumbs-down" size="20" class="text-error" />
                0.6%
              </li>



            </ul>


          </template>

        </UCard>



      </UPageGrid>



    </UContainer>



  </section>



</template>

<style scoped>

</style>