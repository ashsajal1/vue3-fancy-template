<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="p-2 flex-grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

import { router } from "./router";

router.afterEach((to) => {
  // Update the page title
  document.title = to.meta.title || "Default Title";

  // Update the meta description
  const description = to.meta.description || "Default description";
  const metaDescriptionTag = document.querySelector('meta[name="description"]');
  if (metaDescriptionTag) {
    metaDescriptionTag.setAttribute("content", description);
  } else {
    // If the tag doesn't exist, create it
    const newMetaTag = document.createElement("meta");
    newMetaTag.name = "description";
    newMetaTag.content = description;
    document.head.appendChild(newMetaTag);
  }
});
</script>
