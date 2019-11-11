import React, {Component} from 'react';
import Header from "../../Components/Header/Header";
import './NotFound.css';

class NotFound extends Component {
    render() {
        return (
            <>
             <Header/>
                <div className="container not-found">
                    <h1 className="not-found__titulo">404</h1>
                    <h2 className="not-found__subtitulo">Página não encontrada</h2>
                    <img className="not-found__img" alt="imagem de erro 404"
                         src="https://i.kym-cdn.com/photos/images/newsfeed/000/290/992/0aa.jpg"/>
                </div>
            </>
        );
    }
}

export default NotFound;