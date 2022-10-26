<template>
	<div class="component-basic">
		<button v-on:click="smallFn">-</button>
		{{ title }}
		<button v-on:click="largeFn">+</button>
		<slot />
	</div>
</template>
<script setup>
import { ref } from 'vue'
const msg = ref('componentBasic')
defineProps(['title'])
const emit = defineEmits(['enlarge-text', 'ensmall-text'])
function largeFn () {
	emit('enlarge-text', 11, 22, 33)
}
function smallFn () {
	emit('ensmall-text')
}
</script>
<style scoped>
.component-basic {}
</style>
