<script setup>
import { z } from 'zod'
import { createUserWithEmailAndPassword ,updateProfile ,sendEmailVerification} from "firebase/auth";
import { auth,app } from "../firebase.js";
import { doc, serverTimestamp, setDoc,collection ,getFirestore} from 'firebase/firestore'

import {navigateTo} from "nuxt/app";


const registerSchema = z.object({

  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  phone: z.string()
      .min(8, 'Phone is too short')
      .max(20, 'Phone is too long')
      .regex(/^(0)(5|6|7)\d{8}$/, 'Invalid phone number')
  ,
  password: z.string()
      .min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
})

const toast = useToast()

const loading = ref(false)

const authForm = ref(null)

const isDisabled = computed(() => {
  if (!authForm.value) return true

  const state = authForm.value.state
  return loading.value || !registerSchema.safeParse(state).success
})
const fields = ref([

{
  name: 'firstName',
  label: 'First Name',
  icon: 'fluent-color:person-16',
  placeholder: 'Enter your First Name',
  type: 'text',

},

{
  name: 'lastName',
  label: 'Last Name',
  icon: 'fluent-color:person-16',
  placeholder: 'Enter your Last Name',
  type: 'text'
},

{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  icon: 'fluent-color:mail-16',
  required: true
},
  {
    name: 'phone',
    type: 'phone',
    label: 'Phone',
    placeholder: 'Enter your phone',
    icon: 'fluent-color:phone-16',
    required: true
  },
  {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  icon: 'fluent-color:lock-closed-16',
  required: true
},

  {
    name: 'confirmPassword',
    label: 'Password Confirmation',
    type: 'password',
    placeholder: 'Enter your password confirmation',
    icon: 'fluent-color:lock-closed-16',
    required: true
  },

  {
    name: 'agree',
    label: 'I have read and agree to terms and conditions',
    type: 'checkbox'
  }


])

async function onSubmit({data}) {

  loading.value = true

  try {
    const cred = await createUserWithEmailAndPassword(auth, data.email , data.password);
    const user = cred.user

    await updateProfile(user, {
      displayName: `${data.firstName} ${data.lastName}`
    })

    const db = getFirestore(app)

    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,

      role: 'user',
      country: 'DZ',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }, { merge: true })

    await sendEmailVerification(user)

    toast.add({  description: 'Successfully registered' ,color: 'success',icon: 'i-material-symbols-check-circle-outline'})
    setTimeout(() => {
      navigateTo('/profile')
    }, 300);

  }catch(e) {

    toast.add({ title: 'Register failed', description: e.message, color: 'error' })

  }finally {
    loading.value = false
  }



}


</script>

<template>



  <UContainer class=" py-48">


    <UPageCard class="w-full" spotlight-color="primary" spotlight  variant="subtle">

      <UAuthForm
          ref="authForm"
          :schema="registerSchema"
          title="Register to your account"
          icon="i-lucide-user"
          description="Join the largest digital store in Algeria"
          :fields="fields"
          :disabled="loading"
          :loading="loading"
          :ui="{
              form: 'grid grid-cols-1 md:grid-cols-2 gap-4'
          }"
          @submit="onSubmit"
      >

        <template #footer>


          <NuxtLink to="/login" class="text-sm text-primary hover:underline">
            have an account? Sign in
          </NuxtLink>

        </template>

        <template #submit>
          <div class="md:col-span-2">
            <UButton
                type="submit"
                block
                color="secondary"
                :loading="loading"
                size="xl"
                :disabled="isDisabled"
            >
              Register
            </UButton>
          </div>
        </template>

      </UAuthForm>
    </UPageCard>


  </UContainer>

</template>

