import { useState } from 'react';
import { Button, Accordion, Card, useAccordionButton } from 'react-bootstrap';
import AddModal from './AddModal';
import List from "./List";

function Switcher({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <Button
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}


export default function NavBar({ toDoes, doing, done, onAdd, onAdd1, onAdd2, onDelete, onDelete1, onDelete2 }) {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Accordion defaultActiveKey="1" >
            <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginBottom: '40px' }}>
                <Card.Header>
                    <Switcher eventKey="0">Add Task</Switcher>
                </Card.Header>
                <Accordion.Collapse eventKey="0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                    <Card.Body>
                        <List handleShow={handleShow} toDoes={toDoes} doing={doing} done={done} onDelete={onDelete} onDelete1={onDelete1} onDelete2={onDelete2} />
                    </Card.Body>
                </Accordion.Collapse>
                <AddModal show={show} setShow={setShow} handleClose={handleClose} onAdd={onAdd} onAdd1={onAdd1} onAdd2={onAdd2} />
            </Card>
        </Accordion>
    );
}