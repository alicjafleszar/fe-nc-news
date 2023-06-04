export function formatDateString(dateString) {
    return new Date(dateString).toLocaleString('default', {month: 'short', day: 'numeric', year: 'numeric'})
}