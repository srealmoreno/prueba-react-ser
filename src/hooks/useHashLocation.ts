import { useLocationProperty, navigate } from 'wouter/use-location'

function hashLocation (): string {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return window.location.hash.replace(/^#/, '') || '/'
}

function hashNavigate (path: string): void {
  navigate(`#${path}`)
}

export function useHashLocation (): [string, (path: string, ...args: any[]) => any] {
  const location = useLocationProperty(hashLocation)
  return [location, hashNavigate]
}
