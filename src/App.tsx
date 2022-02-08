import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

export function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "green" }}>
                Hello World! : UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Edited by Emma Adelmann.
            </p>
            <div>
                <img
                    src="https://i2.pickpik.com/photos/365/322/338/animal-dog-snow-winter-preview.jpg"
                    alt="A picture of my dog Louie"
                />
            </div>
            <div>
                <ul>
                    <li>This</li>
                    <li>Is</li>
                    <li>A</li>
                    <li>List</li>
                </ul>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "300px",
                                    height: "100px",
                                    margin: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "300px",
                                    height: "100px",
                                    margin: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
