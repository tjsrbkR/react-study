import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Nav(props) {
    const gnb = [];
    for (let i = 0; i < props.val.length; i++) {
        let list = props.val[i];
        gnb.push(
            <li key={list.id}>
                <a id={list.id} href={'/read/ ' + list.id} onClick={(event) => {
                    event.preventDefault();
                    props.onChangeMode(event.target.id);
                }}>
                    {list.title}
                </a>
            </li >
        );
    }
    return (
        <nav>
            <ul>
                {gnb}
            </ul>
        </nav>
    );
}
function Article(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                {props.body}
            </p>
        </div>

    );
}
function Header(props) {
    return (
        <h1 onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
        }}><a href='#'>{props.title}</a></h1>
    );
}

function Practice() {
    const [id, setId] = useState("default");
    let contents = null;
    let title, body = null;
    const topics = [
        { id: 1, title: "html", body: "html is ... " },
        { id: 2, title: "css", body: "css is..." },
        { id: 3, title: "js", body: "js is..." },
    ];
    if (contents === "default") {
        contents = <Article title="default" body="default title" />
    }
    else if (contents === "read") {
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
    }
    return (
        <div>
            <Header title="WEb" onChangeMode={() => {
                alert("클릭");
                contents = "default";
                setId("default");
            }} ></Header>
            <Nav val={topics} onChangeMode={(id) => {
                alert(id);
                contents = "read";
                setId("read");
            }} />
        </div>
    );
}

export default Practice;