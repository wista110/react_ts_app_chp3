// デフォルトのApp.tsx
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// チャプター３ App.tsx
import React from 'react';
import './App.css';

const title = "React page.";
const massage = "メッセージを表示します";

// MsgPropsインターフェイスの定義
interface MsgProps {
  msg: string;
  size: number;
  color: string;
}

function Msg(props: MsgProps) {
  const s = {
    fontSize: props.size + "pt",
    color: props.color,
  }
  return <p className='msg' style={s}>{props.msg}</p>;
}

function App() {
  return (
    <div className='container'>
      <h1>{title}</h1>
      <h2>{massage}</h2>
      <div>
      <Msg msg="最初のメッセージ" size={20} color="orange" />
      <Msg msg="次のメッセージ" size={20} color="lightgreen" />
      <Msg msg="最後のメッセージ" size={20} color="skyblue" />
      </div>
    </div>
  );
}
export default App;