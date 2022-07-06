import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavigationBar from '../NavigationBar/NavigationBar'
import ProfileCard from '../ProfileCard/ProfileCard'

function Layout() {
    return (
        <>
            <NavigationBar />
            <Container className='mt-5'>
                <Row>
                    <Col xs>
                        <ProfileCard />
                    </Col>
                    <Col xs>Second, but last</Col>
                    <Col xs>Third, but second</Col>
                </Row>
            </Container>
        </>
    )
}

export default Layout