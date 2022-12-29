<template>
  <div>
    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
          <NuxtLink to="/" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">Home</NuxtLink>
        </li>
        <li class="mr-2">
          <a :href="aboutURL" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">About</a>
        </li>
        <li class="mr-2">
          <NuxtLink to="/works" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">Works</NuxtLink>
        </li>
        <li class="mr-2">
          <NuxtLink to="/blog" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">Blog</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>

</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const aboutURL = `${config.public.NEXT_URL}about`
</script>
