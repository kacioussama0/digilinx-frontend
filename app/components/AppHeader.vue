<script setup lang="ts">

import type { NavigationMenuItem } from '@nuxt/ui'
import {signOut} from "firebase/auth";
const route = useRoute()

const auth = useFirebaseAuth()
const user = useCurrentUser();




const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/',
  },

  {
    label: 'Services',
    to: '/services',
    active: route.path === '/services',
  },

  {
    label: 'Stores',
    to: '/stores',
    active: route.path === '/stores',
  },

  {
    label: 'Contact',
    to: '/contact',
    active: route.path === '/contact',
}

])


const toast = useToast()

function logout() {

  signOut(auth).then(()=> {

    toast.add({
      description: 'Successfully logout',
      color: 'success',
      icon: 'i-material-symbols-check-circle-outline'
    })

    navigateTo('/')

  }).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.add({description: errorCode, color: 'error', icon: 'i-material-symbols-error-outline'})
  })

}




</script>

<template>


  <UHeader>
    <template #title>

      <LogoWhite class="h-8 w-auto"/>

    </template>

    <UNavigationMenu  :items="items" />

    <template #right>

      <UButton
            label="Login"
            size="lg"
            color="secondary"
            class="rounded-2xl px-5"
            to="/login"
            variant="solid"
            icon="mdi-user"
            aria-label="Login to Digilinx"
            v-if="!user"
        />



      <UButton
            label="Logout"
            size="lg"
            color="primary"
            @click="logout"
            variant="solid"
            icon="mdi-arrow-right"
            aria-label="Logout"
            v-if="user"
        />


      <ULink
          to="/dashboard/profile"
          v-if="user"
      >

        <UAvatar alt="" size="xl"  :text="user.displayName ?? 'DG'"  v-if="user"/>


      </ULink>


    </template>
  </UHeader>

</template>

<style scoped>

</style>