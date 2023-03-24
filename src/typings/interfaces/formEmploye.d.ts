export interface FormEmployeeProps {
  initialValues?: Employee
  onSubmit: (values: Employee) => void
  onCancel?: () => void
  submitText: string
  cancelText?: string
}
