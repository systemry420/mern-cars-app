import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import Layout from '../components/Layout'
import { getCars } from '../redux/actions/carsActions'

const Home = () => {
  const { cars } = useSelector((state: RootStateOrAny) => {
    return state.carsReducer
  })

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getCars())
    return () => {
    } 
  }, [])
  
  
  return (
    <Layout>
        Home
        {cars.map((car: any) => {
          return <Card {...car} />
        })}
    </Layout>
  )
}

export default Home