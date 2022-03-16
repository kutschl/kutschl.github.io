import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
import * as data from'./modaldata.json'

class Modal extends Component {
    render() {
        return (
            <div className={"modal-container modal-container-collapsed"}>
                <div className={"modal"}>
                    <Navigation/>
                    <Info/>
                </div>
            </div>
        )
    }
}

class Navigation extends Component {
    render() {
        return (
            <div className={"nav-container"}>
                <div className={"nav-box"}>
                    <span className={"nav-link-box"}><a href={""} className={"nav-link"}>Team</a></span>
                </div>
                <div className={"nav-box"}>
                    <span className={"nav-link-box"}><a href={""} className={"nav-link"}>Projekte</a></span>
                </div>
                <div className={"nav-box"}>
                    <span className={"nav-link-box"}><a href={""} className={"nav-link"}>Impressum</a></span>
                </div>
            </div>
        )
    }
}

class Info extends Component{
    render() {

        return (
            <div className={"info-container"}>
                <InfoAbout/>
                <InfoSkills/>
                <InfoClients/>
            </div>
        )
    }
}

class InfoAbout extends Component {
    render() {
        const Input = require('./modaldata.json').About

        const Links = []

        for(let i of Input.content.team) {
            Links.push(<span className={"info-link-box"}><a target={"_blank"} className={'info-link'} href={i.link}>{i.id}</a></span>);
        }

        const Input_Email = <span className={"info-link-box, info-email"}><a target={"_blank"} className={'info-link'} href={'mailto:' + Input.content.email}>{Input.content.email}</a></span>

        return (
            <div className={'info-box'}>
                <h3 className={'info-h3'}>
                    {Input.name}
                </h3>
                <p className={'info-p'}>
                    {Input.content.text[0]}
                </p>
                <p className={'info-p'}>
                    {Input.content.text[1]}
                    {Links}
                </p>
                <p className={'info-p'}>
                    {Input_Email}
                </p>
            </div>
        )
    }
}

class InfoSkills extends Component {
    render() {
        const Input = require('./modaldata.json').Skills

        const Input_Table = []

        for(let i of Input.content["skill-list"]) {
            const Input_Row = []
            for(let j of i) {
                Input_Row.push(<td className={'info-td'}>{j}</td>)
            }
            Input_Table.push(<tr className={'info-tr'}>{Input_Row}</tr>)
        }

        return (
            <div className={'info-box'}>
                <h3 className={'info-h3'}>
                    {Input.name}
                </h3>
                <table className={'info-table'}>
                    {Input_Table}
                </table>
            </div>
        )
    }
}

class InfoClients extends Component {
    render() {
        const Input = require('./modaldata.json').Clients

        const Input_Clients = []

        for(let i of Input.content["client-list"]) {
            Input_Clients.push(<span className={"info-list"}>{i}</span>)
        }

        return (
            <div className={'info-box'}>
                <h3 className={'info-h3'}>
                    {Input.name}
                </h3>
                <p className={'info-p'}>
                    {Input_Clients}
                </p>
            </div>
        )
    }
}


export default Modal