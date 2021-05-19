import React, { useState } from "react";
import { Icon, Form, Input, Button } from "semantic-ui-react";
import firebase from "../../../utils/Firebase";
import "firebase/auth";

import "./RegisterForm.scss";

export default function RegisterForm(props){
    const { setSelectedForm } = props;
    const [formData, setFormData] = useState(null)

    const onSubmit = () => {
        console.log("Formulario enviado")
    };

    return (
        <div className="register-form">
            <h3>Empieza a escuchar con una cuenta de Musicfy gratis</h3>
            <Form onSubmit={onSubmit}>
                <Form.Field>
                   <Input 
                    type="text"
                    name="email"
                    placeholder="Correo electronico"
                    icon="mail outline"
                    // onChange=()
                    // error={}

                   /> 
                </Form.Field>
                <Form.Field>
                   <Input 
                    type="password"
                    name="password"
                    placeholder="Contrasena"
                    icon="eye"
                    // onChange=()
                    // error={}
                    
                   /> 
                </Form.Field><Form.Field>
                   <Input 
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    icon="user circle outline"
                    // onChange=()
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