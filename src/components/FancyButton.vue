<template>
	<slot :x="x" :y="y"></slot>
</template>
<script setup>
import { ref } from 'vue'
const x = ref(0)
const y = ref(0)
window.addEventListener('mousemove', e => {
	x.value = e.clientX
	y.value = e.clientY
})
</script>
<style lang="stylus" scoped>
</style>
