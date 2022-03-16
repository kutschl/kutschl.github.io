import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import '../modal/modal.css';
import LogoSVG from './logo.svg'

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
                <div className={"logo-box"}>
                    <a className={"a-logo"}>


    {/*
                        <span className={"logo"}>Abstrakt <br/> Studio</span>
    */}




                        <img className={"logo"} src={LogoSVG} alt={"Logo"}/>


                    </a>
                </div>
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
                <div className={"modal-toggle-box"}>
                    <a className={"a-modal-toggle"} onClick={openModal}>
                        <div className={"modal-toggle-line"}/>
                        <div className={"modal-toggle-line"}/>
                        <div className={"modal-toggle-line"}/>
                    </a>
                </div>
            </div>
        )
    }
}

export default Header