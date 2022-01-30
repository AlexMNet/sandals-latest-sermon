//Safari and IE cannot parse date strings. Must convert to numbers pass in as Year, month, day. Example: new Date(2011, 01, 07)
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
