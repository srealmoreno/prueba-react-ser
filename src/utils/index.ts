export function validateName (name: string): boolean {
  const re = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
  return re.test(name)
}

export function validateEmail (email: string): boolean {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

export function validatePersonalId (id: string): boolean {
  // 281-1201999-0003K
  const re = /^[0-9]{3}-[0-9]{6}-[0-9]{4}[A-Za-zñÑ]$/
  return re.test(id)
}

export function validateInsuranceNumber (number: string): boolean {
  const re = /^[0-9]{7}-[0-9]{1}$/
  return re.test(number)
}

export function getBirthDate (personalId: string): string {
  if (!validatePersonalId(personalId)) {
    return ''
  }

  const re = /[0-9]{3}-([0-9]{2})([0-9]{2})([0-9]{2})/
  const matches = personalId.match(re)

  if (matches === null) {
    return ''
  }

  const [, year, month, day] = matches

  return `${year}/${month}/${day}`
}
