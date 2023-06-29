import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import InputMask from "react-input-mask";
import Header from "../../Components/Header/Header";
import "./Form.css"

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const Form = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm({ mode: "onBlur"});
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    const apiResponse = await fetch("http://localhost:5147/customer", {method:"POST", headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)})
    if(apiResponse.status === 200){
      alert("Clinte cadastrado com sucesso!")
    }
    else{
      alert("Um erro ocorreu, por favor tente novamente.");
    }
    navigate("/")
  }
  return (
    <>
      <Header />
      <div className='form-container'>
        <h1>Cadastrar novo cliente</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="input-group">
              <label>Nome</label>
              <input type="text" placeholder="Nome"
                {...register("name", { required: "Nome obrigatório" })}
              />
              <ErrorMessage errors={errors} name="name" as="p" />
            </div>

            <div className="input-group">
              <label>CPF</label>
              <Controller
                name="cpf"
                control={control}
                defaultValue=""
                rules={{
                  required: "CPF obrigatório",
                  pattern:{
                    value:cpfRegex,
                    message:"Formato: XXX.XXX.XXX-XX"
                  }
                }}
                render={({ field }) => (
                  <InputMask
                    mask="999.999.999-99"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}>
                    {(inputProps) => (
                      <input
                        {...inputProps}
                        type="text"
                        placeholder="CPF"
                      />
                    )}
                  </InputMask>
                )}
              />
              <ErrorMessage errors={errors} name="cpf" as="p" />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Email"
                {...register("email", { required: "Email obrigatório" })}
              />
              <ErrorMessage errors={errors} name="email" as="p" />
            </div>

            <div className="input-group">
              <label>Telefone</label>
              <input type="text" placeholder="Telefone"
                {...register("phone")}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Cep</label>
              <input type="text" placeholder="Cep"
                {...register("cep")}
              />
            </div>

            <div className="input-group">
              <label>Rua</label>
              <input type="text" placeholder="Rua"
                {...register("street")}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Número</label>
              <input type="text" placeholder="Número"
                {...register("number")}
              />
            </div>

            <div className="input-group">
              <label>Cidade</label>
              <input type="text" placeholder="Cidade"
                {...register("city")}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Estado</label>
              <input type="text" placeholder="Estado"
                {...register("state")}
              />
            </div>
          </div>

          <input type="submit" value="Cadastrar cliente" className='submit-button' />
        </form>
      </div>
    </>
  )
}

export default Form;