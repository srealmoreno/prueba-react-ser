import { Employee } from '@typings/interfaces/employee'
import { createContext } from 'react'

export const EmployeesContext = createContext<[Employee[], (employees: Employee[]) => void]>([[], () => { }])
export const EmployeesProvider = EmployeesContext.Provider
