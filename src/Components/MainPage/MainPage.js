import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleChangeEmail = (event) => {
    setEmailInput(event.target.value);
  };

  const handleChangePassword = (event) => setPasswordInput(event.target.value);

  const handleChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleChange2 = (event) => {
    if (event.target.value >= 0) setAgeInput(event.target.value);
  };

  const handleChange3 = (event) => {
    setMaritalStatus(event.target.value);
  };

  const cleanInputValues = (event) => {
    event.preventDefault();

    setEmailInput("");
    setPasswordInput("");
    setNameInput("");
    setAgeInput("");
    setMaritalStatus("");

    // console.log(event.target[4][0].focus());

    // if (nameInput.length && ageInput.length && maritalStatus.length) {
    //   console.log(nameInput, ageInput, maritalStatus);
    // } else {
    //   alert("Preencha os campos abaixo");
    // }
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={cleanInputValues}>
        <label>
          E-mail:
          <Input
            onChange={handleChangeEmail}
            type={"email"}
            value={emailInput}
          />
        </label>

        <label>
          Senha:
          <Input
            onChange={handleChangePassword}
            type={"password"}
            value={passwordInput}
          />
        </label>

        <label>
          Nome:
          <Input onChange={handleChange} value={nameInput} />
        </label>
        <label>
          Idade:
          <Input type={"number"} onChange={handleChange2} value={ageInput} />
        </label>

        <select
          defaultValue="solterio"
          onChange={handleChange3}
          placeholder={"oiii"}
        >
          <option value="">Selecione</option>
          <option value="Solteiro">Solteiro (a)</option>
          <option value="Casado">Casado (a)</option>
          <option value="Viuvo">Viuvo (a)</option>
          <option value="Divorciado">Divorciado (a)</option>
        </select>
        <button
        // disabled={
        //   nameInput.length && ageInput.length && maritalStatus.length
        //     ? false
        //     : true
        // }
        >
          Enviar dados
        </button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
