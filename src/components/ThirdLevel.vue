<template>
	<div class="third-level">
		{{ message }}
		<button v-on:click="updateMessage('777')">click</button>
	</div>
</template>
<script setup>
import { ref, inject } from 'vue'
import { myInjectionKey } from './keys.js'
// const { message, updateMessage } = inject('message')
const message = inject(myInjectionKey)
</script>
<style lang="stylus" scoped>
.third-level {
	border: 1px solid green;
}
</style>
