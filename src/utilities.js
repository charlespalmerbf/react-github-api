export function daysAgo(date) {
    const currentDate = new Date();

    const difference = currentDate - new Date(date);

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const response = days === 0 ? 'Less than 1 day(s) ago.' : `${days} day(s) ago.`

    return response;
}
