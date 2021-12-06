type TEnvNames = 'REACT_APP_API_URL'

const getEnvVariable = (envName: TEnvNames): string => {
  const value = process.env[envName]

  if (value !== undefined) {
    return value
  } else {
    throw new Error(`${envName} not exist!`)
  }
}

export default getEnvVariable
