import React from 'react'
import { api } from './api'

import './styles.css'

const DogPictures = () => {
  const [dogData, setDogData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)

  const handleDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'

    setIsLoading(true)
    const fetchDog = await api(url)

    setDogData(fetchDog)
    setIsLoading(false)
  }

  React.useEffect(() => {
    handleDog()
  }, [])

  if (dogData === null) return null

  return (
    <main>
      <h1>Dog Pictures =D</h1>
      {isLoading ? (
        <p className='new-dog'>Loading a new Dog xD</p>
      ) : (
        <section>
          <div>
            <img className='dog-image' src={dogData.message} alt='A dog!' />
          </div>

          <div>
            <button onClick={handleDog}>New Dog</button>
          </div>
        </section>
      )}
    </main>
  )
}

export default DogPictures
