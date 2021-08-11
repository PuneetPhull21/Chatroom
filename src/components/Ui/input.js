import React from "react";
import { Form } from "react-bootstrap";
import Style  from "./input.module.css";

export default function Input(props) {
  return (
    <div>
      <Form className={`${Style.header}`}>
        <Form.Group className={`mb-3 ${Style.input}`  } >
          <Form.Label className={Style.label}>{props.label}</Form.Label>
          <Form.Control required type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
        </Form.Group>
      </Form>
    </div>
  );
}
