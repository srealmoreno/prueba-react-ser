import { HeaderApp } from '@components/Header'
import { AppShell, Center, ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { App } from './App'
import { IconHome, IconPlaylistAdd, IconApi } from '@tabler/icons-react'
import { Router } from 'wouter'
import { useHashLocation } from './hooks/useHashLocation'

export function MantineApp (): JSX.Element {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark'
  })

  const toggleColorScheme = (value?: ColorScheme): void =>
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'))

  const links = [
    { link: '/', text: 'Inicio', icon: <IconHome size={20} /> },
    { link: '/nuevo', text: 'Agregar Empleado', icon: <IconPlaylistAdd size={25} /> },
    { link: '/api', text: 'Api', icon: <IconApi size={25} /> }
  ]

  const header = <HeaderApp links={links} />

  return (
    <Router hook={useHashLocation}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
          <ModalsProvider>
            <Center>
              <AppShell header={header} maw='59rem'>
                <Notifications />
                <App />
              </AppShell>
            </Center>
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </Router>
  )
}
