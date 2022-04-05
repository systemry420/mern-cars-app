import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import { getCars } from '../redux/actions/carsActions'

const Home = () => {
  const { cars } = useSelector((state: RootStateOrAny) => {
    return state.carsReducer
  })
  
  getCars()

  return (
    <Layout>
        Home
        {cars.length}
    </Layout>
  )
}

export default Home