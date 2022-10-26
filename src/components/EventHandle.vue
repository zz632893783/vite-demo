<template>
	<div class="event-handle" v-on:click="count++">{{ count }}</div>
	<div class="event-handle" v-on:click="greet">事件处理器</div>
	<button @click="say('hello')">say hello</button>
	<button @click="say('bye')">say bye</button>
	<button @click="say($event)">say bye</button>
	<select v-model="active">
		<option v-for="(item) in options" v-bind:value="item.value">{{ item.label }}</option>
	</select>
</template>
<script setup>
import { ref, onMounted, onUpdated } from 'vue'
const count = ref(0)
function greet (event) {
	console.log(event)
}
function say (message) {
	alert(message)
}
const options = ref([
	{ label: 'A', value: 0 },
	{ label: 'B', value: 1 },
	{ label: 'C', value: 2 }
])
const active = ref(0)
function fn () {
	console.log('start')
	onMounted(() => console.log('onMounted'))
	console.log('end')
}
fn()
onUpdated(() => console.log('onUpdated'))
</script>
<style scoped>
.event-handle {
	border: 4px solid yellowgreen;
}
</style>