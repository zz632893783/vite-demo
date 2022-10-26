<template>
	<div class="root">
		<NavBar />
		<!-- <transition>
			<router-view class="main"></router-view>
		</transition> -->
		<router-view class="main"></router-view>
		<Journal />
	</div>
</template>
<script setup>
import { ref } from 'vue'
import NavBar from '@/views/layout/NavBar.vue'
import Journal from '@/views/layout/Journal.vue'
const msg = ref('indexindexindex')
</script>
<style lang="stylus" scoped>
.root {
	min-height: 100%;
	border-radius: 20px;
	overflow: hidden;
	background-color: #faf5ee;
	display: grid;
	grid-template-columns: minmax(0, 160px) minmax(0, 1fr) minmax(0, 250px);
	grid-template-rows: minmax(0, 1fr);
	.main {
		background-color: white;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.025);
	}
	.journal {
		grid-column-start: 3;
	}
}
</style>