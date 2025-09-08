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

// チャプター３-2 App.tsx
// import React from 'react';
// import './App.css';

// const title = "React page.";
// const massage = "メッセージを表示します";

// // MsgPropsインターフェイスの定義
// interface MsgProps {
//   msg: string;
//   size: number;
//   color: string;
// }

// function Msg(props: MsgProps) {
//   const s = {
//     fontSize: props.size + "pt",
//     color: props.color,
//   }
//   return <p className='msg' style={s}>{props.msg}</p>;
// }

// function App() {
//   return (
//     <div className='container'>
//       <h1>{title}</h1>
//       <h2>{massage}</h2>
//       <div>
//       <Msg msg="最初のメッセージ" size={20} color="orange" />
//       <Msg msg="次のメッセージ" size={20} color="lightgreen" />
//       <Msg msg="最後のメッセージ" size={20} color="skyblue" />
//       </div>
//     </div>
//   );
// }
// export default App;

// チャプター３-3 App.tsx
// import React from 'react';
// import './App.css';

// const title = "React page.";
// const massage = "メッセージを表示します";
// const content = "これがtrueの場合に表示されるメッセージです。";

// const flg = true; //trueの時にメッセージを表示

// function App() {
//   return (
//     <div className='container'>
//       <h1>{title}</h1>
//       <p>{massage}</p>
//       {flg && 
//       <div className='msg'>
//       <p>{content}</p>
//       </div>
//       }
//     </div>
//   );
// }

// export default App;

// チャプター３-3 配列 App.tsx
// import React from 'react';
// import './App.css';

// const title = "React page.";
// const massage = "メッセージを表示します";

// const data = [
//   <li className='msg'>One</li>,
//   <li className='msg'>Two</li>,
//   <li className='msg'>Three</li>,
// ];

// function App() {
//   return (
//     <div className='container'>
//       <h1>{title}</h1>
//       <p>{massage}</p>
//       <ul>
//         {data}
//       </ul>
//     </div>
//   );
// }

// export default App;

//チャプター３-３ map App.tsx
import React from 'react';
import './App.css';

const title = "React page.";
const massage = "メッセージを表示します";

const data = [
  {name:'taro', mail:'taro@yamada',age:12},
  {name:'hanako', mail:'hanako@flower',age:15},
  {name:'sachiko', mail:'sachiko@happy',age:18},
  {name:'jiro', mail:'jiro@change',age:20},
  {name:'saburo', mail:'saburo@success',age:22},
];

function getData(n:number) {
  const flg = n % 2 === 0;
  return (
    <p className='msg'
      style={flg ? {backgroundColor:'gray',color:'white'} : {}}>
      [{n+1}] {data[n].name}({data[n].mail}) &lt;{data[n].age}&gt;
    </p>
  );
}

function App() {
  return (
    <div className='container'>
      <h1>{title}</h1>
      <h2>{massage}</h2>
      {getData(0)}
      {getData(1)}
      {getData(2)}
      {getData(3)}
      {getData(4)}
    </div>
  );
}

export default App;