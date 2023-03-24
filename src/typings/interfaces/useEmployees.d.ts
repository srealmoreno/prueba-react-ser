export interface useEmployeeReturn {
  employees: Person[]
  addEmployee: (person: Person) => void
  removeEmployee: (person: Person) => void
  updateEmployee: (person: Person) => void
  getEmployee: (personalId: string) => Person | undefined
}
