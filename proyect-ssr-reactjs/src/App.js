import React from "react";
import { Form, Title, Content, Camp, Button } from './Styles.js';
import { ThemeProvider } from '@emotion/react';
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Form className="form">

        <Title> Ejemplo de formulario reactivo </Title>

        <Content className="form-content">

          <Camp className="form-content-camp">
            <label>Nombre Completo</label>
            <input type="text" name="fullName" placeholder="Eduardo Cardenas" />
          </Camp>

          <Camp className="form-content-camp">
            <label>Correo Electronico</label>
            <input type="email" name="email" placeholder="Ejemplo@correo.com" />
          </Camp>

          <Camp className="form-content-camp">
            <label>Mensaje</label>
            <textarea name="message" placeholder="Necesito más información" ></textarea>
          </Camp>

          <Button>Enviar</Button>
        </Content>
      </Form >
    </ThemeProvider>
  );
};

export default App;