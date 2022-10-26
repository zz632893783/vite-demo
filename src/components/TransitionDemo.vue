<template>
	<div class="transition-demo">
		<button v-on:click="show = !show">show: {{ show }}</button>
		<transition>
			<div class="box" v-show="show"></div>
		</transition>
	</div>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
<style lang="stylus" scoped>
.transition-demo {
	border: 1px solid red;
	.box {
		width: 100px;
		height: 100px;
		background-color: orange;
		border-radius: 20px;
	}
}
.v-enter-active, .v-leave-active {
	transition: opacity 0.5s ease;
}
.v-enter-from, .v-leave-to {
	opacity: 0;
}
</style>