import { TextInput, Paper, Container, Button, Avatar, Center, Group } from '@mantine/core'
import { useForm } from '@mantine/form'
import { validateEmail, validateInsuranceNumber, validateName, validatePersonalId } from '@utils/index'
import { IconMail, IconId, IconMedicalCross, IconUser } from '@tabler/icons-react'
import { FormEmployeeProps } from '@typings/interfaces/formEmploye'

export function FormEmployee ({
  submitText,
  cancelText,
  initialValues,
  onSubmit,
  onCancel
}: FormEmployeeProps): JSX.Element {
  const form = useForm({
    initialValues: {
      ...initialValues
    },
    validate: {
      firstName: (value) => (validateName(value) ? null : 'Nombre inválido'),
      lastName: (value) => (validateName(value) ? null : 'Apellido inválido'),
      email: (value) => (validateEmail(value) ? null : 'Correo electrónico inválido'),
      personalId: (value) => (validatePersonalId(value) ? null : 'Cédula inválida'),
      insuranceNumber: (value) => (validateInsuranceNumber(value) ? null : 'Número de seguro inválido')
    }
  })

  return (
    <Container size={460} my={30}>
      <Paper withBorder shadow='md' p={30} radius='md' mt='xl'>
        <Center>
          <Avatar size={120} radius={120} mx='auto' mb='sm' mt='sm' />
        </Center>

        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <Group noWrap spacing={10} mt={3}>
            <TextInput
              icon={<IconUser stroke={1.5} size='1rem' />}
              mt='xs'
              label='Nombre'
              placeholder='Tu nombre'
              required
              {...form.getInputProps('firstName')}
            />
            <TextInput
              icon={<IconUser stroke={1.5} size='1rem' />}
              mt='xs'
              label='Apellido'
              placeholder='Tu apellido'
              required
              {...form.getInputProps('lastName')}
            />
          </Group>
          <TextInput
            icon={<IconMail stroke={1.5} size='1rem' />}
            mt='xs'
            label='Correo electrónico'
            placeholder='Tu correo electrónico'
            required
            {...form.getInputProps('email')}
          />
          <TextInput
            icon={<IconId stroke={1.5} size='1rem' />}
            mt='xs'
            label='Cédula'
            placeholder='000-000000-0000Y'
            required
            {...form.getInputProps('personalId')}
            onBlur={() => {
              console.log(form.values.personalId)
            }}
          />

          <TextInput
            icon={<IconMedicalCross stroke={1.5} size='1rem' />}
            mt='xs'
            label='Número de seguro'
            placeholder='0000000-0'
            required
            {...form.getInputProps('insuranceNumber')}
          />

          <Group noWrap spacing={10} mt={3}>
            <Button type='submit' fullWidth mt='xl'>
              {submitText}
            </Button>

            {onCancel != null && (
              <Button fullWidth mt='xl' onClick={onCancel} color='red'>
                {cancelText}
              </Button>
            )}
          </Group>
        </form>
      </Paper>
    </Container>
  )
}
