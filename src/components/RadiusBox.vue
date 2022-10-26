<template>
	<div class="radius-box" v-bind:style="boxStyle"></div>
</template>
<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
	size: {
		type: [Number],
		default: function () {
			return 140
		}
	},
	borderRadius: {
		type: [Number, String],
		default: function () {
			return 10
		}
	},
	backgroundColor: {
		type: [String],
		default: function () {
			return 'pink'
		}
	}
})
const msg = ref('RadiusBox')
const boxStyle = computed(() => {
	return {
		width: `${props.size}px`,
		height: `${props.size}px`,
		borderRadius: typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : props.borderRadius,
		backgroundColor: props.backgroundColor
	}
})
</script>
<style lang="stylus" scoped></style>