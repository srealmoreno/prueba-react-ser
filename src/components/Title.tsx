import { Title, Text } from '@mantine/core'

export function TitlePage (props: { title: string, subtitle: string }): JSX.Element {
  return (
    <>
      <Title>{props.title}</Title>
      <Text mb='1rem' color='dimmed'>{props.subtitle}</Text>
    </>
  )
}
