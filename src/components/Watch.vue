<template>
	<div class="watch">
		<input v-model="question"/>
		<h1 ref="h1">{{ answer }}</h1>
		<button v-on:click="x++">x: {{ x }}</button> + <button v-on:click="y++">y: {{ y }}</button><br />
		<button v-on:click="obj.count++">y: {{ obj.count }}</button><br />
		<button id="btn" v-on:click="a++">{{ a }}</button><br />
		<button v-on:click="b++">{{ b }}</button>
		<button v-on:click="c++">{{ c }}</button>
	</div>
</template>
<script setup>
import { ref, watch, reactive, onUnmounted, watchEffect, defineExpose } from 'vue'
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-')
watch(question, (newQuestion, oldQuestion) => {
	if (newQuestion.indexOf('?') > -1) {
		console.log(123123123)
		answer.value = 'Thinking...'
		new Promise((resolve, reject) => {
			setTimeout(() => {
				Math.random() > 0.5 ? resolve('答案是123') : reject('请求出错')
			}, 1000 * Math.random() * 3)
		}).then(res => {
			answer.value = res
		}).catch(err => {
			answer.value = err
		})
	}
})
const x = ref(0)
const y = ref(0)
// watch(() => x.value + y.value, sum => {
// 	console.log('sum')
// })
watch([x, () => y.value], ([newX, newY]) => {
	console.log(newX, newY)
})
const obj = reactive({
	count: 0,
	attr: {
		name: 'a'
	}
})
// watch(() => obj.count, newVal => {
// 	console.log('we')
// })
watch(() => obj.attr, newVal => {
	console.log(newVal)
}, { deep: true })
setTimeout(() => {
	obj.attr.name = 'team'
}, 2000)
const a = ref(0)
// setInterval(() => {
// 	a.value = a.value + 1
// }, 1000)
// let unwatch
// setTimeout(() => {
// 	unwatch = watch(a, newVal => {
// 		console.log(newVal)
// 	})
// }, 1000)
// onUnmounted(() => {
// 	console.log('解绑阶段')
// 	typeof unwatch === 'function' && unwatch()
// })
const b = ref(0)
const c = ref(0)
watchEffect(() => {
	const b1 = b.value
	const c1 = c.value
	console.log('watchEffect 被执行了')
})
defineExpose({
	answer
})
</script>
<style scoped>
.watch {
	border: 2px solid pink;
}
</style>