import { Row, Col, Card, Button} from 'react-bootstrap';

export default function DoingItems({ handleShow, doing, onDelete1}) {
    return(
        <>
            {
                doing.map((doing) => {
                    return (
                        <Card key={doing.id}>
                            <Card.Header>
                                <Row>
                                    <Col onClick={handleShow}>
                                        {doing.name}
                                    </Col>
                                    <Col md='auto'>
                                        <Button onClick={()=>{onDelete1(doing)}}>X</Button>
                                    </Col>
                                    <Col xs lg="2"  style={{ marginRight: "0.3vw" }}>
                                        <Button>Edit</Button>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body onClick={handleShow}>
                                {doing.text}
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
}