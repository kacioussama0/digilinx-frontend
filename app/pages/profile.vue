<script setup lang="ts">
  import {sendEmailVerification,updateProfile} from "firebase/auth";
  import { doc, getDoc , getFirestore } from "firebase/firestore";
  import {app,auth} from '~/firebase';

  const userAuth = useAuthStore()

  const toast = useToast()

  const db = getFirestore(app)

  const userDoc = await getDoc(doc(db, "users", userAuth.user.uid));

  const userInfos = ref({});


  if(userDoc.exists()) {

    const data = userDoc.data();

    userInfos.value = data

  }



  function updatePhoto(event: any) {


    const user = auth.currentUser
    if (!user) throw new Error("User not authenticated")



    updateProfile(user, { displayName: user.displayName, photoURL: event.target.value}).then(()=> {

      toast.add({  description: 'Photo Updated Successfully' ,color: 'success',icon: 'i-material-symbols-check-circle-outline'})


    }).catch((err)=> {
      toast.add({  description: 'Error When Update Profile Photo' ,color: 'error',icon: 'i-material-symbols-error-outline'})

    });





  }

  function resendEmail() {
    sendEmailVerification(userAuth.user).then(()=>{

      toast.add({  description: 'Email Sent Successfully' ,color: 'success',icon: 'i-material-symbols-check-circle-outline'})


    }).catch((err) => {

      toast.add({  description: 'Error When Send Email Try Again.' ,color: 'error',icon: 'i-material-symbols-error-outline'})

    });
  }


</script>

<template>

  <UHeader class="h-100 text-light flex items-center content-center bg-primary">

    <template #title>

      <h1 class="text-[40px] text-white">My Account</h1>

    </template>

  </UHeader>

  <div class="flex flex-col items-center justify-center p-4 ">

    <UContainer>


      <UAlert
          title="Verify Your Email"
          icon="i-lucide-mail"
          color="warning"
          class="mb-5"
          v-if="!userAuth.isVerified"
      >

        <template #description>


          <p>To Continue using our platform you must to verify your email  <ULink @click="resendEmail">Resend Here</ULink>
          </p>

        </template>

      </UAlert>


      <UPageCard  variant="subtle" title="Account Infomation" v-if="userInfos">


        <template #body>


          <UAvatar :text="userInfos.firstName[0].toUpperCase()" size="xl" class="mb-4" />


          <ul>

            <UInput type="text" v-model="userInfos.username"  disabled></UInput>
            <UInput type="text" v-model="userInfos.firstName" ></UInput>
            <UInput type="text" v-model="userInfos.lastName" ></UInput>



            <UInput type="url" @focusout="updateProfile"></UInput>



          </ul>

        </template>


      </UPageCard>

    </UContainer>
  </div>
</template>