<template>
	<div class="journal">
		<div class="header">
			<span class="message remind"></span>
			<span class="notice remind"></span>
			<div class="avatar" v-bind:style="{ backgroundImage: `url(${ avatar })` }"></div>
		</div>
		<div class="contacts">
			<p class="lately">30 minute call with Client</p>
			<p class="project-call">Project Discovery Call</p>
			<span class="add-btn"><i>+</i> Invite</span>
			<div class="persons">
				<div :class="['person', item.remind && 'remind']" v-for="(item, index) in contacts" v-bind:style="{ backgroundImage: `url(${ item.icon })` }"></div>
				<span class="time">28:35</span>
				<span class="phone-btn"></span>
				<span class="more-btn"></span>
			</div>
		</div>
		<div :class="['lately-date', latelyActive]">
			<div :class="['today']" v-on:click="latelyActive = 'today'">
				<h4 class="block-title">18</h4>
				<p class="block-sub-title">Planned<br />Today</p>
				<div class="plan">
					<p>4 Overdue</p>
					<p>5 Due Today</p>
					<p>9 New Tasks</p>
				</div>
			</div>
			<div :class="['yesterday']" v-on:click="latelyActive = 'yesterday'">
				<h4 class="block-title">12</h4>
				<p class="block-sub-title">Finished<br />Yesterday</p>
				<div class="plan">
					<p>4 Overdue</p>
					<p>5 Due Today</p>
					<p>9 New Tasks</p>
				</div>
			</div>
			<div :class="['week']" v-on:click="latelyActive = 'week'">
				<h4 class="block-title">24</h4>
				<p class="block-sub-title">Due This<br />Week</p>
				<div class="plan">
					<p>4 Overdue</p>
					<p>5 Due Today</p>
					<p>9 New Tasks</p>
				</div>
			</div>
		</div>
		<Calendar />
	</div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import Calendar from '@/components/Calendar.vue'
