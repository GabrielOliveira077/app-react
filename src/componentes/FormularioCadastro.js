import React, { useEffect, useState } from "react";

const FormularioCadastro = (props) => {

    //captura de dados
    const camposIniciaisDeValores = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: ''
    }

    let [values, setValues] = useState(camposIniciaisDeValores)

    useEffect( ()=> {
        if(props.idAtual == ''){
            setValues({
                ...camposIniciaisDeValores
            })
        } else{
            setValues({
                ...props.dadosAlunos[props.idAtual]
            })
        }
    },[props.idAtual, props.dadosAlunos])


    const manipuladorInputChange = e => {
        let{ name, value} = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const manipuladorFormEnvio = e => {
        e.preventDefault()
        props.addEedit(values)
    }

    return (
        <fom autoComplete="off" onSubmite={manipuladorFormEnvio}>
        <div className="form-group input-group col-md-4">
                <div className="input-grou-prepend">       
                        <div className="input-group-text">

                            <i className="fas fa-user"></i>

                        </div> 

                </div>

                <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompleto} onChange={manipuladorInputChange}></input>

        </div>
            <div className="row">
                <div className="form-group input-group col-md-4">
                    <div className="input-grou-prepend">       
                            <div className="input-group-text">

                                <i className="fas fa-mobile-alt"></i>

                            </div> 

                </div>

                    <input className="form-control" placeholder="telefone" name="telefone" value={values.telefone} onChange={manipuladorInputChange}></input>

            </div>
             <div className="form-group input-group col-md-10">
                    <div className="input-grou-prepend">       
                            <div className="input-group-text">

                                <i className="fas fa-envelope"></i>

                            </div> 

                    </div>

                    <input className="form-control" placeholder="e-mail" name="email" value={values.email} onChange={manipuladorInputChange} ></input>
            </div>
        </div>
            <div className="form-group">
            <textarea className="form-control" placeholder="endereço" name="endereco" value={values.endereco} onChange={manipuladorInputChange} ></textarea>

            </div>

            <div className="form-group">    
                <input type="submit" value={ props.idAtual == ''? 'Salvar' : 'Atualizar'} className="btn btn-primary btn-block">
                </input>
            </div>
        </fom>
    )
}

export default FormularioCadastro