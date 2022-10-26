<template>
	<div class="block-item">
		<i class="icon" v-bind:style="{ backgroundImage: `url(${iconUrl})` }"></i>
		<h4>{{ title }}-{{ author }}-{{ msgType }}-{{ date }}</h4>
	</div>
</template>
<script setup>
const props = defineProps({
	title: String,
	iconUrl: {
		type: String,
		default: function () {
			return '7777'
		}
	},
	author: {
		type: String,
		default: function () {
			return '666'
		}
	},
	msgType: {
		type: [String],
		default: function () {
			return 'success'
		},
		validator: function (val) {
			return ['success', 'warning', 'danger'].includes(val)
		}
	},
	date: {
		type: Date,
		default: function () {
			return new Date(1994, 9, 11)
		}
	}
})
console.log(props)
</script>