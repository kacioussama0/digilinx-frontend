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
      class="h-50 text-light flex items-center justify-items-center bg-primary mb-16"
      :ui = "{root: 'flex justify-center items-center'}"
  >

    <template #left>

      <h1 class="text-[40px] font-bold text-white flex items-end justify-center">
        <UIcon  :name="service.icon" class="size-20 me-5 text-secondary"/>
        {{service.name}}
      </h1>

    </template>

  </UHeader>



      <UContainer>

       <UPageGrid>

         <UCard
             v-if="categories.length"
             v-for="category in categories"
             class="relative h-[300px]"
             :ui = "{
               'body': 'sm:p-0'
             }"
         >




           <template #default>


             <h3 class="absolute start-1/2 top-1/2 tranform z-10 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-black ">{{category.name}}</h3>

             <img :src="category.thumbnail" class="object-center w-100 object-cover h-100">


             <div class="w-100 h-100 bg-neutral-800/50 absolute start-0 top-0 z-0"></div>




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