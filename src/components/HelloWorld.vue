<script setup>
import { reactive, nextTick, ref } from 'vue'
// import { $ref } from 'vue/macros'
const state = reactive({ count: 1000 })
const name = ref('zz')
const obj = {
  foo: ref(1)
}
const { foo } = obj
const foo2 = ref(1111)
// let c = $ref(0)
function increment () {
  state.count++
  nextTick(() => {
    name.value = name.value + 'zz'
    // console.log(ref(0))
    obj.foo.value = obj.foo.value + 100
    foo2.value = foo2.value + 1111
  })
}
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <!-- <h1 class="green" @click="increment">{{ msg }}{{ state.count }}{{ obj.foo.value }}</h1> -->
    <h1 class="green" @click="increment">{{ foo + 10 }}-{{ foo2 }}-{{ obj.foo }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
