import { employee } from '@typings/interfaces/employee'
import { createContext } from 'react'

export const EmployeesContext = createContext<[employee[], (employees: employee[]) => void]>([[], () => { }])
export const EmployeesProvider = EmployeesContext.Provider
