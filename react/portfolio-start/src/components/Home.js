import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import heroImage from "../assests/lokipartyhat.jpg"

function Home() {
  return (
   <Container>
        <Row className= "flex-lg-row-reverse align-items-center g-5 py-5">
            <Col xs={10} sm= {8} lg= {6}>
                <Image src={heroImage} className="d-block mx-lg-auto img-fluid"/>
            </Col>
            <Col lg= {6}>
                <h1 className= "display-5 fw-bold mb-3">Come on in and enjoy viewing this page.</h1>
                <p className= "lead">Welcome to the my page. My Name is Loki Ballesteros.</p>
                <div className="d-grid gap-2 d-md-flex">
                    
                </div>
            </Col>
        </Row>
   </Container>
  )
}

export default Home