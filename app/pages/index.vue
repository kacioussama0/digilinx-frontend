<script setup lang="ts">

import {getServices} from '../firestore/services.js'

const steps = [
  {
    title: "Find Services",
    desc: "Browse thousands of digital services from verified sellers. Filter by category, price, and ratings.",
    icon: "i-heroicons-magnifying-glass",
    bg: "bg-blue-500"
  },
  {
    title: "Place Order",
    desc: "Choose your service and complete your order securely. Payment is held until delivery.",
    icon: "i-heroicons-shopping-cart",
    bg: "bg-purple-500"
  },
  {
    title: "Communicate",
    desc: "Chat directly with your seller. Provide requirements and track your order progress.",
    icon: "i-heroicons-chat-bubble-left-right",
    bg: "bg-orange-500"
  },
  {
    title: "Get Delivered",
    desc: "Receive your service and confirm completion. Leave a review to help others.",
    icon: "i-heroicons-check-badge",
    bg: "bg-green-500"
  }
]

const features = [
  {
    title: "Buyer Protection",
    desc: "Your payment is secured until you confirm delivery. Full refund if something goes wrong.",
    icon: "i-heroicons-shield-check"
  },
  {
    title: "Secure Transactions",
    desc: "SSL encryption and secure payment processing protect your sensitive information.",
    icon: "i-heroicons-lock-closed"
  },
  {
    title: "Fast Delivery",
    desc: "Most services delivered within hours. Real-time tracking and updates.",
    icon: "i-heroicons-clock"
  },
  {
    title: "24/7 Support",
    desc: "Our support team is always here to help resolve any issues quickly.",
    icon: "i-heroicons-phone"
  }
]

const services = ref([])

 onMounted(async () => {

  services.value = await getServices()

})



</script>

<template>



  <UPageSection class="bg-secondary-50 text- hero">

    <UContainer class=" lg:px-0 flex flex-col items-center">

      <UBadge color="secondary" class="mb-8 text-md font-light flex  items-center justify-center rounded-4xl px-8" icon="i-lucide-shield" variant="subtle">Trusted by 10,000+ in Algeria</UBadge>


      <h1 class="text-6xl leading-16 text-center mb-5 font-bold">Your Marketplace for <br> <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Digital Services</span> </h1>
      <p class="mb-8 text-2xl w-8/12 text-center">Buy and sell gaming accounts, in-game items, coaching services, and more. Safe transactions, verified sellers, instant delivery.</p>

      <div class="flex w-full justify-center mb-20">
        <UInput
            icon="i-lucide-search"
            placeholder="Search for services, games , sellers"
            size="xl"
            variant="subtle"

            class="me-2  w-4/12 "
            :ui = "{
              'base': 'py-4 px-6 rounded-2xl shadow-xl'
            }"
        />

        <UButton
          label="Search"
          size="xl"
          class="rounded-2xl py-4 px-6"
        />
      </div>

<!--      <span>-->
<!--          <UButton-->
<!--              label="Browse Products"-->
<!--              size="xl"-->
<!--              trailing-icon="i-lucide-arrow-right"-->
<!--              class="rounded-2xl me-2 py-3 px-6"-->
<!--          />-->

