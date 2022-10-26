<template>
	<!-- <div class="list-render">{{ msg }}</div> -->
	<ul class="list-render">
		<li v-for="(item, index) in items">{{ index + 1 }}:{{ item.message }}</li>
	</ul>
	<ul class="list-render">
		<li v-for="(value, key) in myObject">{{ key }}:{{ value }}</li>
	</ul>
	<ul class="list-render">
		<li v-for="n in 3">{{ n }}</li>
	</ul>
	<ul class="list-render">
		<template v-for="set in sets">
			<li v-for="item in even(set)">{{ item }}</li>
		</template>
	</ul>
</template>
<script setup>
import { ref, reactive } from 'vue'
const msg = ref('ListRender')
const items = ref([
	{ message: 'Foo' },
	{ message: 'Bar' }
])
const myObject = reactive({
	title: 'How to do lists in Vue',
	author: 'Jane Doe',
	publishAt: '2016-04-10'
})
const sets = ref([
	[1, 2, 3, 4, 5, 6],
	[7, 8, 9, 10, 11, 12]
])
function even (arr) {
	return arr.filter(n => n % 2 === 0)
}
</script>
<style scoped>
.list-render {
	border: 1px solid green;
}
</style>
