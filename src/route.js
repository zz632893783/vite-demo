import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/Home.vue'
import Root from '@/views/layout/index.vue'
import Dashboard from '@/views/dashboard/index.vue'
import Tasks from '@/views/tasks/index.vue'

const routes = [
	{
		path: '/',
		name: '',
		component: Root,
		children: [
			{
				path: 'dashboard',
				component: Dashboard
			},
			{
				path: 'tasks',
				component: Tasks
			}
		]
	},
	{
		path: '',
		redirect: '/dashboard'
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
