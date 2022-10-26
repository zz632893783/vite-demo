<template>
	<div class="dashboard">
		<div class="section-header">
			<h4 class="section-title">Welcome to Planti.</h4>
			<h4 class="sub-title">Hello Shakir, welcome back!</h4>
			<div class="search-box">
				<i class="left-icon"></i>
				<input v-model="searchKeyword" placeholder="Search Dashboard" />
				<i class="right-icon"></i>
			</div>
		</div>
		<div class="cards">
			<div class="card">
				<i class="icon"></i>
				<h4 class="title">R&D for New Banking<br />Mobile App</h4>
				<div class="persons">
					<div class="person" v-bind:style="{ backgroundImage: `url(${ icon01 })` }"></div>
					<div class="person" v-bind:style="{ backgroundImage: `url(${ icon02 })` }"></div>
					<div class="person" v-bind:style="{ backgroundImage: `url(${ icon03 })` }"></div>
				</div>
			</div>
			<div class="card">
				<i class="icon"></i>
				<h4 class="title">Create Signup<br />Page</h4>
				<div class="persons">
					<div class="person" v-bind:style="{ backgroundImage: `url(${ icon01 })` }"></div>
					<div class="person" v-bind:style="{ backgroundImage: `url(${ icon02 })` }"></div>
					<div class="person" v-bind:style="{ backgroundImage: `url(${ icon03 })` }"></div>
				</div>
				<div class="chart" ref="chart"></div>
				<span class="precent">47%</span>
			</div>
		</div>
		<div class="tabs">
			<div class="tabs-header">
				<span :class="['tab-name', activeTab === 'activeTasks' && 'active']" v-on:click="activeTab = 'activeTasks'">Active Tasks</span>
				<span :class="['tab-name', activeTab === 'completed' && 'active']" v-on:click="activeTab = 'completed'">Completed</span>
				<div class="search-box">
					<i class="icon"></i>
					<input class="search-input" placeholder="Search" />
				</div>
			</div>
			<div class="tab-container">
				<div class="section" v-for="section in activeTasks">
					<div class="section-title">{{ section.type }}</div>
					<div class="list">
						<div class="item" v-for="item in section.list">
							<i class="icon" v-bind:style="{ backgroundImage: `url(${ item.icon })` }"></i>
							<h5 class="name">{{ item.name }}</h5>
							<p class="remarks">{{ item.remarks }}</p>
							<div class="persons">
								<div class="person" v-for="person in item.persons" v-bind:style="{ backgroundImage: `url(${ person })` }"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, reactive } from 'vue'
