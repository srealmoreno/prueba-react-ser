import { createStyles, Title, Text, Button, Container, rem, Center } from '@mantine/core'
import { Link } from 'wouter'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(20),
    paddingBottom: rem(80)
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120)
    }
  },

  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32)
    }
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`
  }
}))

export function NotFoundPage (): JSX.Element {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Oops! Página no encontrada</Title>
      <Text color='dimmed' size='lg' align='center' className={classes.description}>
        Desafortunadamente, esta es solo una página 404. Puede haber escrito mal la dirección o la página se ha
        movido a otra URL.
      </Text>
      <Center>
        <Link href='/' className='link'>
          <Button size='md'>
            Volver al inicio
          </Button>
        </Link>
      </Center>
    </Container>
  )
}
