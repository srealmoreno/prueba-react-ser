import { HomePage } from '@components/pages/Home'
import { NotFoundPage } from '@components/pages/NotFound'
import { Route, Switch } from 'wouter'
import { newEmployee } from '@components/pages/New'
import { EmployeesProvider } from './context/Employees'
import { Employee } from '@typings/interfaces/employee'
import { useState } from 'react'
import { EditEmployee } from '@components/pages/Edit'
import { Api } from '@components/pages/Api'
import { nanoid } from 'nanoid'

export function App (): JSX.Element {
  const _employees: Employee[] =
    [
      {
        id: nanoid(),
        firstName: 'John',
        lastName: 'Doe',
        personalId: '123-123456-1234A',
        insuranceNumber: '1234567-0',
        email: 'jhon@example.com'
      },
      {
        id: nanoid(),
        firstName: 'Jane',
        lastName: 'Doe',
        personalId: '123-123456-1234B',
        insuranceNumber: '1234567-1',
        email: 'jane@exmaple.com'
      },
      {
        id: nanoid(),
        firstName: 'Bob',
        lastName: 'Doe',
        personalId: '123-123456-1234C',
        insuranceNumber: '1234567-2',
        email: 'bob@example.com'
      }

    ]

  const [employees, setEmployees] = useState<Employee[]>(_employees)

  return (
    <EmployeesProvider value={[employees, setEmployees]}>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/nuevo' component={newEmployee} />
        <Route path='/editar/:employeeID'>
          {params => <EditEmployee employeeID={params.employeeID} />}
        </Route>
        <Route path='/api' component={Api} />
        <Route component={NotFoundPage} />
      </Switch>
    </EmployeesProvider>
  )
}
