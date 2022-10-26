<template>
	<div class="template-quote">
		<input ref="input" />
		<input ref="count" />
		<ul>
			<li ref="items" v-for="(item) in list">{{ item.label }}: {{ item.id }}</li>
		</ul>
	</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const input = ref(null)
const count = ref()
const items = ref([])
const list = ref([
	{ label: 'A', id: 0 },
	{ label: 'B', id: 1 },
	{ label: 'C', id: 2 },
	{ label: 'D', id: 3 }
])
onMounted(() => {
	console.log(input.value, count.value, items.value)
})
</script>
<style scoped>
.template-quote {
	border: 1px solid red;
}
</style>