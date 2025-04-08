<template>
  <footer
    class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 mt-12 border-t dark:border-t-gray-700"
  >
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="mb-6 md:mb-0">
          <h4 class="font-bold text-lg mb-4">About Us</h4>
          <p class="text-sm">
            A brief description of your website or company. You can talk about
            your mission, values, or what you offer.
          </p>
        </div>

        <div class="mb-6 md:mb-0">
          <h4 class="font-bold text-lg mb-4">Quick Links</h4>
          <ul class="text-sm">
            <li>
              <RouterLink to="/" class="hover:underline">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="hover:underline">About</RouterLink>
            </li>
            <li>
              <RouterLink to="/settings" class="hover:underline"
                >Settings</RouterLink
              >
            </li>
            <!-- Add more links as needed -->
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-lg mb-4">Contact Us</h4>
          <ul class="text-sm">
            <li>
              Email:
              <a href="mailto:info@example.com" class="hover:underline"
                >info@example.com</a
              >
            </li>
            <li>Phone: +1 (123) 456-7890</li>
            <!-- Add more contact info -->
          </ul>
        </div>
      </div>

      <div class="mt-12 text-center text-sm">
        <p>
          &copy; {{ new Date().getFullYear() }} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
