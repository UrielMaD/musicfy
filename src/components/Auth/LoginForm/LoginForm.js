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
    const [formData, setFormData] = useState(defaultValueForm());
    const [formError, setFormError] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userActive, setUserActive] = useState(false);
    const [user, serUser] = useState(null);

    const onSubmit = () => {
        setFormError({});
        let errors = {};
        let formOk = {};

        if(!validateEmail(formData.email)) {
            errors.email = true;
            formOk = false;
        }
        if(formData.password.length < 6) {
            errors.password = true;
            formOk = false;
        }
        setFormError(errors);

        if(formOk) {
            console.log("Login correcto")
        }
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
                        error={formError.email}
                    />
                    {formError.email && (
                        <span style={{ color: 'white' }}>
                            Por favor, introduce un correo electrónico válido
                        </span>
                    )}
                </Form.Field>
                <Form.Field>
                    <Input 
                        type={showPassword ? "text": "password"}
                        name="password"
                        placeholder="Contraseña"
                        error={formError.password}
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
                    {formError.password && (
                        <span style={{ color: 'white' }}>
                            Por favor, elige una Contraseña superior a 5 caracteres.
                        </span>
                    )}
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