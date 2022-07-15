import React, { createContext, useState, useContext } from 'react'

const placeContext = createContext()

export const PlaceProvider = (props) => {
  const [data, setdata] = useState([])

  return (
    <placeContext.Provider
      value={{
        setdata,
        data
      }}
    >
      {props.children}
    </placeContext.Provider>
  )
}

export const useFormPlace = () => {
  const context = useContext(placeContext)
  if (context === undefined) {
    throw new Error('useForm can only be used inside FormProvider')
  }
  return context
}