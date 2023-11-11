export const handleGetDate = (param?: string) => {
  const date = param ? new Date(param) : new Date()
  const dateString = date.toDateString()

  const now = dateString.slice(dateString.indexOf(' '))

  return now
}
