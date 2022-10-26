<template>
	<div class="transmit-attribute">
		<button v-bind="$attrs" v-on:click.stop="childClickFunc">子元素按钮</button>
	</div>
    <!-- <MyButton /> -->
</template>
<script setup>
import { ref, useAttrs } from 'vue'
import MyButton from './MyButton.vue'
const msg = ref('TransmitAttribute')
const attrs = useAttrs()
function childClickFunc () {
	console.log('childClickFunc', attrs)
}
</script>
<style lang="stylus" scoped>
.transmit-attribute {
	border: 1px solid red;
	&.large {
		border: 3px dashed red;
	}
}
</style>
