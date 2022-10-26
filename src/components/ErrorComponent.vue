<template>
	<div class="error-component" v-on:click="clickFn">
		{{ msg }}-{{ val }}
	</div>
</template>
<script setup>
import { ref } from 'vue'
import { handleFn } from './mouseClick.js'
const msg = ref('404')
const { val, clickFn } = handleFn()
</script>
<style lang="stylus" scoped>
.error-component {
	font-size: 32px;
	color: red;
}
</style>
