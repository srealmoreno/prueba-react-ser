import {
  createStyles,
  Header,
  Container,
  Burger,
  Paper,
  Transition,
  rem,
  Group,
  SimpleGrid
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MantineLogo } from '@mantine/ds'
import { headerLinks } from '@typings/interfaces/headerLink'
import HeaderLinks from './HeaderLink'
import { ButtonTheme } from './ButtonTheme'
import { Link } from 'wouter'

const HEADER_HEIGHT = rem(60)

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 1
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },

  links: {
    display: 'flex',
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },
  theme: {
    [theme.fn.largerThan('sm')]: {
      width: rem(260)
    }
  }
}))

export function HeaderApp ({ links }: headerLinks): JSX.Element {
  const [opened, { toggle, close }] = useDisclosure(false)
  const { classes } = useStyles()

  const items = links.map((link) => (
    <HeaderLinks key={link.text} link={link} onClick={close} />
  ))

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />
        <Transition transition='slide-down' duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} style={styles} withBorder>
              <SimpleGrid cols={3} spacing='sm'>
                {items}
              </SimpleGrid>
            </Paper>
          )}
        </Transition>
        <Link href='/'>
          <MantineLogo size={30} />
        </Link>
        <Group position='right' spacing={5} noWrap className={classes.theme}>
          <ButtonTheme />
        </Group>

      </Container>
    </Header>
  )
}
