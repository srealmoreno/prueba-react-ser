import { CardEmployee } from '@components/CardEmployee'
import { TitlePage } from '@components/Title'
import { Center, SimpleGrid } from '@mantine/core'
import { Employee } from '@typings/interfaces/employee'
import { useEmployees } from 'src/hooks/Employees'

export function HomePage (): JSX.Element {
  const { employees } = useEmployees()

  const items = employees.map((p: Employee) => <CardEmployee key={p.personalId} employee={p} />)
  return (
    <>
      <TitlePage title='Inicio' subtitle='Empleados registrados' />
      <Center>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={30}>
          {items}
        </SimpleGrid>
      </Center>
    </>
  )
}
