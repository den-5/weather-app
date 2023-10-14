class DateUtils {
	getDayOFWeekByNumber(number) {
		const daysOfWeek = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		]

		if (number >= 0 && number < 7) {
			return daysOfWeek[number]
		} else {
			return 'Invalid day of the week'
		}
	}
	getMonthByNumber(monthNumber) {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]

		if (monthNumber >= 1 && monthNumber <= 12) {
			return months[monthNumber - 1]
		} else {
			return 'Invalid month number'
		}
	}

	setDate(date) {
		const resultDate = new Date()
		const arrWithDate = date?.split(' ')
		const time = arrWithDate && arrWithDate[1]
		const yy_mm_dd = arrWithDate && arrWithDate[0]
		resultDate.setHours(time?.split(':')[0])
		resultDate.setMinutes(time?.split(':')[1])
		resultDate.setYear(yy_mm_dd?.split('-')[0])
		resultDate.setMonth(yy_mm_dd?.split('-')[1])
		resultDate.setDate(yy_mm_dd?.split('-')[2])
		return resultDate
	}
}

export default new DateUtils()
