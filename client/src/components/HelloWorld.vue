<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>{{ msg }}</template>
