import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

class Modal extends Component {
    render() {
        return (
            <div className={"modal-container modal-container-collapsed"}>
                <div className={"modal"}>
                    <Info/>
                    <Navigation/>
                </div>
            </div>
        )
    }
}

class Info extends Component{
    render() {
        const xxx = {
            1: 'Webdesign and Development by Lukas Kutsch',
            2: 'Inter Typeface (https://rsms.me/inter/)'
        }

        return (
            <div className={"info-container"}>
                <InfoAbout/>
                <InfoStudio/>
                <InfoSkills/>
                <InfoClients/>
            </div>
        )
    }
}

class InfoAbout extends Component {
    render() {
        const content = {
            h: 'About',
            p1: 'Abstrakt Studio',
            p2: 'Creative Kollektiv by therawpro, yngzy & zizou.'
        }
        return (
            <div className={'info-box'}>
                <h3 className={'m-h3'}>
                    {content.h}
                </h3>
                <p className={'m-p'}>
                    {content.p1}
                </p>
                <p className={'m-p'}>
                    {content.p2}
                </p>
            </div>
        )
    }
}

class InfoStudio extends Component {
    render() {
        const content = {
            h: 'Studio',
            p1: 'Mustermannstraße 1',
            p2: '12345 Stadt',
            p3: 'Germany',
            p4: '0157 00000 0000',
            p5: 'abstrakt.studio@gmail.com'
        }
        return (
            <div className={'info-box'}>
                <h3 className={'m-h3'}>
                    {content.h}
                </h3>
                <p className={'m-p'}>
                    {content.p1}
                </p>
                <p className={'m-p'}>
                    {content.p2}
                </p>
                <p className={'m-p'}>
                    {content.p3}
                </p>
                <p className={'m-p'}>
                    <a href={"tel:" + content.p4} className={"m-a"}>{content.p4}</a>
                </p>
                <p className={'m-p'}>
                    <a href={"mailto:" + content.p5} className={"m-a"}>{content.p5}</a>
                </p>
            </div>
        )
    }
}

class InfoSkills extends Component {
    render() {
        const content = {
            h: 'Skills',
            t: [
                ['Art Direction', 'Graphic Design'],
                ['3D Scans', 'Animations'],
                ['Video Editing', 'Filming']
            ]
        }

        return (
            <div className={'info-box'}>
                <h3 className={'m-h3'}>
                    {content.h}
                </h3>
                <table className={'m-table'}>
                    <tr className={'m-tr'}>
                        <td className={'m-td'}>
                            {content.t[0][0]}
                        </td>
                        <td className={'m-td'}>
                            {content.t[0][1]}
                        </td>
                    </tr>
                    <tr className={'m-tr'}>
                        <td className={'m-td'}>
                            {content.t[1][0]}
                        </td>
                        <td className={'m-td'}>
                            {content.t[1][1]}
                        </td>
                    </tr>
                    <tr className={'m-tr'}>
                        <td className={'m-td'}>
                            {content.t[2][0]}
                        </td>
                        <td className={'m-td'}>
                            {content.t[2][1]}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

class InfoClients extends Component {
    render() {
        const content = {
            h: 'Clients',
            p1: '12345',
        }
        return (
            <div className={'info-box'}>
                <h3 className={'m-h3'}>
                    {content.h}
                </h3>
                <p className={'m-p'}>
                    {content.p1}
                </p>
            </div>
        )
    }
}

class Navigation extends Component {
    render() {
        return (
            <div className={"nav-container"}>

            </div>
        )
    }
}

export default Modal