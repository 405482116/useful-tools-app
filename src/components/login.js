import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Login = () => {
    return (
        <Form action="api/v2/login" method="POST">
            <FormGroup>
                <Label for="userName">User name</Label>
                <Input type="text" name="userName" id="userName" placeholder="user name placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="password placeholder" />
            </FormGroup>
            <Label for="login">Login</Label>
            <Input name="login" id="login" type="submit" />
        </Form>
    )
}
export default Login;