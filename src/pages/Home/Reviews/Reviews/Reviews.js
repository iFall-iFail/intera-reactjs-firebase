import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);
    return (
        <div>
            <Container className="mt-5 py-5">
                <h2 className="mb-5 text-center">Reviews</h2>
                <Row className="d-flex justify-content-center">
                    {
                        reviews.map(review => {
                            return <Review key={review._id} review={review} />
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Reviews;