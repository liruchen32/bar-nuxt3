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
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'BAR 宮 | 我有酒，你有故事嗎 ? 台北市大安區大安路一段31巷50號'
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: 'BAR 宮'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'BAR 宮'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'BAR 宮 | 我有酒，你有故事嗎 ? 台北市大安區大安路一段31巷50號'
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website'
    },
    {
      hid: 'og:locale',
      property: 'og:locale',
      content: 'zh_tw'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: '/home_page_bg.png'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
});
</script>
