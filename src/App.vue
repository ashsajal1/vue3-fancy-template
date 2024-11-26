<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"

import { router } from './router';

router.afterEach((to) => {
  // Update the page title
  document.title = to.meta.title || 'Default Title';

  // Update the meta description
  const description = to.meta.description || 'Default description';
  const metaDescriptionTag = document.querySelector('meta[name="description"]');
  if (metaDescriptionTag) {
    metaDescriptionTag.setAttribute('content', description);
  } else {
    // If the tag doesn't exist, create it
    const newMetaTag = document.createElement('meta');
    newMetaTag.name = 'description';
    newMetaTag.content = description;
    document.head.appendChild(newMetaTag);
  }
});

</script>