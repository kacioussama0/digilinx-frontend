<script setup lang="ts">
import {doc,addDoc,collection, setDoc} from "firebase/firestore";
import {db} from "~/firestore/firestore";

let states: any[] = []
let districts = []
fetch('/algeria_cities.json').then((response)=> {

  return response.json()

}).then((data)=> {


  console.log(data)

  const mapped = data.map((city: any) => {
        return JSON.stringify({
          stateId: city.wilaya_code,
          districtName: city.daira_name_ascii,
          districtNameAr: city.daira_name,
          countryId: "DZ"
        })
  })


  // districts =   [...new Set(mapped)]

  // districts.forEach(async (district) => {
  //   const docRef = await addDoc(collection(db, "districts"), JSON.parse(district))
  //   console.log(docRef)
  //
  // })


  // states = [...new Set(mapped)]
  //
  //
  // states.forEach(async (state) => {
  //   const docRef = await addDoc(collection(db, "states"), JSON.parse(state))
  //   console.log(docRef)
  //
  // })




});


</script>

<template>

  <h1>About Us</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dicta dolorem ea error esse est impedit, officiis sunt ut vel.</p>

</template>