<script setup>


</script>

<template>
  <footer class="bg-primary text-white">
    <UContainer class="py-12">
      <!-- Top -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand -->
        <div>
          <div class="mb-5">
            <LogoDark class="h-8"/>
          </div>
          <p class="text-sm leading-relaxed max-w-xs">
            The trusted marketplace for digital services and gaming assets.
          </p>
        </div>

        <!-- Marketplace -->
        <div>
          <h4 class="font-semibold mb-4">Marketplace</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/services" class="hover:underline">Browse Services</NuxtLink></li>
            <li><NuxtLink to="/gaming-accounts" class="hover:underline">Gaming Accounts</NuxtLink></li>
            <li><NuxtLink to="/coaching" class="hover:underline">Coaching</NuxtLink></li>
            <li><NuxtLink to="/power-leveling" class="hover:underline">Power Leveling</NuxtLink></li>
          </ul>
        </div>

        <!-- Sellers -->
        <div>
          <h4 class="font-semibold mb-4">Sellers</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/seller/start" class="hover:underline">Start Selling</NuxtLink></li>
            <li><NuxtLink to="/seller/create" class="hover:underline">Create Service</NuxtLink></li>
            <li><NuxtLink to="/seller/dashboard" class="hover:underline">Seller Dashboard</NuxtLink></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="font-semibold mb-4">Support</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/help" class="hover:underline">Help Center</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:underline">Contact Us</NuxtLink></li>
            <li><NuxtLink to="/terms" class="hover:underline">Terms of Service</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="hover:underline">Privacy Policy</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="my-8"> </div>

      <!-- Bottom -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <span>© 2026 Digilinx. All rights reserved.</span>


      </div>
    </UContainer>
  </footer>
</template>

<script>

</script>