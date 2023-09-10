export const handleColorLable = (label: string) => {
  let color

  switch (label) {
    case 'primary':
      color = 'bg-primary text-primary bg-opacity-20'
      break
    case 'secondary':
      color = 'bg-secondary text-secondary bg-opacity-20'
      break
    case 'danger':
      color = 'bg-danger text-danger bg-opacity-20'
      break
    case 'warning':
      color = 'bg-warning text-warning bg-opacity-20'
      break
    case 'success':
      color = 'bg-success text-success bg-opacity-20'
      break

    default:
      break
  }

  return color
}
