import { Row, Col, Card, Button } from 'react-bootstrap';

export default function ToDoItems({ toDoes, onDelete}) {
    return(
        <>
            {
                toDoes.map((toDoes) => {
                    return (
                        <Card key={toDoes.id}>
                            <Card.Header>
                                <Row>
                                    <Col>
                                        {toDoes.name}
                                    </Col>
                                    <Col md='auto'>
                                        <Button onClick={()=>{onDelete(toDoes)}}>X</Button>
                                    </Col>
                                    <Col xs lg="2"  style={{ marginRight: "0.3vw" }}>
                                        <Button>Edit</Button>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                {toDoes.text}
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
}