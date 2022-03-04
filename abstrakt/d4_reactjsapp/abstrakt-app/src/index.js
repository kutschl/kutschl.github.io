import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header'
import Feed from './components/feed'
import Modal from './components/modal'


class App extends Component {
    render() {
        return (
            <div className={"root-container"}>
                <Feed/>
                <Header/>
                <Modal/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))