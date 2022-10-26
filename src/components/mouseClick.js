import { ref } from 'vue'
export function handleFn () {
	const random = ref(Math.random().toFixed(2))
	const randomVal = ref(123)
	const val = ref(random)
	function clickFn () {
		// console.log(v.value)
		val.value = Math.random().toFixed(2)
	}
	return { val, clickFn }
}
