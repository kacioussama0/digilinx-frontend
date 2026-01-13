<script setup lang="ts">

  import type {FormSubmitEvent, AuthFormField} from '@nuxt/ui'
  import LogoDark from "../components/LogoDark.vue";
  import {signInWithEmailAndPassword} from "firebase/auth";

  import {navigateTo} from "nuxt/app";


  const auth = useFirebaseAuth()!
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

  <LogoWhite class="h-16 my-16 object-contain object-center mx-auto"/>

  <section class="flex flex-col items-center justify-center p-4">


    <UPageCard class="w-full max-w-md rounded-2xl" variant="subtle" spotlight spotlight-color="secondary">

      <UAuthForm
          title="Login"
          :fields="fields"
          :submit="{
            label: 'Login',
            color: 'secondary'

          }"
          @submit="onSubmit"
          :ui = "{
            'footer': 'flex justify-evenly items-center'
          }"
      >

        <template #footer class="flex ">



          <span class="flex flex-col items-center">
            <UIcon name="fluent-color:lock-closed-16" size="30" />
            <NuxtLink to="/register" class="text-sm text-black mt-1">
                Sign up
            </NuxtLink>
          </span>

          <span class="flex flex-col items-center justify-center">
             <UIcon name="fluent-color:home-16" size="30" />
             <NuxtLink to="/" class="text-sm text-black mt-1">
                Return Home
              </NuxtLink>
          </span>


        </template>

      </UAuthForm>
    </UPageCard>
  </section>
</template>

<style scoped>




</style>
