import React, { useState } from 'react';
import { Form, Button, ListGroup, Tab } from 'react-bootstrap';
import todos from './todoItems';
import './styles.css';

const getVariant = (dueDate) => {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = dueDateObj - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days

    if (diffDays > 7) return 'primary';     // More than 7 days away
    if (diffDays <= 7 && diffDays > 4) return 'success';  // Less than 7 days, more than 4
    if (diffDays <= 4 && diffDays > 2) return 'warning';  // Less than 4 days, more than 2
    if (diffDays <= 2) return 'danger';    // Less than 2 days (urgent)

    return 'primary';
};

const TodoList = () => {
    const [todoItems, setTodoItems] = useState(todos);

    const handleDescriptionChange = (index, newDescription) => {
        const updatedTodos = [...todoItems];
        updatedTodos[index].description = newDescription;
        setTodoItems(updatedTodos);
    };

    // Function to handle updating the due date
    const handleDueDateChange = (index, newDueDate) => {
        const updatedTodos = [...todoItems];
        updatedTodos[index].dueDate = newDueDate;
        setTodoItems(updatedTodos);
    };

    return (
        <div className="container"> { }
            <div className="header">
                <h1>Assignment 2: Alan Young's ToDo List</h1>
            </div>

            <div className="flex-container">
                <div className="left-column">
                    <Form>
                        <Form.Group controlId="todoTitle">
                            <Form.Label>ToDo Item</Form.Label>
                            <Form.Control type="text" placeholder="Add todo item" />
                        </Form.Group>
                        <Form.Group controlId="todoDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Button type="submit" style={{ backgroundColor: 'blue', width: '100%' }}>
                            Add Todo
                        </Button>
                    </Form>
                </div>

                <div className="right-columns-container"> { }

                    { }
                    <Tab.Container defaultActiveKey="#todo1">
                        <div className="second-column">
                            <ListGroup>
                                {todoItems.map((todo, index) => (
                                    <ListGroup.Item
                                        action
                                        href={`#todo${index + 1}`}
                                        variant={getVariant(todo.dueDate)}
                                        key={index}
                                    >
                                        {todo.title}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>

                        <div className="third-column">
                            <Tab.Content>
                                {todoItems.map((todo, index) => (
                                    <Tab.Pane eventKey={`#todo${index + 1}`} key={index}> { }
                                        <div className="todo-description">
                                            { }

                                            { }
                                            <p
                                                contentEditable
                                                suppressContentEditableWarning={true}
                                                onBlur={(e) => handleDescriptionChange(index, e.target.innerText)}
                                            >
                                                {todo.description}
                                            </p>

                                            { }
                                            <Form.Control
                                                type="date"
                                                value={todo.dueDate}
                                                onChange={(e) => handleDueDateChange(index, e.target.value)}
                                            />
                                        </div>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </div>
                    </Tab.Container>

                </div>
            </div>
        </div>
    );
};

export default TodoList;
