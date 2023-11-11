import { MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'

const handleSensor = () => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 0
    }
  })

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  })

  const sensors = useSensors(mouseSensor, touchSensor)

  return sensors
}

export default handleSensor
