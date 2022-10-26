<template>
	<div class="class-style-bind" :class="[computeClassObj, $attrs.class]" v-on:click="clickFn">{{ msg }}</div>
	<div class="class-style-bind" :class="[activeClass, errorClass, $attrs.class]" v-on:click="clickFn">{{ msg }}</div>
	<div class="class-style-bind" :style="{ color: activeColor, fontSize: `${fontSize}px` }" v-on:click="changeStyle">23333</div>
	<div class="class-style-bind" :style="[computeStyle, commonStyle]" v-on:click="changeStyle">23333</div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
const msg = 'class-style-bind'
const active = ref(false)
const hasError = ref(true)
const classObj = reactive({
	active,
	hasError
})
const computeClassObj = computed(() => {
	return {
		active: active.value,
		hasError: hasError.value
	}
})
function clickFn () {
	active.value = !active.value
	hasError.value = !hasError.value

}
const activeClass = ref('active')
const errorClass = ref('text-danger')
const activeColor = ref('red')
const fontSize = ref(24)
const computeStyle = computed(() => {
	return {
		color: activeColor.value,
		fontSize: `${fontSize.value}px`
	}
})
const commonStyle = reactive({
	'font-style': 'italic',
	'font-weight': 800,
	border: '10px double green'
})
function changeStyle () {
	activeColor.value = `#${Math.round(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`
	fontSize.value = Math.round(Math.random() * 36) + 12
}
</script>
<style scoped>
.class-style-bind {
	border: 3px solid red;
	background-color: orange;
}
.active {
	border: 3px solid green;
}
.hasError {
	background-color: pink;
}
</style>