<!--           <UButton-->
<!--               label="Start Selling"-->
<!--               size="xl"-->
<!--               variant="outline"-->
<!--               class="rounded-2xl py-3 px-4"-->
<!--           />-->
<!--      </span>-->

    </UContainer>


  </UPageSection>



  <section class="bg-gray-50">

    <UContainer class="py-16">

      <h3 class="text-4xl mb-2 font-bold">Browse Categories</h3>
      <h5 class="mb-16 text-xl">Find exactly what you need across our service categories</h5>


      <UPageGrid
          class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-4 gap-6 "
      >

        <div
            v-for="(service, index) in services"
            :style="{ '--svc': service.color,order:service.order}"
        >

        <UPageCard

            :key="service.slug"
            :title="service.name"
            :to="`/services/${service.id}`"
            class="hover:ring-[var(--svc)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
            :ui = "{
            root: 'hover:ring-[var(--svc)] rounded-2xl',
            leadingIcon: ' text-white transition-colors duration-300 ease-in-out',
            title: 'font-semibold mt-4',
          }"
            variant="outline"

        >

          <template #leading>
            <span class="w-[50px] h-[50px]  rounded-2xl bg-gradient-to-t  from-[var(--svc)] to-neutral-900 flex justify-center items-center">
               <UIcon :name="service.icon" class="size-6 text-white" />
            </span>

          </template>

        </UPageCard>

        </div>
      </UPageGrid>

    </UContainer>

    </section>


    <section>


      <UContainer class="py-16">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold tracking-tight">How It Works</h2>
          <p class="mt-3 text-gray-500">
            Getting started is easy. Follow these simple steps to buy or sell digital services.
          </p>
        </div>

        <!-- Steps -->
        <div class="relative">
          <!-- Connecting line (desktop) -->
          <div
              class="hidden md:block absolute left-0 right-0 top-[48px] h-[2px] bg-gray-200"
              aria-hidden="true"
          />

          <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div v-for="(s, i) in steps" :key="s.title" class="relative text-center">
              <!-- Icon box -->
              <div class="relative mx-auto w-[92px] h-[92px] rounded-2xl flex items-center justify-center shadow-sm"
                   :class="s.bg">
                <UIcon :name="s.icon" class="w-9 h-9 text-white" />


              </div>

              <!-- Title & Desc -->
              <h3 class="mt-6 text-lg font-semibold text-gray-900">{{ s.title }}</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed">
                {{ s.desc }}
              </p>

              <!-- Mobile line between cards -->
              <div v-if="i !== steps.length - 1" class="md:hidden mx-auto mt-8 h-10 w-[2px] bg-gray-200" />
            </div>
          </div>
        </div>
      </UContainer>


    </section>


  <section class="relative py-16 bg-gradient-to-b from-secondary via-gray-200 to-gray-300">
    <UContainer>
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold tracking-tight text-gray-900">
          Trade with Confidence
        </h2>
        <p class="mt-3 text-gray-700">
          We've built the safest platform for digital transactions. Your security is our priority.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <UCard
            v-for="f in features"
            :key="f.title"
            :ui="{
            base: 'rounded-2xl shadow-sm',
            body: { base: 'p-8 text-center' }
          }"
        >
          <!-- Icon box -->
          <div
              class="mx-auto mb-5 w-14 h-14 rounded-xl bg-violet-100/70
                   flex items-center justify-center"
          >
            <UIcon :name="f.icon" class="w-7 h-7 text-primary" />
          </div>

          <h3 class="text-lg font-semibold text-center text-gray-900">
            {{ f.title }}
          </h3>

          <p class="mt-3 text-sm leading-relaxed text-center text-gray-600">
            {{ f.desc }}
          </p>
        </UCard>
      </div>
    </UContainer>
  </section>





  <section>


    <UContainer class="py-14">
      <div
          class="relative overflow-hidden rounded-[28px] px-6 py-14 md:px-16 md:py-20
             bg-gradient-to-r from-primary to-secondary"
      >
        <!-- (optional) soft glow -->
        <div class="pointer-events-none absolute inset-0 opacity-20 blur-3xl" aria-hidden="true">
          <div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20" />
          <div class="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/20" />
        </div>

        <div class="relative mx-auto max-w-3xl text-center text-white">
          <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready to Start Selling?
          </h2>

          <p class="mt-4 text-base md:text-lg leading-relaxed text-white/85">
            Join thousands of sellers earning money on Digilinx. Create your first
            listing in minutes and reach buyers worldwide.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UButton
                size="lg"
                color="gray"
                variant="solid"
                class="rounded-full px-8 py-3 !bg-zinc-800/90 hover:!bg-zinc-800 text-white shadow-sm"
                :to="sellerTo"
            >
              Become a Seller
              <UIcon name="i-heroicons-arrow-right" class="ms-2 h-5 w-5" />
            </UButton>

            <UButton
                size="lg"
                color="white"
                variant="outline"
                class="rounded-full px-8 py-3 border-white/30 text-white hover:bg-white/10"
                :to="browseTo"
            >
              Browse Services
            </UButton>
          </div>
        </div>
      </div>
    </UContainer>


  </section>



</template>