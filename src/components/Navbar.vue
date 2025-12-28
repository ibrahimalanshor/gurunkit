<script setup>
defineProps({
  brand: String,
  menus: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <nav>
    <a v-if="brand" href="">{{ brand }}</a>
    <div>
      <a v-for="menu in menus" href="" :key="menu.id">{{ menu.name }}</a>
    </div>
  </nav>
</template>
