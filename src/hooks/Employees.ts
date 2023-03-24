import { employee } from '@typings/interfaces/employee'
import { useEmployeeReturn } from '@typings/interfaces/useEmployees'
import { validateEmail, validateInsuranceNumber, validateName, validatePersonalId } from '@utils/index'
import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { EmployeesContext } from 'src/context/Employees'

function alReadyExist (employees: employee[], employee: employee, excludeId?: string): boolean {
  return employees.some((p) => {
    if (p.id === excludeId) {
      return false
    }

    return p.personalId.toLocaleLowerCase() === employee.personalId.toLocaleLowerCase() || p.email.toLocaleLowerCase() === employee.email.toLocaleLowerCase() || p.insuranceNumber === employee.insuranceNumber
  })
}

function validateEmployee (employee: employee): boolean {
  if (!validateName(employee.firstName)) {
    throw new Error('Nombre no válido')
  }

  if (!validateName(employee.lastName)) {
    throw new Error('Apellido no válido')
  }

  if (!validateEmail(employee.email)) {
    throw new Error('Correo no válido')
  }

  if (!validatePersonalId(employee.personalId)) {
    throw new Error('Cédula no válida')
  }

  if (!validateInsuranceNumber(employee.insuranceNumber)) {
    throw new Error('Número de seguro no válido')
  }

  return true
}

export function useEmployees (): useEmployeeReturn {
  const [employees, setEmployees] = useContext(EmployeesContext)

  const addEmployee = (employee: employee): void => {
    validateEmployee(employee)

    if (alReadyExist(employees, employee)) {
      throw new Error('Error al registrar, ya existe un empleado con la misma cédula, email o numero de seguro')
    }

    employee.id = nanoid()

    setEmployees([...employees, employee])
  }

  const removeEmployee = (employee: employee): void => {
    setEmployees(employees.filter((p) => p.id !== employee.id))
  }

  const updateEmployee = (employee: employee): void => {
    validateEmployee(employee)

    if (alReadyExist(employees, employee, employee.id)) {
      throw new Error('Error al actualizar, ya existe un empleado con la misma cédula, email o numero de seguro')
    }

    setEmployees(employees.map((p) => (p.id === employee.id ? employee : p)))
  }

  const getEmployee = (id: string): employee | undefined => {
    return employees.find((p) => p.personalId === id || p.insuranceNumber === id || p.email === id || p.id === id)
  }

  return {
    employees,
    addEmployee,
    removeEmployee,
    updateEmployee,
    getEmployee
  }
}
