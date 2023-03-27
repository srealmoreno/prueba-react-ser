import { Avatar, Text, Paper, Button, Group } from '@mantine/core'
import { Employee } from '@typings/interfaces/employee'
import { IconMail, IconId, IconMedicalCross, IconEdit, IconTrash, IconGift } from '@tabler/icons-react'
import { CardEmployeeSection } from './CardEmployeeSection'
import { useEmployees } from 'src/hooks/Employees'
import { getBirthDate } from '@utils/index'
import { useLocation } from 'wouter'
import { modal } from '@utils/modals'
import { notify } from '@utils/notifications'

export function CardEmployee (props: { employee: Employee }): JSX.Element {
  const { employee } = props
  const { removeEmployee } = useEmployees()

  const fullName = `${employee.firstName} ${employee.lastName}`
  const birthDate = getBirthDate(employee.personalId)
  const [, setLocation] = useLocation()

  const handleEdit = (): void => {
    setLocation(`/editar/${employee.personalId}`)
  }

  const handleDelete = (): void => {
    modal.openConfirmModal({
      title: `Eliminar ${fullName}`,
      message: `¿Estás seguro que quieres eliminar a ${fullName}?`,
      confirmText: 'Eliminar',
      cancelText: 'Cancelar',
      onConfirm: () => {
        removeEmployee(employee)
        notify.success('Empleado eliminado correctamente')
      }
    })
  }

  return (
    <Paper
      radius='md'
      withBorder
      maw={300}
      p='lg'
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
      })}
    >
      <Text fw={700} ta='center' size='lg'>
        {fullName}
      </Text>

      <Avatar size={120} radius={120} mx='auto' mb='sm' mt='sm' />

      <CardEmployeeSection Icon={<IconMail stroke={1.5} size='1rem' />} value={employee.email} />

      <CardEmployeeSection Icon={<IconId stroke={1.5} size='1rem' />} value={employee.personalId} />

      <CardEmployeeSection Icon={<IconMedicalCross stroke={1.5} size='1rem' />} value={employee.insuranceNumber} />

      <CardEmployeeSection Icon={<IconGift stroke={1.5} size='1rem' />} value={birthDate} />

      <Group noWrap spacing={10} mt={3}>
        <Button leftIcon={<IconEdit stroke={1.5} size='1rem' />} color='indigo' fullWidth mt='md' onClick={handleEdit}>
          Editar
        </Button>
        <Button leftIcon={<IconTrash stroke={1.5} size='1rem' />} color='red' fullWidth mt='md' onClick={handleDelete}>
          Eliminar
        </Button>
      </Group>

    </Paper>
  )
}
