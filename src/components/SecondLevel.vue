<template>
	<div class="second-level">
    	<ThirdLevel />
	</div>
</template>
<script setup>
import { ref, provide } from 'vue'
import ThirdLevel from './ThirdLevel.vue'
const msg = ref('msgmsgmsgmsg')
provide('msg', msg)
</script>
<style lang="stylus" scoped>
.second-level {
	border: 1px solid red;
	padding: 10px 20px;
}
</style>
