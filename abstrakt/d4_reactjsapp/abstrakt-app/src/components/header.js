import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import './modal.css';

class Header extends Component {
    render() {
        return(
            <div className={"header-container"}>
                <Logo/>
                <ModalToggle/>
            </div>
        )
    }
}

class Logo extends Component {
    render() {
        return (
            <div className={"logo-container"}>
                <a className={"a-logo"}>
                    <span className={"logo"}>Abstrakt <br/> Studio</span>
                </a>
            </div>
        )
    }
}

class ModalToggle extends Component {
    render() {
        function openModal() {
            let element = document.querySelector(".modal-container").classList
            if (element.contains("modal-container-collapsed")) {
                element.remove("modal-container-collapsed")
                element.add("modal-container-expanded")
            }
            else {
                element.remove("modal-container-expanded")
                element.add("modal-container-collapsed")
            }
        }


        return (
            <div className={"modal-toggle-container"}>
                <a className={"a-modal-toggle"} onClick={openModal}>
                    <div className={"modal-toggle-line"}/>
                    <div className={"modal-toggle-line"}/>
                    <div className={"modal-toggle-line"}/>
                </a>
            </div>
        )
    }
}

export default Header