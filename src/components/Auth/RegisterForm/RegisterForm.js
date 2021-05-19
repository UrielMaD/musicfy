import React, { useState } from "react";
import { Icon, Form, Input, Button } from "semantic-ui-react";
import firebase from "../../../utils/Firebase";
import "firebase/auth";

import "./RegisterForm.scss";

export default function RegisterForm(props){
    const { setSelectedForm } = props;
    const [formData, setFormData] = useState(defaultValueForm)
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = () => {
        console.log("Formulario enviado")
        console.log(formData)
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
            <h3>Empieza a escuchar con una cuenta de Musicfy gratis</h3>
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
                    placeholder="Contrasena"
                    icon={
                        showPassword ? (
                            <Icon name="eye slash outline" link onClick={handlerShowPassword} />
                        ) : (
                            <Icon name="eye" link onClick={handlerShowPassword} />
                        )
                    }
                    // error={}
                    
                   /> 
                </Form.Field><Form.Field>
                   <Input 
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    icon="user circle outline"
                    // error={}
                    
                   /> 
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