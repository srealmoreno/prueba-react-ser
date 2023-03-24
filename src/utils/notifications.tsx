import { notifications } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons-react'

export const notify = {
  success: (message: string) => {
    notifications.show({
      title: 'Operación exitosa',
      message,
      icon: <IconCheck />
    })
  },
  error: (message: string) => {
    notifications.show({
      title: 'Error',
      message,
      color: 'red',
      icon: <IconX />
    })
  }
}

export default notify
