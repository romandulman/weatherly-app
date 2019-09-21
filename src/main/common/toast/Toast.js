import React, { Component , useState } from "react";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast"
import Button from "react-bootstrap/Button";

const ToastAlert = props => {
    const [show, setShow] = useState(false);

    var something = (()=> {
        var executed = false;

        return ()=> {
            if (!executed) {
                executed = true;
            //    setShow(true)

            }
        };
    })();

    something()

  const fireToast=()=>{
    }

    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">props.title</strong>
                        {/*<small>11 mins ago</small>*/}
                    </Toast.Header>
                    <Toast.Body>props.title</Toast.Body>

                </Toast>
            </Col>
        </Row>
    );
};

export default ToastAlert
