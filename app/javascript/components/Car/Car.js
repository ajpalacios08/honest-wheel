import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import styled from 'styled-components'


const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
    background: #fff;
    height: 100vh;
    
    &:last-child {
        background: #000;
    }
`

const Main = styled.div`
    padding-left: 50px;
`

const Car = (props) => {
    
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(true)

    // useEffect(() => {
    //     const slug = props.selectedCar.id
    //     const url = `/api/v1/cars/${slug}`

    //     axios.get(url)
    //     .then(resp => {
    //         setCar(resp.data)
    //         setLoaded(true)
    //     })
    //     .catch(resp => console.log(resp))
    // }, [])

    const handleChange = (e) => {
        e.preventDefault()

        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

        console.log('review:', review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const car_id = props.selectedCar.id
        axios.post('/api/v1/reviews', {review: {title: review.title, description: review.description, score: review.score, car_id: car_id, user_id: props.currentUser.id }})
        .then(resp => {
            console.log(resp)
            props.setSelectedCar(resp.data)
            e.target.reset()
        })
        .catch(resp => {})
    }

    const setRating = (score, e) => {
        e.preventDefault()
        
        setReview({...review, score})
    }

    return (
        <Wrapper>
            {
                loaded &&
                <Fragment>
                    <Column>
                        <Main>
                            <Header
                            car={props.selectedCar}
                            // reviews={props.selectedCar.included}
                            />
                            <div className="reviews"></div>
                        </Main>
                    </Column>
                    <Column>
                        <ReviewForm 
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setRating={setRating}
                            car={props.selectedCar}
                            review={review}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>
    )
}

export default Car