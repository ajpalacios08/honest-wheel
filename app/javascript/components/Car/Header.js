import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    padding: 50px 100px 50px 0;
    font-size: 30px;

    img {
        height: 30%;
        width: 30%;
        border-radius: 5%;
        border: 1px solid rgba(0,0,0,0.1);
        margin-bottom: -8px;
    }
`
const TotalReviews = styled.div`
    font-size: 18px;
    padding: 10px 0;
`
const TotalOutOf = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
`

const Header = (props) => {
    const {model, image_url, avg_score} = props.car
    const total = props.car.reviews.length
    return (
        <Wrapper>
            <h1> <img src={image_url} alt={model}/> {model} </h1>
            <div>
                <TotalReviews>{total} User Reviews</TotalReviews>
                <div className="starRating"></div>
                <TotalOutOf>{avg_score} out of 5</TotalOutOf>
            </div>
        </Wrapper>
    )
}

export default Header