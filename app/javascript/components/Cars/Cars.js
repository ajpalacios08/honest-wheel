import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Single from './single'
import styled from 'styled-components'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Cars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {

        axios.get('/api/v1/cars.json')
        .then(resp => (setCars(resp.data.data)))
        .catch(resp => console.log(resp))
    }, [cars.length])

    const grid = cars.map( item => {
        return (
        <Single 
            key={item.attributes.model}
            attributes={item.attributes}
        />
        )
    })

    return (
        <Home>
            <Header>
                <h1>HonestWheel</h1>
                <Subheader>Honest, car reviews.</Subheader>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Cars