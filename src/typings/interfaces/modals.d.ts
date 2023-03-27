export interface ConfirmModalProps {
  title: string
  message: string
  onConfirm: () => void
  onCancel?: () => void
  confirmText: string
  cancelText?: string
}
