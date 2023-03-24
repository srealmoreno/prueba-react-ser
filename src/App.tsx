import { HomePage } from '@components/pages/Home'
import { NotFoundPage } from '@components/pages/NotFound'
import { Route, Switch } from 'wouter'
import { newEmployee } from '@components/pages/New'
import { EmployeesProvider } from './context/Employees'
import { employee } from '@typings/interfaces/employee'
import { useState } from 'react'
import { EditEmployee } from '@components/pages/Edit'
import { nanoid } from 'nanoid'

export function App (): JSX.Element {
  const _employees: employee[] =
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

  const [employees, setEmployees] = useState<employee[]>(_employees)

  return (
    <EmployeesProvider value={[employees, setEmployees]}>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/nuevo' component={newEmployee} />
        <Route path='/editar/:employeeID'>
          {params => <EditEmployee employeeID={params.employeeID} />}
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </EmployeesProvider>
  )
}
