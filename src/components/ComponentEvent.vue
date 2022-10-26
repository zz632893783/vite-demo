<template>
	<div class="component-event">
		<input v-bind:value="title" v-on:input="inputFunc" />
	</div>
</template>
<script setup>
import { ref } from 'vue'
// const props = defineProps({
// 	modelValue: String,
// 	modelModifiers: {
// 		default: function () {
// 			return {}
// 		}
// 	}
// })
const props = defineProps(['title', 'titleModifiers'])
const emit = defineEmits(['update:title'])
function inputFunc (event) {
	let value = event.target.value
	if (props.titleModifiers.uppercase) {
		value = value.toUpperCase()
	}
	if (props.titleModifiers.trim) {
		value = value.trim()
	}
	emit('update:title', value)
}
</script>
<style lang="stylus" scoped>
.component-event {}
</style>
