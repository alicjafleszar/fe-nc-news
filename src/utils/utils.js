export function formatDateString(dateString) {
    return new Date(dateString).toLocaleString('default', {month: 'short', day: 'numeric', year: 'numeric'})
}

export function getTimeSince(created_at) {
    const secondsSince = (new Date() - Date.parse(created_at)) / 1000
    
    const minutes = Math.floor(secondsSince / 60)
    const hours = Math.floor(secondsSince / 3600)
    const days = Math.floor(secondsSince / 86400)
    const years = Math.floor(secondsSince / 31536000)

    const timeSinceArr = [
        [years, 'year', 'years'],
        [days, 'day', 'days'],
        [hours, 'hour', 'hours'],
        [minutes, 'minute', 'minutes'],
        [secondsSince, 'second', 'seconds'],
    ]

    const index = timeSinceArr.findIndex(item => item[0] >= 1)
    const timeUnit = timeSinceArr[index]

    return index > -1 ? `${timeUnit[0]} ${timeUnit[0] === 1 ? timeUnit[1] : timeUnit[2]} ago` : 'just now'
}