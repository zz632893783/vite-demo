<template>
	<div class="async-component">
		<AsyncComponent />
	</div>
</template>
<script setup>
// 异步加载组件方法
import { ref, defineAsyncComponent } from 'vue'
import LoadingComponent from './LoadingComponent.vue'
import ErrorComponent from './ErrorComponent.vue'
const AsyncComponent = defineAsyncComponent({
	loader: () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				Math.random() < 0.5 ? resolve(import('./RadiusBox.vue')) : reject()
			}, 2000)
		})
	},
	loadingComponent: LoadingComponent,
	delay: 200,
	errorComponent: ErrorComponent,
	timeout: 3000
})
</script>
<style lang="stylus" scoped>
.async-component {}
</style>
