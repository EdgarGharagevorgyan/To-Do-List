import { Row, Col, Card, Button} from 'react-bootstrap';

export default function DoneItems({ handleShow, done, onDelete2}) {
    return(
        <>
            {
                done.map((done) => {
                    return (
                        <Card key={done.id}> 
                            <Card.Header>
                                <Row>
                                    <Col onClick={handleShow}>
                                        {done.name}
                                    </Col>
                                    <Col md='auto'>
                                        <Button onClick={()=>{onDelete2(done)}}>X</Button>
                                    </Col>
                                    <Col xs lg="2"  style={{ marginRight: "0.3vw" }}>
                                        <Button>Edit</Button>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body onClick={handleShow}>
                                {done.text}
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
}