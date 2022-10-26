<script setup>
import { ref, reactive, computed } from 'vue'
const author = reactive({
	name: 'John Doe',
	books: [
		'Vue 2',
		'Vue 3',
		'Vue 4'
	]
})
const publishedBooksMessage = computed(() => {
	return author.books.length > 0 ? 'Yes' : 'No'
})
const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
	get () {
		return [firstName.value, lastName.value].join(' ')
	},
	set (newName) {
		const tempArr = newName.split(' ')
		firstName.value = tempArr[0]
		lastName.value = tempArr[1]
	}
})
function clickFn () {
	fullName.value = 'Zheng Zhang'
}
</script>
<template>
	<!-- <div class="computed-demo">{{ author.name }}</div> -->
	<!-- <div class="computed-demo">{{ publishedBooksMessage }}</div> -->
	<div class="computed-demo" v-on:click="clickFn">{{ fullName }}</div>
</template>
<style scoped>
.computed-demo {
	border: 1px solid red;
}
</style>