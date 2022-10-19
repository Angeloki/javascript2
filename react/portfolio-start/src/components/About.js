import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import partyImage from "../assests/brotherspartytime.jpg"

function About() {
  return (
    <Container>
      <Row className= "text-left">
      <div>
              <p> My Name is Loki but I have many names. Some names include:</p>
                <ul>
                 <li>Baby</li>
                  <li>NO dont do that</li>
                  <li>Cutie Patootie</li>
                 </ul>
             </div>
       <Col xs={10} sm= {8} lg= {6}>
                <Image src={partyImage} className="d-block mx-lg-auto img-fluid"/>
        </Col>
           
        </Row>
    </Container>
  )
}

export default About