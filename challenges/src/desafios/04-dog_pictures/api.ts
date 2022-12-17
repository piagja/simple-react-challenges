export const api = async (url: string) => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
    throw new Error(error as string)
  }
}
