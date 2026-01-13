<script setup lang="ts">

import {doc} from "firebase/firestore";

const currentUser = useCurrentUser();

const db = useFirestore()


const userRef = computed(() =>
    currentUser.value
        ? doc(db, 'users', currentUser.value.uid)
        : null
)

const user = useDocument(userRef)


definePageMeta({
  middleware: ['auth']
});


</script>

<template>


  <h1 class="text-xl font-bold mt-[90px] mb-8">
    <UIcon name="i-lucide-user" />
    Account Details
   </h1>


  <div class="account-info sm:w-full lg:w-1/2" v-if="currentUser">


    <UCard>
      <template #default>

        <ul>

          <li class="flex items-center mb-8">
            <h4 class="me-16 text-muted">User Avatar</h4>
            <UAvatar text="O" size="3xl" />
          </li>

          <li class="flex items-center mb-8">
              <h4 class="me-16 text-muted">Full Name</h4>
              <span>{{user?.firstName + ' ' + user?.lastName}}</span>
            </li>

            <li class="flex items-center mb-8">
              <h4 class="me-16 text-muted">Username</h4>
              <span>{{user?.username}}</span>
            </li>

            <li class="flex items-center mb-8">
              <h4 class="me-16 text-muted">Email</h4>
              <span>{{user?.email}}</span>
            </li>

            <li class="flex items-center ">
              <h4 class="me-16 text-muted">Phone</h4>
              <span>{{user?.phone}}</span>
            </li>


        </ul>

      </template>
    </UCard>

  </div>

</template>

<style scoped>

</style>