import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import Layout from '../components/Layout'

const Home = () => {
  const { cars } = useSelector((state: RootStateOrAny) => {
    return state.carsReducer
  })
  

  return (
    <Layout>
        Home
        {cars.length}
    </Layout>
  )
}

export default Home