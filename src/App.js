import './App.css';
import { useState } from 'react';

function Nav(props) {
  const list = [];
  for (let i = 0; i < props.contents.length; i++) {
    let item = props.contents[i];
    list.push(
      <li key={item.id}><a id={item.id} href={'/read' + list.id} onClick={(event) => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{item.title}</a></li>
    );
  }
  return (
    <nav>
      <ul>
        {list}
      </ul>
    </nav>
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
/* state = 상태.
  state는 내부에서 상황에 따라 값을 변경 할때 사용
*/
function App() {
  // const _mode = useState("Welcome"); // state의 초기값 은 Welcome 으로 지정
  // console.log(_mode); 
  // const mode = _mode[0]; mode의 값을 통해서 상태값을 읽을수 있다. 상태는 state. 
  // const setMode = _mode[1]; 1번째 원소인 setMode를 통해서 mode의 값을 바꿀수 있다. 
  const [mode, setMode] = useState("Welcome"); // 위 3줄을 줄여서 표현한게 현재 줄 코드
  // const [값이 바뀌는 변수, 값을 바꿀때,사용하는 함수명] = 현재초기값은("welcome")으로 둘거야; 
  const [id, setId] = useState(null);
  const list = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'react', body: 'react is ...' },
    { id: 4, title: 'js', body: 'js is ...' },
  ];
  let content = null;
  let title, body = null;
  if (mode === "Welcome") {
    content = <Article title="Welcome" body="Hello,Web" />
  } else if (mode === "Read") {
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].id, id);
      if (list[i].id === id) {
        title = list[i].title;
        body = list[i].body;
      }
    }
    content = <Article title={title} body={body} />
  }

  /*
    mode의 값이 Read로 바뀌면 앱 컴포넌트는 다시 App()함수를 실행시킨다.
    바뀐값은 Read 이므로 컨텐츠는 else if 문을 타게됨.
  */
  return (
    <div>
      <Header title="WEb" onChangeMode={() => {
        setMode("Welcome");
      }} ></Header>
      <Nav contents={list} onChangeMode={(_id) => {
        setMode("Read");
        setId(_id);
      }} />
      {content}
    </div>
  );
}

export default App;