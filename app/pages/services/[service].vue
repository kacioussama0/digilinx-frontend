<script setup>

import {getService, getServiceCategories, getServices} from "~/firestore/services.js";

const route = useRoute()

const serviceId = route.params.service

const service = ref({})

const categories = ref([])


onMounted(async () => {
  service.value = await getService(serviceId)

  categories.value = await getServiceCategories(serviceId)

})





</script>


<template>


  <UHeader
      title=""
      class="h-50 relative text-light flex items-center justify-items-center bg-gradient-to-t  from-[var(--svc)] to-neutral-900 mb-16"
      :ui = "{root: 'flex justify-center items-center'}"
      :style="{ '--svc': service.color}"
  >

    <template #left>

       <span class="w-[75px] h-[75px] rounded-[50%]  bg-white flex items-center justify-center me-5">
                  <UIcon  :name="service.icon" :class="`size-10  text-[var(--svc)]`"/>
       </span>



        <div class="flex flex-col justify-center items-baseline">

          <h1 class="text-4xl font-bold my-0 text-white">
            {{service.name}}
          </h1>

          <p class="text-white mb-0">{{service.description}}</p>

        </div>




    </template>

  </UHeader>



      <UContainer>

       <UPageGrid  class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-4 gap-12">

         <UCard
             v-if="categories.length"
             v-for="category in categories"
             class="relative h-[180px] rounded-2xl w-full hover:ring-[var(--svc)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
             :ui = "{
               'body': 'sm:p-0'
             }"
             :style="{ '--svc': service.color}"
         >


           <template #default>


             <h3 class="absolute start-1/2 top-1/2 tranform z-10 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">{{category.name}}</h3>

             <img :src="category.thumbnail" class="object-center w-full object-cover h-100">


             <div class="w-100 h-100 bg-gradient-to-t  from-[var(--svc)] to-neutral-900 absolute start-0 top-0 z-0"></div>




           </template>


         </UCard>

         <UCard
             v-for="i in 10"
             class="relative h-[300px]"
             :ui = "{
               'body': 'sm:p-0'
             }"
             v-else
         >




           <template #default>

             <USkeleton class="h-[300px] w-full" />

           </template>


         </UCard>

       </UPageGrid>







      </UContainer>






</template>