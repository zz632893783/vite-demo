<template>
	<div class="tasks">{{ msg }}</div>
</template>
<script setup>
import { ref } from 'vue'
const msg = ref('tasks')
</script>
<style lang="stylus" scoped>
.tasks {
	background-color: white;
}
</style>