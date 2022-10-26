<template>
	<div class="calendar">
		<div class="calendar-header">
			<span class="year-month">{{ ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][now.getMonth()] }},{{ now.getFullYear() }}</span>
			<span class="prev-month">&lt;</span>
			<span class="next-month">></span>
		</div>
		<div class="weeks">
			<div class="week-item" v-for="week in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']">{{ week }}</div>
		</div>
		<div class="dates">
			<div :class="['date-item', date.today && 'today', date.sameMonth && 'same-month']" v-for="(date) in dates">
				<span class="num">{{ date.date.getDate() }}</span>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const msg = ref('Calendar')
const now = reactive(new Date())
const dates = reactive(getDates(now))
function getDates (currentDate) {
	const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
	let day = [6, 0, 1, 2, 3, 4, 5][startDate.getDay()]
	startDate.setDate(startDate.getDate() - day)
	const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
	day = [0, 6, 5, 4, 3, 2, 1][endDate.getDay()]
	endDate.setDate(endDate.getDate() + day)
	const dates = []
	const count = (endDate.getTime() - startDate.getTime()) / 1000 / 24 / 3600 + 1
	for (let i = 0; i < count; i++) {
		const date = new Date(startDate)
		date.setDate(date.getDate() + i)
		dates.push({
			date,
			today: ['getFullYear', 'getMonth', 'getDate'].map(method => date[method]() === currentDate[method]()).every(n => !!n),
			sameMonth: date.getMonth() === currentDate.getMonth()
		})
	}
	return dates
}
</script>
<style lang="stylus" scoped>
.calendar {
	padding: 10px 6px;
	background-color: white;
	user-select: none;
	border-radius: 10px;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.025);
	.calendar-header {
		line-height: 22px;
		display: grid;
		grid-template-columns: auto minmax(0, 22px) minmax(0, 22px);
		grid-template-rows: minmax(0, 22px);
		grid-column-gap: 12px;
		margin-bottom: 10px;
		.year-month {
			font-size: 14px;
			font-weight: 600;
		}
		.prev-month, .next-month {
			text-align: center;
			line-height: 22px;
			font-size: 12px;
			color: #8d8c93;
			border-radius: 6px;
			background-color: #f2f1f8;
		}
	}
	.weeks {
		display: grid;
		grid-template-columns: repeat(7, minmax(0, 1fr));
		grid-template-rows: 11px;
		align-items: center;
		justify-items: center;
		.week-item {
			font-size: 8px;
			color: #afafaf;
		}
	}
	.dates {
		display: grid;
		grid-template-columns: repeat(7, minmax(0, 1fr));
		grid-auto-rows: 25px;
		align-items: center;
		justify-items: center;
		margin-top: 9px;
		.date-item {
			font-size: 10px;
			color: #a5a5a5;
			.num {
				position: relative;
				z-index: 1;
			}
			&.same-month {
				color: #1f1f1f;
				font-weight: 600;
			}
			&.today {
				color: white;
				position: relative;
				&:before {
					content: '';
					position: absolute;
					width: 18px;
					height: 28px;
					top: 40%;
					left: 50%;
					transform: translate(-50%, -50%);
					background-color: #110f20;
					border-radius: 8px;
					z-index: 0;
				}
			}
		}
	}
}
</style>
