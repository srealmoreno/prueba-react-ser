import { TitlePage } from '@components/Title'
import notify from '@utils/notifications'
import { useEffect, useState } from 'react'
import { City } from '@typings/interfaces/province'
import { getCity } from '@services/getProvinces'
import { Center, Loader } from '@mantine/core'
import { Prism } from '@mantine/prism'

const CITY = 'Albacete'

export function Api (): JSX.Element {
  const [city, setCountry] = useState<City>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getCity(CITY)
      .then(city => setCountry(city))
      .catch(error => notify.error(error.message))
      .finally(() => setLoading(false))
  }, [CITY])

  return (
    <>
      <TitlePage title='API' subtitle='Prueba la API de la aplicación' />
      <Center>
        {loading && <Loader />}
        {!loading && city !== undefined && (
          <Prism
            language='json'
            mt={5}
            withLineNumbers
            maw='100%'
            color='blue'
          >
            {JSON.stringify(city, null, 2)}
          </Prism>
        )}
      </Center>

    </>
  )
}
