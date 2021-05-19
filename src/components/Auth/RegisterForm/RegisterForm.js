import React, { useState } from "react";
import { Icon, Form, Input, Button } from "semantic-ui-react";
import { validateEmail } from "../../../utils/Validations"
import firebase from "../../../utils/Firebase";
import "firebase/auth";

import "./RegisterForm.scss";

export default function RegisterForm(props){
    const { setSelectedForm } = props;
    const [formData, setFormData] = useState(defaultValueForm)
    const [showPassword, setShowPassword] = useState(false)
    const [formError, setFormError] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = () => {
        setFormError({});
        let errors = {};
        let formOk = true;

        if(!validateEmail(formData.email)){
            errors.email = true;
            formOk = false;
        }
        if(formData.password.length < 6){
            errors.password = true;
            formOk = false;
        }
        if(!formData.username){
            errors.username = true;
            formOk = false;
        }
        setFormError(errors);
        if(formOk) {
            console.log("Formulario valido");
        }
    };

    const handlerShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="register-form">
            <h3 style={{ color: "white" }}>Empieza a escuchar con una cuenta de Musicfy gratis</h3>
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
                       <span className="error-text">
                           Por favor, introduce un correo valido.
                       </span>
                   )}
                </Form.Field>
                <Form.Field>
                   <Input 
                    type={showPassword ? "text": "password"}
                    name="password"
                    placeholder="Contrasena"
                    icon={
                        showPassword ? (
                            <Icon name="eye slash outline" link onClick={handlerShowPassword} />
                        ) : (
                            <Icon name="eye" link onClick={handlerShowPassword} />
                        )
                    }
                    error={formError.password}
                   />
                   {formError.password && (
                       <span className="error-text">
                           Elige una contrasena mayor a 6 caracteres.
                       </span>
                   )}
                </Form.Field><Form.Field>
                   <Input 
                    type="text"
                    name="username"
                    placeholder="Nombre"
                    icon="user circle outline"
                    error={formError.username}
                    
                   /> 
                   {formError.username && (
                       <span className="error-text">
                           Introduce un nombre.
                       </span>
                   )}
                </Form.Field>
                <Button type="submit">
                    Continuar
                </Button>
            </Form>
            <div className="register-form__options">
                    <p onClick={() => setSelectedForm(null)}>Volver</p>
                    <p>Ya tienes Musicfy? <span onClick={() => setSelectedForm("login")}>Iniciar sesion</span>
                    </p>
                    
            </div>
        </div>
    )
};

function defaultValueForm() {
    return {
        email: "",
        password: "",
        username: ""
    }
};