<script setup lang="ts">

  import type {FormSubmitEvent, AuthFormField} from '@nuxt/ui'
  import LogoDark from "../components/LogoDark.vue";
  import {signInWithEmailAndPassword} from "firebase/auth";
  import {auth} from "../firebase.js";
  import {useRouter} from "vue-router";
  import {navigateTo} from "nuxt/app";


  const toast = useToast()

  const fields: AuthFormField[] = [{
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true
  }, {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true
  }, {
    name: 'remember',
    label: 'Remember me',
    type: 'checkbox'
  }]

  function onSubmit(event: FormSubmitEvent<any>) {

    signInWithEmailAndPassword(auth, event.data.email, event.data.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('User signed in:', user);
          toast.add({
            description: 'Successfully logged in',
            color: 'success',
            icon: 'i-material-symbols-check-circle-outline'
          })
          setTimeout(() => {
            navigateTo('/')
          }, 300);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error signing in:', errorCode, errorMessage);
          toast.add({description: errorCode, color: 'error', icon: 'i-material-symbols-error-outline'})


        });

  }


</script>

<template>

  <UHeader class="h-100 text-light bg-primary">

    <template #title>

      <LogoDark class="h-50 object-contain object-center"/>

    </template>

  </UHeader>

  <div class="flex flex-col items-center justify-center p-4 mt-50">


    <UPageCard class="w-full max-w-md" variant="subtle">


      <UAuthForm
          title="Login to your account"
          :fields="fields"
          :submit="{
            label: 'Login',
            color: 'primary',

          }"
          @submit="onSubmit"
      >

        <template #footer>

          <NuxtLink to="/register" class="text-sm text-primary hover:underline">
            Don't have an account? Sign up
          </NuxtLink>

        </template>

      </UAuthForm>
    </UPageCard>
  </div>
</template>