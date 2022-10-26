<template>
	<!-- <div class="custom-directive">{{ msg }}</div> -->
	<input class="custom-directive" v-focus />
</template>
<script setup>
import { ref } from 'vue'
const vFocus = {
	mounted: el => el.focus()
}
</script>
<style lang="stylus" scoped>
.custom-directive {
	border: 1px solid red;
	line-height: 32px;
	padding: 4px 10px;
}
</style>