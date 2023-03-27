import { Group, Text } from '@mantine/core'

export function CardEmployeeSection ({ Icon, value }: { Icon: React.ReactNode, value: string }): JSX.Element {
  return (
    <Group noWrap spacing={10} mt={3}>
      {Icon}
      <Text fz='sm' color='dimmed'>
        {value}
      </Text>
    </Group>
  )
}
