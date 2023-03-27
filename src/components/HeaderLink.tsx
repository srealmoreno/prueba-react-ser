import { Link, useLocation } from 'wouter'
import { headerLink } from '@typings/interfaces/headerLink'
import { createStyles, rem, Text } from '@mantine/core'
import { useEffect, useState } from 'react'

const useStyles = createStyles((theme) => ({

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      textAlign: 'center'
    }
  },

  icon: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color
    }
  }
}))

export default function HeaderLinks ({ link, onClick }: { link: headerLink, onClick?: () => void }): JSX.Element {
  const [location] = useLocation()
  const [active, setActive] = useState(location)
  const { classes, cx } = useStyles()

  useEffect(() => {
    setActive(location)
  }, [location])

  return (
    <Link
      href={link.link}
      onClick={onClick}
      className={cx(classes.link, active === link.link && classes.linkActive)}
    >
      <Text className={classes.icon}>
        {link.icon}
      </Text>

      <Text>
        {link.text}
      </Text>
    </Link>
  )
}
