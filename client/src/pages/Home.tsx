import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import Layout from '../components/Layout'
import { getCars } from '../redux/actions/carsActions'
import styled from 'styled-components'

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
        <h1>Home</h1>
        <Wrapper>
          {cars.map((car: any) => {
            return <Card {...car} />
          })}
        </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Home