import icon01 from '@/assets/avatars/01.jpg'
import icon02 from '@/assets/avatars/05.jpg'
import icon03 from '@/assets/avatars/06.jpg'
import facebook from '@/assets/facebook.png'
const searchKeyword = ref('')
const chart = ref(null)
const activeTasks = reactive([
	{
		type: 'Today',
		list: [
			{
				icon: facebook,
				name: 'Uber',
				remarks: 'App Design and Upgrades whth new fuctures - In Progress 16 days',
				persons: [icon01, icon02, icon03]
			},
			{
				icon: facebook,
				name: 'Facebook Ads',
				remarks: 'App Design and Upgrades whth new fuctures - In Progress 16 days',
				persons: [icon01, icon02, icon03]
			},
			{
				icon: facebook,
				name: 'Payoneer',
				remarks: 'App Design and Upgrades whth new fuctures - In Progress 16 days',
				persons: [icon01, icon02, icon03]
			}
		]
	},
	{
		type: 'Tomorrow',
		list: [
			{
				icon: facebook,
				name: 'Uber',
				remarks: 'App Design and Upgrades whth new fuctures - In Progress 16 days',
				persons: [icon01, icon02, icon03]
			},
			{
				icon: facebook,
				name: 'Facebook Ads',
				remarks: 'App Design and Upgrades whth new fuctures - In Progress 16 days',
				persons: [icon01, icon02, icon03]
			},
			{
				icon: facebook,
				name: 'Payoneer',
				remarks: 'App Design and Upgrades whth new fuctures - In Progress 16 days',
				persons: [icon01, icon02, icon03]
			}
		]
	}
])
onMounted(() => {
	chart.value = echarts.init(chart.value)
	const option = {
		color: ['#f67951', '#dd74f3', '#34c7a3'],
		tooltip: {
    		trigger: 'item',
    		show: false
  		},
		// visualMap: {
		// 	show: false,
		// 	min: 80,
		// 	max: 600,
		// 	inRange: {
		// 		colorLightness: [0, 1]
		// 	}
		// },
		series: [
    		{
      			name: 'Access From',
				type: 'pie',
				radius: [31, 53],
				center: ['50%', '50%'],
      			data: [
        			{ value: 335, name: 'Direct' },
			        { value: 235, name: 'Video Ads' },
			        { value: 400, name: 'Search Engine' }
      			].sort((a, b) => a.value - b.value),
      			roseType: 'radius',
      			label: {
        			show: false
      			},
      			labelLine: {
      				show: false
      			},
      			itemStyle: {
					// color: 'red',
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
      			},
				animationType: 'scale',
				animationEasing: 'elasticOut',
				clockwise: false,
				startAngle: 0
    		}
  		]
	}
	chart.value.setOption(option)
})
const activeTab = ref('activeTasks')
</script>
<style lang="stylus" scoped>
.dashboard {
	padding: 18px 25px 0;
	overflow-y: auto;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 0;
	}
	.section-header {
		position: relative;
		.section-title {
			font-size: 16px;
			font-weight: 600;
			line-height: 21px;
		}
		.sub-title {
			font-size: 10px;
			color: #8d8d8d;
			font-weight: 200;
			line-height: 21px;
		}
		.search-box {
			position: absolute;
			right: 0;
			top: 0;
			width: 200px;
			height: 32px;
			background-color: #f1f4ff;
			display: grid;
			grid-template-columns: minmax(0, 32px) minmax(0, 1fr) minmax(0, 32px);
			border-radius: 8px;
			.left-icon {
				background-image: url('@/assets/search.svg');
				background-size: 14px 14px;
				background-position: 50% 50%;
				background-repeat: no-repeat;
			}
			.right-icon {
				background-image: url('@/assets/setting2.svg');
				background-size: 18px 18px;
				background-position: 50% 50%;
				background-repeat: no-repeat;
			}
			input {
				background-color: transparent;
				border: none;
				&::placeholder {
					color: #a3a4aa;
				}
			}
		}
	}
	.cards {
		margin-top: 33px;
		display: grid;
		grid-template-columns: minmax(0, 177fr) minmax(0, 275fr);
		grid-column-gap: 18px;
		grid-template-rows: minmax(0, 144px);
		.card {
			position: relative;
			border-radius: 8px;
			&:nth-child(1) {
				background-image: radial-gradient(130px circle at top left, #ffdc47, #fe7e53);
				box-shadow: 0 5px 10px rgba(#fe7e53, 0.5);
				.icon {
					background-image: url('@/assets/light.svg');
				}
			}
			&:nth-child(2) {
				background-image: radial-gradient(230px circle at bottom left, #925d98, #723779);
				box-shadow: 0 5px 10px rgba(#925d98, 0.5);
				.icon {
					background-image: url('@/assets/key.svg');
				}
			}
			.icon {
				position: absolute;
				top: 26px;
				left: 19px;
				width: 27px;
				height: 27px;
				background-color: rgba(0, 0, 0, 0.2);
				border-radius: 4px;
				background-size: 16px 16px;
				background-position: 50% 50%;
				background-repeat: no-repeat;
			}
			.title {
				position: absolute;
				top: 68px;
				left: 22px;
				white-space: nowrap;
				color: white;
				font-size: 12px;
				font-weight: 400;
				text-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
			}
			.persons {
				position: absolute;
				top: 110px;
				left: 22px;
				.person {
					display: inline-block;
					width: 20px;
					height: 20px;
					border: 1px solid white;
					background-color: white;
					border-radius: 50%;
					box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
					background-position: 50% 50%;
					background-repeat: no-repeat;
					background-size: cover;
					&:nth-child(2) {
						transform: translate(-6px, 0);
					}
					&:nth-child(3) {
						transform: translate(-12px, 0);
					}
				}
			}
			.chart {
				position: absolute;
				right: 0;
				height: 100%;
				width: 142px;
			}
			.precent {
				position: absolute;
				top: 60px;
				right: 46px;
				color: rgba(white, 0.6);
				font-size: 20px;
				font-weight: 600;
			}
		}
	}
	.tabs {
		margin-top: 26px;
		.tabs-header {
			line-height: 35px;
			height: 35px;
			white-space: nowrap;
			position: relative;
			box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
			.tab-name {
				display: inline-block;
				font-size: 12px;
				color: #aaacad;
				padding-right: 19px;
				position: relative;
				margin-right: 15px;
				cursor: pointer;
				&:before {
					content: '';
					position: absolute;
					left: 0;
					right: 0;
					bottom: 0px;
					height: 1px;
					background-color: #6a59c3;
					display: none;
				}
				&.active {
					color: #6a59c3;
					&:before {
						display: block;
					}
				}
			}
			.search-box {
				position: absolute;
				right: 0;
				top: 50%;
				transform: translate(0, -50%);
				display: grid;
				grid-template-columns: minmax(0, 12px) minmax(0, 1fr);
				width: 50px;
				.icon {
					background-image: url('@/assets/search.svg');
					background-size: 10px 10px;
					background-position: 50% 50%;
					background-repeat: no-repeat;
				}
				.search-input {
					border: none;
					line-height: 35px;
					font-size: 11px;
					padding: 0 0 0 2px;
					&::placeholder {
						color: #b7b7b7;
					}
				}
			}
		}
		.tab-container {
			.section {
				.section-title {
					margin-top: 20px;
					color: #b2b2b2;
					font-size: 14px;
					line-height: 13px;
				}
				.list {
					margin-top: 13px;
					.item {
						margin-top: 15px;
						display: grid;
						grid-template-columns: 31px 1fr min-content;
						grid-template-rows: 17px 14px;
						height: 31px;
						grid-column-gap: 12px;
						// align-items: center;
						.icon {
							grid-row-start: 1;
							grid-row-end: 3;
							background-size: cover;
							background-position: 50% 50%;
							background-repeat: no-repeat;
							border-radius: 6px;
						}
						.remarks {
							grid-column-start: 2;
							grid-row-start: 2;
							font-size: 12px;
							color: #aeb0b2;
						}
						&:nth-child(1) {
							margin-top: 0;
						}
					}
					.persons {
						white-space: nowrap;
						transform: translate(10px, 0);
						grid-row-start: 1;
						grid-row-end: 3;
						align-self: center;
						.person {
							display: inline-block;
							width: 19px;
							height: 19px;
							border-radius: 50%;
							border: 1px solid white;
							background-size: cover;
							background-position: 50% 50%;
							background-repeat: no-repeat;
							box-shadow: 0 0 2px rgba(0, 0, 0, 1);
							&:nth-child(2) {
								transform: translate(-5px, 0);
							}
							&:nth-child(3) {
								transform: translate(-10px, 0);
							}
						}
					}
				}
			}
		}
	}
}
</style>
