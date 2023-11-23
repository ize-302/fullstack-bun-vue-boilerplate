<script setup>
import HelloWorld from '../components/HelloWorld.vue'

const response = fetch('http://127.0.0.1:3000/')
console.log(response)
</script>

<template>
  <main>
    <HelloWorld msg="You did it!!!" />
  </main>
</template>
