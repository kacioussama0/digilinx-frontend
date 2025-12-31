<script setup lang="ts">
const cards = ref([
  {
    title: 'Accounts',
    icon: 'i-lucide-user-check',
    to: '/docs/getting-started/integrations/icons'
  },
  {
    title: 'Gift Cards',
    icon: 'i-lucide-gift',
    to: '/docs/getting-started/integrations/fonts'
  },
  {
    title: 'Software',
    icon: 'i-lucide-code',
    to: '/docs/getting-started/integrations/color-mode'
  },
  {
    title: 'Mobile Recharge',
    icon: 'i-lucide-smartphone',
    to: '/docs/getting-started/integrations/color-mode'
  },
  {
    title: 'Games',
    icon: 'i-lucide-gamepad',
    to: '/docs/getting-started/integrations/color-mode'
  },
  {
    title: 'More Services',
    icon: 'i-lucide-more-horizontal',
    to: '/docs/getting-started/integrations/color-mode'
  }

])
</script>

<template>

  <UPageSection>





    <UPageCard
        variant="subtle"
        orientation="horizontal"

    >



      <template #body>
        <h1 class="text-[40px] font-bold text-primary">Welcome To Digilin<span class="text-secondary">x</span></h1>
        <p class="mb-5">Best Marketplace For Selling And Buying Digital Services</p>
        <div class="flex ">
          <UButton
              label="Buy"
              size="xl"

              trailing-icon="i-lucide-arrow-right-circle"
              class="me-3"
          />

          <UButton
              label="Sell"
              size="xl"
              variant="subtle"
              class="px-16"
              color="secondary"
          />

        </div>

      </template>

      <img src="../assets/imgs/hero.svg">

    </UPageCard>

  </UPageSection>

  <UContainer>

    <UPageGrid>
      <UPageCard


          v-for="(card, index) in cards"
          :key="index"
          v-bind="card"
      />
    </UPageGrid>


  </UContainer>

</template>