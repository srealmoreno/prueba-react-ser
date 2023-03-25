import { City, ResponseProvince } from '@typings/interfaces/province'
import axios from 'axios'

const API_URL = 'https://datos.gob.es/apidata/nti/territory/Province?_sort=label&_pageSize=10&_page=0'

export async function getProvinces (): Promise<City[]> {
  const { data } = await axios.get<ResponseProvince>(API_URL)
  const { items } = data.result
  return items
}

export async function getCity (name: string): Promise<City | undefined> {
  const cities = await getProvinces()
  return cities.find((city) => city.label === name)
}
