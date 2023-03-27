import { modals } from '@mantine/modals'
import { Text } from '@mantine/core'
import { ConfirmModalProps } from '@typings/interfaces/modals.d'
export const modal = {
  openConfirmModal: (props: ConfirmModalProps): void => {
    modals.openConfirmModal({
      title: props.title,
      centered: true,
      children: (
        <Text size='sm'>
          {props.message}
        </Text>
      ),
      labels: { confirm: props.confirmText, cancel: props.cancelText },
      confirmProps: { color: 'red' },
      onConfirm: props.onConfirm,
      onCancel: props.onCancel
    })
  }
}
