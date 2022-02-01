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
  return (
    title
      //Remove leading and trailing whitespace
      .trim()
      //Make all alpha characters lowercase
      .toLowerCase()
      //Replace spaces with hyphens (will duplicate hypens but will be removed later)
      .replace(/\s+/g, '-')
      //Replace anything that is not a word or hyphen with empty string
      .replace(/[^\w\-]+/g, '')
      //Replace multiple hyphens with one
      .replace(/\-\-+/g, '-')
      //Remove hyphens from begining of string
      .replace(/^-+/, '')
      //Remove hyphens from end of string
      .replace(/-+$/, '')
      //Remove all underscores
      .replace(/_/g, '')
  )
}
