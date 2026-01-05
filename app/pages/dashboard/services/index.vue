<script setup lang="ts">

import type { FormSubmitEvent } from '@nuxt/ui'
import { z } from 'zod'
import {addService, getServices} from "~/firestore/services";



const services = ref([]);




onMounted(async ()=> {

  services.value = await getServices();

});



const addSchema = z.object({

  id: z.string().max(20),
  name: z.string().min(5, 'Last name must be at least 2 characters'),
  description: z.string(),
  order: z.int(),
  featured: z.boolean(),
  enabled: z.boolean(),
  icon: z.string(),
  color: z.string().max(7).min(7)

})




const state = reactive({
  id: '',
  name: '',
  description: '',
  order: '',
  featured: false,
  enabled: false,
  icon: '',
  color: ''
})

let addServiceModal = ref(false)

const isLoading = ref(false)

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {

  const result = await addService(state);
  isLoading.value = true

  if(result) {
    addServiceModal.value = false;
    toast.add({ title: 'Success', description: 'service added successfully', color: 'success' })
  }

  else {
    toast.add({ title: 'Error', description: 'service not added', color: 'error' })

  }

  isLoading.value = false


}


</script>

<template>

  <UHeader
      title=""
      class="h-50 text-light flex items-center justify-items-center bg-primary mb-16"
      :ui = "{root: 'flex justify-center items-center'}"
  >

    <template #left>

      <h1 class="text-[40px] font-bold text-white flex items-end justify-center">
        Services
      </h1>

    </template>

  </UHeader>



  <UContainer>


    <UModal title="Add Service" v-model:open="addServiceModal">
      <UButton label="Add Service" color="secondary" size="xl" class="mb-8" variant="solid" />

      <template #body>

        <UForm :schema="addSchema" :disabled="isLoading" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormField label="ID" name="id">
            <UInput v-model="state.id" class="w-full" />
          </UFormField>

          <UFormField label="Name" name="name">
            <UInput v-model="state.name" type="text" class="w-full" />
          </UFormField>


          <UFormField label="Description" name="description">
            <UTextarea v-model="state.description"  class="w-full" />
          </UFormField>



          <UFormField label="Icon" name="text">
            <UInput v-model="state.icon" type="text" class="w-full" />
          </UFormField>


          <UFormField label="Color" name="color">
            <UInput v-model="state.color" type="color" class="w-full" />
          </UFormField>


          <UFormField label="Order" name="order">
            <UInput v-model="state.order" type="number" class="w-full" />
          </UFormField>


          <UFormField label="Enabled" name="enabled">
            <UInput v-model="state.enabled" type="checkbox" />
          </UFormField>



          <UFormField label="Featured" name="featured">
            <UInput v-model="state.featured" type="checkbox"/>
          </UFormField>



          <UButton type="submit" :loading="isLoading">
            Add
          </UButton>
        </UForm>


      </template>
    </UModal>


    <UTable :data="services" class="flex-1" />




  </UContainer>

</template>

<style scoped>

</style>