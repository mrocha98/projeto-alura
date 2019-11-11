import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Home.css';
import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import Form from '../../Components/Formulario/Formulario';
import PopUp from '../../utils/PopUp';
import ApiService from '../../utils/ApiService';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            autores: [],
        };
    }

    removeAutor = id => {

        const {autores} = this.state;
        const autoresAtualizado = autores.filter(autor => autor.id !== id);

        ApiService.RemoveAutor(id)
            .then(res => {
                if (res.message === 'deleted') {
                    this.setState({autores: [...autoresAtualizado]});
                    PopUp.exibeMensagem("error", "Autor removido com sucesso");
                }
            }).catch(
            PopUp.exibeMensagem(err => "error", "Erro de comunicação com o servidor ao tentar remover autor")
        )
    };

    escutadorDeSubmit = autor => {

        ApiService.CriaAutor(JSON.stringify(autor))
            .then(res => {
                if (res.message === 'success') {
                    PopUp.exibeMensagem("success", "Autor adicionado com sucesso");
                    this.setState({autores: [...this.state.autores, autor]});
                }
            })
            .catch(err => PopUp.exibeMensagem(err => "error", "Erro de comunicação com o servidor ao tentar adicionar autor"));
    };


    componentDidMount() {
        ApiService.ListaAutores()
            .then(res => {
                if (res.message === 'success')
                    this.setState({autores: [...this.state.autores, ...res.data]})
            })
            .catch(err => PopUp.exibeMensagem(err => "error", "Erro de comunicação com o servidor ao tentar listar autores"));
    }

    render() {

        return (
            <Fragment>
                <Header/>
                <div className="container mb-10">
                    <h1>Casa do Código</h1>
                    <Tabela autores={this.state.autores} removeAutor={this.removeAutor}/>
                    <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
                </div>
            </Fragment>
        );
    }

}

export default Home;