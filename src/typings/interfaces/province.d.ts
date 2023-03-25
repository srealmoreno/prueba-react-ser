export interface ResponseProvince {
  format: string
  version: string
  result: Result
}

export interface Result {
  _about: string
  definition: string
  extendedMetadataVersion: string
  first: string
  isPartOf: IsPartOf
  items: City[]
  itemsPerPage: number
  next: string
  page: number
  startIndex: number
  type: string
}

export interface IsPartOf {
  _about: string
  definition: string
  hasPart: string
  type: string
}

export interface City {
  _about: string
  autonomia: string
  label: string
  pais: string
  sameAs: string
  type: string
}
