import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './feed.css';

class Feed extends Component {
    render() {
        const elements = []
        for (let i = 0; i<10; i++) {
            elements.push("TEST")
        }
        const divs = []
        for (const[index, value] of elements.entries()) {
            divs.push(<div key={index} className={"post-container"}>{value}</div>)
        }
        return (
            <div className={"feed-container"}>
                {divs}
            </div>
        )
    }
}



export default Feed