<template>
	<button class="my-button">{{ msg }}</button>
</template>
<script setup>
import { ref } from 'vue'
const msg = ref('MyButton')
</script>
<style lang="stylus" scoped>
.my-button {
	font-size: 24px;
}
</style>
