export function formatDate(dateTime: string) {
	return dateTime.slice(0, 10);
}

/** date 객체를 받아 yyyy-mm-dd 00:00 형태로 반환 */
export const formatDateAndTime = (date: Date) => {
	const [yyyy, mm, dd] = [
		date.getFullYear(),
		`${date.getMonth() + 1}`.padStart(2, '0'),
		`${date.getDate()}`.padStart(2, '0'),
	];

	const [hr, min] = [
		`${date.getHours()}`.padStart(2, '0'),
		`${date.getMinutes()}`.padStart(2, '0'),
	];

	return {
		lastUpdatedDate: `${yyyy}-${mm}-${dd}`,
		lastUpdatedTime: `${hr}:${min}`,
	};
};
