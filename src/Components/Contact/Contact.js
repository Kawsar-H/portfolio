import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css'
import emailjs from 'emailjs-com';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm("service_g03aajg", 'template_rh73kri', e.target, 'user_OJ6mJmQWn4d8WVB1R1qEe')
          .then((result) => {
              window.alert("Email sent to kawsarhossainkaiyes100@gmail.com")
          }, (error) => {
              window.alert(error.text)
          });
          e.target.reset()
      }
    return (
        <div className='contact-container'>
            <Form className='form-container' onSubmit={sendEmail}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" name="name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" name="email" />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="type your message here" name="message" />
                </Form.Group>
                <Button style={{background:"#e31b6d",border:"none", outline:"none" }}
                className='btn custom-button' type="submit">
                    Submit
                </Button>
            </Form>

            
        </div>
    );
};

export default Contact;