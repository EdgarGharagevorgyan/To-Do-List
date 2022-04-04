import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function AddModal({ show, handleClose, onAdd, onAdd1, onAdd2 }) {

    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [status, setStatus] = useState();

    const initialState = {
        id: Math.random(),
        name: '',
        text: '',
        status: 0
    }

    const clearState = (setClear) => {
        setClear({...initialState})
    };

    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control as="textarea" rows={1} onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            onChange={(e) => {
                                setText(e.target.value)
                            }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select onChange={(e) => {
                            setStatus(e.target.value)
                        }}>
                            <option value='0'>Choose Status</option>
                            <option value="1">To Do</option>
                            <option value="2">Doing</option>
                            <option value="3">Done</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={(e) => {
                    if (status == 1) {
                        e.preventDefault();
                        onAdd(name, text, status);
                        handleClose();
                        clearState(setName);
                        clearState(setText);
                        clearState(setStatus);
                    } if (status == 2) {
                        e.preventDefault();
                        onAdd1(name, text, status);
                        handleClose();
                        clearState(setName);
                        clearState(setText);
                        clearState(setStatus);
                    } if (status == 3) {
                        e.preventDefault();
                        onAdd2(name, text, status);
                        handleClose();
                        clearState(setName);
                        clearState(setText);
                        clearState(setStatus);
                    } else {
                        handleClose();
                    }
                }} >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

