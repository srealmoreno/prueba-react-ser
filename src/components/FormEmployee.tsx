import { TextInput, Paper, Container, Button, Avatar, Center, Group, InputBase } from '@mantine/core'
import { useForm } from '@mantine/form'
import { validateEmail, validateInsuranceNumber, validateName, validatePersonalId } from '@utils/index'
import { IconMail, IconId, IconMedicalCross, IconUser } from '@tabler/icons-react'
import { FormEmployeeProps } from '@typings/interfaces/formEmploye'
import { IMaskInput } from 'react-imask'

export function FormEmployee ({
  submitText,
  cancelText,
  initialValues,
  onSubmit,
  onCancel
}: FormEmployeeProps): JSX.Element {
  const form = useForm({
    initialValues: {
      firstName: initialValues?.firstName ?? '',
      lastName: initialValues?.lastName ?? '',
      email: initialValues?.email ?? '',
      personalId: initialValues?.personalId ?? '',
      insuranceNumber: initialValues?.insuranceNumber ?? ''
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

          <InputBase
            icon={<IconId stroke={1.5} size='1rem' />}
            mt='xs'
            label='Cédula'
            required
            {...form.getInputProps('personalId')}
            mask='000-000000-0000a' component={IMaskInput}
          />

          <InputBase
            icon={<IconMedicalCross stroke={1.5} size='1rem' />}
            mt='xs'
            label='Número de seguro'
            required
            {...form.getInputProps('insuranceNumber')}
            mask='0000000-0' component={IMaskInput}
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
