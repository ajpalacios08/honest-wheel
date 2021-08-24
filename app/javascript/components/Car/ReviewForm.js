import React from 'react'

const ReviewForm = (props) => {
    return (
        <div className="Wrapper">
            <form className="field">
                <div>Would you like to share your review with the [Car Name]?</div>
                <div className="field">
                    <input type="text" name="title" placeholder="Review Title"/>
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Rate This Car</div>
                        [Star Rating Goes Here]
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm