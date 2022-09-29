<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  title: 'BAR 宮',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'BAR 宮' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
});
</script>
