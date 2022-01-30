export function parseDate(date) {
  const [year, month, day] = date.split('-')

  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    .toDateString()
    .split(' ')
    .slice(1)
    .join(' ')
}

export function slugify(title) {
  return title.split(' ').join('-')
}