import icon01 from '@/assets/avatars/01.jpg'
import icon02 from '@/assets/avatars/05.jpg'
import icon03 from '@/assets/avatars/03.jpg'
import icon04 from '@/assets/avatars/06.jpg'
const contacts = reactive([
	{
		icon: icon01,
		remind: true
	},
	{
		icon: icon02,
		remind: false
	},
	{
		icon: icon03,
		remind: false
	},
	{
		icon: icon04,
		remind: false
	}
])
const latelyActive = ref('today')
const avatar = ref(icon01)
</script>
<style lang="stylus" scoped>
transitionDuration = 0.2s
.journal {
	padding: 0 26px;
	.header {
		text-align: right;
		margin-top: 18px;
		.message, .notice, .avatar {
			display: inline-block;
			vertical-align: middle;
			box-shadow: 0 5px 5px rgba(0, 0, 0, 0.02);
			cursor: pointer;
		}
		.message {
			background-size: 20px 20px;
			background-image: url('@/assets/message.svg');
			&:after {
				right: 4px;
			}
		}
		.notice {
			background-size: 20px 20px;
			background-image: url('@/assets/notice.svg');
			&:after {
				right: 8px;
			}
		}
		.message, .notice {
			width: 30px;
			height: 30px;
			margin-left: 8px;
			background-color: white;
			border-radius: 6px;
			position: relative;
			background-position: 50% 50%;
			background-repeat: no-repeat;
			&:after {
				content: '';
				position: absolute;
				top: 5px;
				border-radius: 50%;
				width: 4px;
				height: 4px;
				border: 1px solid #583362;
				background-color: #d6aab2;
				display: none;
			}
			&.remind {
				&:after {
					display: block;
				}
			}
		}
		.avatar {
			width: 32px;
			height: 32px;
			margin-left: 12px;
			border-radius: 6px;
			background-color: #fa7905;
			background-position: 50% 50%;
			background-repeat: no-repeat;
			background-size: cover;
		}
	}
	.contacts {
		position: relative;
		margin: 42px 0 0;
		.lately {
			color: #df9bab;
			font-size: 10px;
			line-height: 10px;
		}
		.project-call {
			color: #0f0b06;
			font-size: 12px;
			line-height: 15px;
		}
		.add-btn {
			position: absolute;
			line-height: 12px;
			top: 3px;
			right: 0px;
			cursor: pointer;
			color: #3f5ed3;
			font-size: 12px;
			i {
				font-style: normal;
			}
		}
		.persons {
			margin-top: 11px;
			background-color: #3f5ed3;
			height: 44px;
			border-radius: 8px;
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 16px)) minmax(0, 10px) minmax(0, 20px) 19px auto 13px 11px 5px 5px;
			align-items: center;
			padding: 14px;
			box-shadow: 0 5px 10px rgba(#3f5ed3, 0.2);
			.person {
				height: 20px;
				width: 20px;
				border: 1px solid white;
				background-color: #ebf1ff;
				border-radius: 50%;
				position: relative;
				background-size: cover;
				background-position: 50% 50%;
				&:after {
					content: '';
					position: absolute;
					top: -5px;
					left: 50%;
					transform: translate(-50%, 0);
					border-radius: 50%;
					width: 4px;
					height: 4px;
					border: 1px solid #583362;
					background-color: #d6aab2;
					display: none;
				}
				&.remind {
					&:after {
						display: block;
					}
				}
			}
			.time {
				grid-column-start: 6;
				font-size: 10px;
				color: white;
			}
			.phone-btn, .more-btn {
				cursor: pointer;
			}
			.phone-btn {
				height: 14px;
				grid-column-start: 8;
				background-size: cover;
				background-position: 50% 50%;
				background-repeat: no-repeat;
				background-image: url('@/assets/phone.svg');
			}
			.more-btn {
				height: 14px;
				grid-column-start: 10;
				background-size: cover;
				background-position: 50% 50%;
				background-repeat: no-repeat;
				background-image: url('@/assets/more.svg');
			}
		}
	}
	.lately-date {
		height: 174px;
		margin-top: 24px;
		position: relative
		user-select: none;
		.today, .yesterday, .week {
			position: absolute;
			border-radius: 8px;
			cursor: pointer;
			transition: width transitionDuration, height transitionDuration, top transitionDuration, left transitionDuration;
			padding: 0 12px;
			.block-title {
				line-height: 40px;
				font-size: 14px;
				font-weight: 600;
			}
			.block-sub-title {
				line-height: 12px;
				font-size: 12px;
				font-weight: 200;
			}
			.plan {
				position: absolute;
				opacity: 0;
				transition: opacity transitionDuration;
				p {
					line-height: 17px;
					font-size: 8px;
				}
			}
		}
		.today {
			background-color: #ffdcd1;
			box-shadow: 0 5px 5px rgba(#ffdcd1, 0.5);
			.plan {
				left: 12px;
				bottom: 9px;
			}
			.block-title, .block-sub-title {
				color: #37152c;
			}
		}
		.yesterday {
			background-color: #fce3ff;
			box-shadow: 0 5px 5px rgba(#fce3ff, 0.5);
			.plan {
				left: calc(100% - 80px);
				bottom: 9px;
			}
			.block-title, .block-sub-title {
				color: #3a1e3e;
			}
		}
		.week {
			background-color: #dbfff7;
			box-shadow: 0 5px 5px rgba(#dbfff7, 0.5);
			.plan {
				left: 12px;
				bottom: 9px;
			}
			.block-title, .block-sub-title {
				color: #47364c;
			}
		}
		&.today {
			.today {
				left: 0;
				top: 0;
				height: 100%;
				width: calc(50% - 6px);
				.plan {
					opacity: 1;
				}
			}
			.yesterday {
				left: calc(50% + 6px);
				top: 0;
				height: calc(50% - 6px);
				width: calc(50% - 6px);
			}
			.week {
				left: calc(50% + 6px);
				top: calc(50% + 6px);
				height: calc(50% - 6px);
				width: calc(50% - 6px);
			}
		}
		&.yesterday {
			.today {
				left: 0;
				top: calc(50% + 6px);
				height: calc(50% - 6px);
				width: calc(50% - 6px);
			}
			.yesterday {
				left: 0;
				top: 0;
				height: calc(50% - 6px);
				width: 100%;
				.plan {
					opacity: 1;
				}
			}
			.week {
				left: calc(50% + 6px);
				top: calc(50% + 6px);
				height: calc(50% - 6px);
				width: calc(50% - 6px);
			}
		}
		&.week {
			.today {
				left: 0;
				top: calc(50% + 6px);
				height: calc(50% - 6px);
				width: calc(50% - 6px);
			}
			.yesterday {
				left: 0;
				top: 0;
				height: calc(50% - 6px);
				width: calc(50% - 6px);
			}
			.week {
				left: calc(50% + 6px);
				top: 0;
				height: 100%;
				width: calc(50% - 6px);
				.plan {
					opacity: 1;
				}
			}
		}
	}
	.calendar {
		margin-top: 24px;
	}
}
</style>
