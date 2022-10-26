<template>
	<div class="home-page">
		<!-- <div class="header">
			<div class="logo"></div>
			<h4 class="title"></h4>
			<span class="menu"></span>
			<input class="input" />
			<span class="user"></span>
			<span class="setting"></span>
		</div> -->
		<BlockItem />
	</div>
</template>
<script setup>
import { ref } from 'vue'
import BlockItem from './BlockItem.vue'
const msg = ref('homePage')
</script>
<style scoped lang="stylus">
.home-page {
	height: 100vh;
	width: 100vw;
	// background-image: url('@/assets/bg.png');
	background-size: cover;
	.header {
		display: grid;
		grid-template-columns: minmax(0, 98px) minmax(0, 1fr) minmax(0, 40px) minmax(0, 240px) minmax(0, 40px) minmax(0, 40px);
		grid-template-rows: minmax(0, 90px);
		align-items: center;
		.logo {
			border: 1px solid red;
		}
		.title {
			border: 1px solid red;
		}
		.menu {
			border: 1px solid red;
		}
		.input {
			border: 1px solid red;
		}
		.menu {
			border: 1px solid red;
			height: 40px;
		}
		.user {
			border: 1px solid red;
		}
		.setting {
			border: 1px solid red;
		}
	}
}
</style>
