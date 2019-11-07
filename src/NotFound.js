import React, {Component} from 'react';
import Header from "./Header";

class NotFound extends Component {
    render() {
        return (
            <>
             <Header/>
                <h1>404</h1>
                <h2>Página não encontrada</h2>
                <img alt="imagem de erro 404" src="https://i.kym-cdn.com/photos/images/newsfeed/000/290/992/0aa.jpg" />
            </>
        );
    }
}

export default NotFound;