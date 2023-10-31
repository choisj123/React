function MyButton(props){
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onclick: () => setIsClicked(true)},
    isClicked ? 'Clicked!' : 'Click here!'
  )
}
const domContainer = document.querySelector('#root');
ReactDom.render(React.createElement(MyButton), domContainer);



// JSX를 사용한 코드
class Hello extends React.Component{
  render(){
    return <div>Hello {this.props.toWhat}</div>
  }
}
ReactDom.render(
  <Hello toWhat="world"/>,
  document.getElementById('root')
)

// JSX를 사용하지 않은 코드
class Hello extends React.Component{
  render(){
    return React.createElement('div', null, 'Hello ${this.props.toWhat}');
  }
}
ReactDom.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
)

// JSX를 사용한 코드 
const element1 = (
  <h1 className="greeting">
    Hello, world!
  </h1>
)

// JSX를 사용하지 않은 코드
const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)

