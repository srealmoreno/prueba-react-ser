import { FormEmployee } from '@components/FormEmployee'
import { TitlePage } from '@components/Title'
import { useEmployees } from 'src/hooks/Employees'
import { useLocation } from 'wouter'
import { employee } from '@typings/interfaces/employee'
import { NotFoundPage } from '@components/pages/NotFound'
import notify from '@utils/notifications'

export function EditEmployee (params: { employeeID: string | undefined }): JSX.Element {
  const { employeeID } = params

  if (employeeID === undefined) {
    return <NotFoundPage />
  }

  const [, setLocation] = useLocation()
  const { getEmployee, updateEmployee } = useEmployees()

  const employee = getEmployee(employeeID)

  if (employee === undefined) {
    return <NotFoundPage />
  }

  const submit = (employee: employee): void => {
    try {
      updateEmployee(employee)
      notify.success('Empleado actualizado correctamente')
      setLocation('/')
    } catch (e: any) {
      notify.error(e.message)
    }
  }

  const cancel = (): void => {
    setLocation('/')
  }
  return (
    <>
      <TitlePage title='Editar Empleado' subtitle='Modifica los datos del empleado y cuando termines haz click en el botón Guardar' />

      <FormEmployee initialValues={employee} onSubmit={submit} submitText='Guardar' cancelText='Cancelar' onCancel={cancel} />
    </>
  )
}
