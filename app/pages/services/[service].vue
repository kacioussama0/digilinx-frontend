<script setup>

import {collection, doc, query, where,orderBy} from 'firebase/firestore'

const route = useRoute()

const db = useFirestore()

const serviceId = computed(() => route.params.service)



const categoriesQuery = computed(() =>
    serviceId.value
        ? query(
            collection(db, 'categories'),
            where('serviceIds', 'array-contains', serviceId.value),
            where('isActive','==',true),
            orderBy('name','asc'),
        )
        : null
)


const serviceRef = computed(() =>
    serviceId.value ? doc(db, 'services', serviceId.value) : null
)

const service = useDocument(serviceRef)
const categories = useCollection(categoriesQuery)



</script>


<template>


  <UHeader
      title=""
      class="h-50 relative text-light flex items-center justify-items-center bg-gradient-to-t  from-[var(--svc)] to-neutral-900 mb-16"
      :ui = "{root: 'flex justify-center items-center'}"
      :style="{ '--svc': service.color}"
      v-if="service"
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

  <USkeleton  class="h-[150px] mb-16" v-else />



      <UContainer>

       <UPageGrid  class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-4 gap-12">

         <UCard
             v-if="categories.length"
             v-for="category in categories"
             class="relative h-[150px] rounded-2xl w-full hover:ring-[var(--svc)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
             :ui = "{
               'body': 'sm:p-0'
             }"
             :style="{ '--svc': service.color}"
         >


           <template #default>


             <div class="absolute start-1/2 top-1/2 tranform z-10 -translate-x-1/2 -translate-y-1/2 text-center">
               <h3 class="text-white text-3xl font-bold">{{category.name}}</h3>
               <UBadge color="neutral" variant="subtle" size="md"  class="font-bold rounded-full">0 Offers</UBadge>

             </div>

<!--             <img :src="category.thumbnail" class="object-top  w-full h-100">-->


             <div class="w-100 h-100 bg-gradient-to-t  from-[var(--svc)] to-neutral-900 hover:bg-gradient-to-l  absolute start-0 top-0 z-0"></div>



           </template>


         </UCard>

         <UCard
             v-for="i in 10"
             class="relative h-[180px] mb-16"
             :ui = "{
               'body': 'sm:p-0'
             }"
             v-else
         >


           <template #default>

             <USkeleton class="h-[180px] w-full" />

           </template>


         </UCard>

       </UPageGrid>







      </UContainer>






</template>