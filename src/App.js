import './App.css'; 
import { useState } from 'react';

function Header(props){
  // console.log("props", props.title);
  return  <header>
  <h1><a href="/" onClick={(event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
</header>
}

function Nav(props){
  const lis = []
  for(const element of props.topics){
    let t = element;
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={event =>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a></li>)
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
const [mode, setMode] = useState('WELCOME');

const [id, setId] = useState(null);
  
  const topics = [
    {id: 1, title:'html', body: 'html is...'},
    {id: 2, title:'css', body: 'css is...'},
    {id: 3, title:'js', body: 'js is...'},
    {id: 4, title:'java', body: 'java is...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>

  }else if(mode === 'READ'){
    let title, body = null;
    for(const element of topics){
      console.log(element.id, id);
      if(element.id === id){
        title = element.title;
        body = element.body;

      }
    }
    content = <Article title={title} body={body}></Article>

  }
  return (

    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
