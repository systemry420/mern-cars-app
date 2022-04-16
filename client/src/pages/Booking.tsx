import React from 'react'
import Layout from '../components/Layout'
import { getCars } from '../redux/actions/carsActions'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Booking = () => {
  const { cars } = useSelector((state: RootStateOrAny) => {
    return state.carsReducer
  })

  const { carId } = useParams()

  const [currentCar, setCurrentCar] = React.useState({
    name: '', image: ''
  })

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getCars())
    return () => {
    } 
  }, [])

  React.useEffect(() => {
    const c = cars?.find((c: any) => c._id === carId)
    
    setCurrentCar(c)
    return () => {
    } 
  }, [carId])
  
  
  return (
    <Layout>
        <h1>Booking</h1>
        <Info>
          <h2>{currentCar?.name}</h2>
          <img src={currentCar.image} alt={currentCar.name} />
        </Info>
    </Layout>
  )
}

const Info = styled.div`
  width: 90%

  img {
    width: 100%;
  }
`
export default Booking