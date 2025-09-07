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

function Msg(msg:string, size:number, color:string) {
  const s = {
    fontSize: size + "pt",
    color: color,
  }
  return <p className='msg' style={s}>{msg}</p>;
}

function App() {
  return (
    <div className='container'>
      <h1>{title}</h1>
      <h2>{massage}</h2>
      <div>
        { Msg("最初のメッセージ", 36, "red") }
        { Msg("次のメッセージ", 24, "lightgray") }
        { Msg("最後のメッセージ", 12, "black") }
      </div>
    </div>
  );
}
export default App;