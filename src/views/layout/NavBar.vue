<template>
	<div class="nav-bar" ref="navBar">
		<div class="project">
			<i class="logo"></i>
			<h4 class="project-name">{{ projectName }}</h4>
		</div>
		<div class="user">
			<div class="avatar" v-bind:style="{ backgroundImage: `url(${ user.avatar })` }">
				<i :class="['state', user.state]">{{ user.state }}</i>
			</div>
			<h4 class="user-name">{{ user.name }}</h4>
			<p class="user-remark">{{ user.remarks }}</p>
		</div>
		<div class="project-task">
			<h4 class="section-title">PROJECTS & TASKS</h4>
			<ul class="list">
				<li :class="['item', item.path === currentPath && 'active']" v-for="(item, index) in projectTask" v-bind:key="index" v-on:click="jumpTo(item)">
					<em class="icon"><i v-bind:style="{ backgroundImage: `url(${ item.icon })` }"></i></em>
					<span class="name">{{ item.label }}</span>
				</li>
			</ul>
		</div>
		<div class="profile-setting">
			<h4 class="section-title">PROFILE & SETTINGS</h4>
			<ul class="list">
				<li :class="['item', item.path === currentPath && 'active']" v-for="(item, index) in profileSetting" v-bind:key="index" v-on:click="jumpTo(item)">
					<em class="icon"><i v-bind:style="{ backgroundImage: `url(${ item.icon })` }"></i></em>
					<span class="name">{{ item.label }}</span>
				</li>
			</ul>
		</div>
		<canvas ref="canvas" class="color-shadow" />
	</div>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import dashboard from '@/assets/dashboard.svg'
import truck from '@/assets/truck.svg'
import compass from '@/assets/compass.svg'
import trophy from '@/assets/trophy.svg'
import chart from '@/assets/chart.svg'
import table from '@/assets/table.svg'
import person from '@/assets/person.svg'
import setting from '@/assets/setting.svg'
import avatar from '@/assets/avatars/01.jpg'

const projectName = ref('PRO.KI')
const user = reactive({
	avatar,
	state: 'online',
	name: 'AR Shakir',
	remarks: 'asdasdasdasdasdasdasdasdasdasdasdasd'
})
const projectTask = reactive([
	{
		label: 'Dashboard',
		path: '/dashboard',
		icon: dashboard
	},
	{
		label: 'Tasks',
		path: '/tasks',
		icon: truck
	},
	{
		label: 'Explore',
		path: '/explore',
		icon: compass
	},
	{
		label: 'Projects',
		path: '/projects',
		icon: trophy
	}
])
const profileSetting = reactive([
	{
		label: 'Charts',
		path: '/charts',
		icon: chart
	},
	{
		label: 'Billing',
		path: '/billing',
		icon: table
	},
	{
		label: 'Profile',
		path: '/profile',
		icon: person
	},
	{
		label: 'Settings',
		path: '/settings',
		icon: setting
	}
])
const currentPath = computed(() => useRoute().path)
const canvas = ref(null)
const navBar = ref(null)
let ctx = null
function drawBg () {
	ctx.beginPath()
	ctx.arc(65 + 10, 115 - 10, 60, 0, 2 * Math.PI)
	ctx.arc(-45 + 10, 115 - 10, 100, 0, 2 * Math.PI)
	ctx.arc(115 + 10, 120 - 10, 40, 0, 2 * Math.PI)
	ctx.closePath()
	const linearGradient = ctx.createLinearGradient(0, 0, 140, 0)
	linearGradient.addColorStop(0, '#f1ecc3')
	linearGradient.addColorStop(1, '#d0ffe3')
	ctx.fillStyle = linearGradient
	ctx.fill()
}
onMounted(() => {
	canvas.value.width = navBar.value.offsetWidth
	canvas.value.height = 100
	ctx = canvas.value.getContext('2d')
	drawBg()
})
const router = useRouter()
function jumpTo (routeObj) {
	router.push({
		path: routeObj.path
	})
}
</script>
<style lang="stylus" scoped>
.nav-bar {
	background-color: white;
	border-right: 1px solid #f0f0f0;
	position: relative;
	.project {
		width: 62px;
		height: 14px;
		margin: 30px auto 0;
		white-space: nowrap;
		.logo {
			display: inline-block;
			width: 4px;
			height: 14px;
			background-color: #764286;
			font-size: 0;
			position: relative;
			margin: 0 12px 0 5px;
			&:before, &:after {
				position: absolute;
				content: '';
				display: inline-block;
				width: 4px;
				bottom: 0;
			}
			&:before {
				height: 9px;
				background-color: #e38563;
				left: -5px;
			}
			&:after {
				height: 11px;
				background-color: #65d0b0;
				right: -5px;
			}
		}
		.project-name {
			color: #4d3055;
			display: inline-block;
			font-size: 14px;
		}
	}
	.user {
		text-align: center;
		margin-top: 39px;
		.avatar {
			display: inline-block;
			width: 54px;
			height: 54px;
			border-radius: 50%;
			background-color: #ff7a02;
			position: relative;
			background-position: 50% 50%;
			background-repeat: no-repeat;
			background-size: cover;
			.state {
				position: absolute;
				left: 50%;
				transform: translate(-50%, 0);
				bottom: -6px;
				white-space: nowrap;
				height: 14px;
				line-height: 14px;
				border-radius: 7px;
				background-color: white;
				box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
				font-size: 10px;
				font-style: normal;
				padding: 0 6px;
				vertical-align: middle;
				&:before {
					display: inline-block;
					content: '';
					width: 4px;
					height: 4px;
					border-radius: 50%;
					background-color: #729b42;
					vertical-align: middle;
					margin-right: 4px;
				}
			}
		}
		.user-name {
			margin-top: 16px;
			height: 8px;
			line-height: 8px;
			font-size: 12px;
		}
		.user-remark {
			height: 18px;
			line-height: 18px;
			color: #b4b4b4;
			font-size: 12px;
			max-width: 50%;
			overflow-x: hidden;
			overflow-y: visible;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin: 0 auto;
		}
	}
	.project-task {
		margin-top: 40px;
	}
	.profile-setting {
		margin-top: 27px;
	}
	.project-task {
		.list {
			border-bottom: 1px solid #d7d7d7;
		}
	}
	.project-task, .profile-setting {
		.section-title {
			font-size: 12px;
			text-align: center;
		}
		.list {
			margin: 0 37px;
			padding-bottom: 27px;
			.item {
				white-space: nowrap;
				height: 13px;
				line-height: 13px;
				margin-top: 18px;
				user-select: none;
				cursor: pointer;
				.icon {
					display: inline-block;
					width: 13px;
					height: 13px;
					position: relative;
					vertical-align: middle;
					overflow: hidden;
					i {
						background-size: cover;
						background-position: 50% 50%;
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						transform: translate(-100%, 0);
						filter: drop-shadow(13px 0 0 #767676);
					}
				}
				.name {
					margin-left: 9px;
					display: inline-block;
					font-size: 12px;
					vertical-align: middle;
				}
				&.active {
					color: #753878;
					// font-weight: 600;
					.icon {
						i {
							filter: drop-shadow(13px 0 0 #753878);
						}
					}
				}
			}
		}
	}
	.color-shadow {
		position: absolute;
		left: 0;
		bottom: 0;
		background-size: 100% 100%;
		background-image: url('@/assets/bg2.png');
		filter: blur(10px);
		transform: translate(-10px, 10px);
	}	
}
</style>
