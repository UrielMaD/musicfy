import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { toast } from "react-toastify";
import { validateEmail } from "../../../utils/Validations";
import firebase from "../../../utils/Firebase";
import "firebase/auth";

import "./LoginForm.scss";

export default function LoginForm(props){
    const { setSelectedForm } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(defaultValueForm())

    const onSubmit = () => {
        console.log("Login..");
        console.log(formData);
    }

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="login-form">
            <h1>Musica para todos</h1>
            <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Field>
                    <Input 
                        type="text"
                        name="email"
                        placeholder="Correo electronico"
                        icon="mail outline"
                        // error={}
                    />
                </Form.Field>
                <Form.Field>
                    <Input 
                        type={showPassword ? "text": "password"}
                        name="password"
                        placeholder="Contraseña"
                        // error={}
                        icon={
                            showPassword ? (
                                <Icon
                                    name="eye slash outline"
                                    link
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            ) : (
                                <Icon
                                    name="eye"
                                    link
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            )
                        }
                    />
                </Form.Field>
                <Button type="submit">
                    Iniciar Sesion
                </Button>
            </Form>

            <div className="login-form__options">
                <p onClick={() => setSelectedForm(null)}>Volver</p>
                <p>
                    No tienes cuenta?{" "}
                    <span onClick={() => setSelectedForm("register")}>Registrate</span>
                </p>
            </div>
        </div>
    )
};

function defaultValueForm () {
    return {
        email: "",
        password: ""
    }
}