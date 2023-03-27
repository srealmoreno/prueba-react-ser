import { Employee } from './Employee'
export interface useEmployeeReturn {
  employees: Employee[]
  addEmployee: (person: Employee) => void
  removeEmployee: (person: Employee) => void
  updateEmployee: (person: Employee) => void
  getEmployee: (personalId: Employee) => Employee | undefined
}
