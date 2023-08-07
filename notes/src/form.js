import {useState} from 'react';
import './App.css';
// import Display from './display';

const Form = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const [message, setMessage] = useState('');
  const [descrip, setDes] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log('title ', title);
    console.log('desc ', desc);

    setMessage(` ${title} `)
    setDes(`${desc}`);

    setTitle('');
    setDesc('');
  };

//     console.log({title})
//     let content=document.getElementsByClassName('notes');
//     let h1=document.createElement('h1');
//     let para=document.createElement('p');
//     h1.innerHTML='title';
//     para.innerHTML='desc';
//     content.appendChild(h1);
//     content.appendChild(para);
//     // let button1=document.createElement('button');
//     // button1.innerHTML='delete';
//     // let button2=document.createElement('button');
//     // button2.innerHTML='edit';

// let submit=document.getElementById('submit');
// submit.addEventListener('click',()=>{
//     let buton=document.getElementsByClassName('btn');
//     buton.display.style='block';
// })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>NOTES!</h1>
        <input id="title" name="title" type="text" placeholder="Title" onChange={event => setTitle(event.target.value)} value={title}/>
        <br />
        <input id="description" name="description" type="text" placeholder="description" value={desc} onChange={event => setDesc(event.target.value)} />
        <br />
        <button type="submit" id='submit'>Submit</button>
        <h1>{message}</h1>
        <p>{descrip}</p>
        <button className="btn" >delete</button>
        <button className="btn" >edit</button>
      </form>
    </div>
  );
};

export default Form;



// // import React from 'react';


// // const Display = (props) => {
// //     const{inputvalue,inputdesc} = props;
// //   return (
// //     <div>
// //         <h1>{inputvalue}</h1>
// //         <p>{inputdesc}</p>
// //     </div>
// //   )
// // }

// // export default Display



// // import React from 'react';
// // import {useRef} from 'react';


// // function Form(){
// //     const input=useRef(null);
// //     const inputDes=useRef(null);

// //     const submitBtn = event => {
// //         console.log(input.current.value);
// //         console.log(inputDes.current.value);

// //       };
      
// //     return (
// //         <div className="App">
// //           <label className="title">Title</label>
// //           <input ref={input} type="text" id="title" />
// //           <label className="description">Description</label> 
// //           <input ref={inputDes} type="text" id="description" /> 
// //           <button onClick={submitBtn}>submit</button>
// //         </div>
// //       );
// // }
// // export default Form





