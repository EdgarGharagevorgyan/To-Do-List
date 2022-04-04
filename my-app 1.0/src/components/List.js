import { Row, Col, Card, Button} from 'react-bootstrap';
import ToDoItems from './ToDoItems';
import DoingItems from './DoingItems';
import DoneItems from './DoneItems';


export default function List({ handleShow, toDoes, doing, done, onDelete, onDelete1, onDelete2}) {

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header style={{ fontSize: '20px' }}>
                            <Row>
                                <Col style={{ marginRight: "17vw" }}>To Do</Col>
                                <Col>
                                    <Button onClick={handleShow}>Add</Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <ToDoItems handleShow={handleShow} toDoes={toDoes} onDelete={onDelete}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header style={{ fontSize: '20px' }}>
                            <Row>
                                <Col style={{ marginRight: "17vw" }}>Doing</Col>
                                <Col>
                                    <Button onClick={handleShow}>Add</Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <DoingItems handleShow={handleShow} doing={doing} onDelete1={onDelete1}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header style={{ fontSize: '20px' }}>
                            <Row>
                                <Col style={{ marginRight: "17vw" }}>Done</Col>
                                <Col>
                                    <Button onClick={handleShow}>Add</Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <DoneItems handleShow={handleShow} done={done} onDelete2={onDelete2}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}