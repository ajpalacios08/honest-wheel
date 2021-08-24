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



// import React from 'react'
// import styled from 'styled-components'

// const Wrapper = styled.div`
//     padding: 50px 100px 50px 0;
//     font-size: 30px;

//     img {
//         height: 30%;
//         width: 30%;
//         border-radius: 5%;
//         border: 1px solid rgba(0,0,0,0.1);
//         margin-bottom: -8px;
//     }
// `
// const TotalReviews = styled.div`
//     font-size: 18px;
//     padding: 10px 0;
// `
// const TotalOutOf = styled.div`
//     font-size: 18px;
//     font-weight: bold;
//     padding: 10px 0;
// `

// const Header = (props) => {
//     const {model, image_url, avg_score} = props.attributes
//     const total = props.reviews.length
//     return (
//         <Wrapper>
//             <h1> <img src={image_url} alt={model}/> {model} </h1>
//             <div>
//                 <TotalReviews>{total} User Reviews</TotalReviews>
//                 <div className="starRating"></div>
//                 <TotalOutOf>{avg_score} out of 5</TotalOutOf>
//             </div>
//         </Wrapper>
//     )
// }

// export default Header



// import React from 'react'

// const ReviewForm = (props) => {
//     return (
//         <div className="Wrapper">
//             <form className="field">
//                 <div>Would you like to share your review with the [Car Name]?</div>
//                 <div className="field">
//                     <input type="text" name="title" placeholder="Review Title"/>
//                 </div>
//                 <div className="field">
//                     <div className="rating-container">
//                         <div className="rating-title-text">Rate This Car</div>
//                         [Star Rating Goes Here]
//                     </div>
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default ReviewForm