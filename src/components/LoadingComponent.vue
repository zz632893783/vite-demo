<template>
	<div class="loading-component" v-on:click="clickFn">
		{{ loadingText }}-{{ val }}-{{ randomVal }}
	</div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { handleFn } from './mouseClick.js'
const loadingText = 'loading...'
// const { val, clickFn } = reactive(handleFn())
const { val, clickFn } = handleFn()
</script>
<style lang="stylus" scoped>
@keyframes loadingFlash {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.loading-component {
	width: 200px;
	height: 200px;
	line-height: 200px;
	font-size: 32px;
	text-align: center;
	animation: loadingFlash 3s infinite;
}
</style>
