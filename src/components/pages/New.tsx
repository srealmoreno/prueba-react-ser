import { FormEmployee } from '@components/FormEmployee'
import { TitlePage } from '@components/Title'
import { useEmployees } from 'src/hooks/Employees'
import { useLocation } from 'wouter'
import { employee } from '@typings/interfaces/employee'
import notify from '@utils/notifications'

export function newEmployee (): JSX.Element {
  const [, setLocation] = useLocation()
  const { addEmployee } = useEmployees()

  const submit = (employee: employee): void => {
    try {
      addEmployee(employee)
      setLocation('/')
      notify.success('Empleado agregado correctamente')
    } catch (e: any) {
      notify.error(e.message)
    }
  }
  return (
    <>
      <TitlePage title='Nuevo Registro' subtitle='Completa el siguiente formulario para agregar un nuevo empleado' />

      <FormEmployee onSubmit={submit} submitText='Agregar' />
    </>
  )
}
