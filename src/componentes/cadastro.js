import React, {useState, useEffect} from "react";
import FormularioCadastro from "./FormularioCadastro";
import fireDb from '../firebase'


const Cadastro = () => {

    let [dadosAlunos, setDadosAlunos] = useState({})

    let [idAtual, setIdAtual] = useState('')

    useEffect( () => {
        fireDb.child('alunos').on('value', dbPhoto =>{
            if(dbPhoto.val() != null) {
                setDadosAlunos({
                    ...dbPhoto.val()
                })
            }
        })
    }, [])


    const addEedit = obj => {

        if(idAtual == '') {

            console.log(obj)
             fireDb.child('alunos').push(
                obj, 
                error => {
                    if(error){
                        console.log(error)
                    } else { 
                        setIdAtual('')
                    }
                 }
             ) 
        }   else {
                fireDb.child('alunos/${idAtual}').set(
                    obj,
                    err => {
                        if(err){
                            console.log(err)
                        }
                    }
                )
        }
    }

    return (
        <div>
            
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Cadastro de Alunos</h1>
                    <p className="lead">This is a modified jumbotron </p>
                </div>
            </div>

            <div className = "row">

                <div className = "col-md-5">
                    <FormularioCadastro {...({addEedit, idAtual, dadosAlunos})}></FormularioCadastro>

                </div>
                    <div className="col-md-7">
                        <table className="table table-borderless table-stripped">
                            <thead className="thead-ligth">
                                <tr>
                                    <td> Nome completo</td>
                                    <td> Telefone</td>
                                    <td> E-mail</td>
                                    <td> Endereço</td>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    Object.keys(dadosAlunos).map(id => {
                                        return 
                                        <td key={id}>
                                            <td>{dadosAlunos[id].nomeCompleto}</td>
                                            <td>{dadosAlunos[id].telefone}</td>
                                            <td>{dadosAlunos[id].email}</td>
                                            <td>
                                                <a className="btn btn-primary" onClick={ () => setIdAtual(id)}>
                                                    <i className="fas fa-pencil-alt">

                                                    </i>
                                                </a>
                                                <a className="btn btn-danger">
                                                    <i className="far fa-trash-alt">

                                                    </i>
                                                </a>
                                            </td>
                                        </td>

                                    })                            }
                            </tbody>

                        </table>
                        
                    </div>
                </div>
        </div>
        

    )
}

export default Cadastro