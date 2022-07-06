import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import AddPostForm from '../AddPost/AddPostForm'
import NavigationBar from '../NavigationBar/NavigationBar'
import ProfileCard from '../ProfileCard/ProfileCard'

import './Layout.css'

function Layout() {
    return (
        <>
            <NavigationBar />
            <Container className='mt-5'>
                <Row>
                    <Col xs={3} className="layout-profilecard">
                        <ProfileCard />
                    </Col>
                    <Col xs={6}>
                        <AddPostForm />
                    </Col>
                    <Col>
                        <ProfileCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Layout