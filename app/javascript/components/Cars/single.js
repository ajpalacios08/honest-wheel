import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: center;
`
const СarImg = styled.div`
    width: 50px;
    text-align: center;
    margin-left; auto;
    margin-right; auto;
    padding-top; 10px;

    img {
        maxLength: 100px;
        maxHeight: 100px;
        width: 100px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const CarModel = styled.div`
    padding: 20px 0 20px 0;
`
const CarLink = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

const Car = (props) => {
    return (
        <Card>
            <СarImg>
                <img src={props.attributes.image_url} alt={props.attributes.model}/>
            </СarImg>
            <CarModel>{props.attributes.model}</CarModel>
            <div className="car-score">{props.attributes.avg_score}</div>
            <CarLink>
                <Link to={`/cars/${props.attributes.slug}`}>View Cars</Link>
            </CarLink>
        </Card>
    )
}

export default Car