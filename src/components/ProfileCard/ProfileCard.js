import { BiCheckbox } from "react-icons/bi";


import Card from 'react-bootstrap/Card';

import './profileCard.css'

function ProfileCard() {
    return (
        <Card style={{ width: '14rem' }} className="profilecard">
            <Card.Img variant="top" className='profilecard-image' src="https://bit.ly/3bTBvDg" />
            <Card.Img variant="top" className='profilecard-image__user' src="https://bit.ly/3NSgrua" />
            <Card.Body>
                <Card.Title className='text-center profilecard-title'>Kiprotich Dominic</Card.Title>
                <Card.Text className='text-center profilecard-title__role'>Manager</Card.Text>
                <hr />
                <Card.Text className='profilecard-text mr-3'>Who viewed your profile<span>86</span></Card.Text>
                <Card.Text className='profilecard-text'>Impression of your posts<span>86</span></Card.Text>
                <hr />
                <Card.Text className='profilecard-text'>
                    Access exclusive tools & Insights
                </Card.Text>
                <Card.Text className='fw-bold text-dark profilecard-text profilecard-custom'>
                    <BiCheckbox className="profilecard-custom__box" />
                    Get Hired Faster, Try Premium <br />Free
                </Card.Text>
                <hr />
            </Card.Body>
        </Card>
    );
}

export default ProfileCard;