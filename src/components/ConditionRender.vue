<template>
	<button @click="awesome = !awesome">Toggle</button>
	<h1 v-if="awesome">Vue is awesome!</h1>
	<h1 v-else>Oh no 😢</h1>
</template>
<script setup>
import { ref } from 'vue'
const msg = ref('conditionRender')
const awesome = ref(false)
</script>
<style scoped>
.condition-render {
	border: 1px solid red;
}
</style>