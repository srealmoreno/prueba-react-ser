import { createStyles, useMantineColorScheme } from '@mantine/core'

const styles = createStyles((theme) => ({
  root: {
    cursor: 'pointer',
    background: 0,
    border: 0,
    borderRadius: 50,
    position: 'relative',
    isolation: 'isolate',
    display: 'flex',
    animation: 'pulseToDark 650ms ease-out infinite',
    '& *': {
      cursor: 'pointer'
    },
    '&:hover': {
      transition: 'none'
    },
    '& svg': {
      height: '1.5rem',
      fill: 'currentColor'
    },
    '&::before': {
    }
  },

  toggleSun: {
    transformOrigin: 'center center',
    transform: theme.colorScheme === 'light' ? 'rotate(0.5turn)' : '',
    transition: 'transform 750ms cubic-bezier(0.11, 0.14, 0.29, 1.32)'
  },

  toggleCircle: {
    transform: theme.colorScheme === 'light' ? 'translateX(-15%)' : '',
    transition: 'transform 500ms ease-out'
  }
}))

export function ButtonTheme (): JSX.Element {
  const { toggleColorScheme } = useMantineColorScheme()
  const { classes } = styles()

  return (
    <div className={classes.root} onClick={() => toggleColorScheme()}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 472.39 472.39'>
        <g className={classes.toggleSun}>
          <path d='M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z' />
        </g>
        <g className={classes.toggleCircle}>
          <circle className='cls-1' cx='236.2' cy='236.2' r='103.78' />
        </g>
      </svg>
    </div>
  )
}
