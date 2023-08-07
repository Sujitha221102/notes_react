import React from 'react';
import './App.css';

const Display = ({message,descrip}) => {
  return (
                <div>
                    <h1>{message}</h1>
                    <p>{descrip}</p>
                </div>
            )
        }


export default Display;

// import {useState} from 'react';

// const Form = () => {
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');

//   const [message, setMessage] = useState('');
//   const [descrip, setDes] = useState('');

//   const handleSubmit = event => {
//     console.log('handleSubmit');
//     event.preventDefault();
//     console.log('title ', title);
//     console.log('desc ', desc);

//     setMessage(` ${title} `)
//     setDes(`${desc}`);

//     setTitle('');
//     setDesc('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input id="title" name="title" type="text" placeholder="Title" onChange={event => setTitle(event.target.value)} value={title}/>
//         <br />
//         <input id="description" name="description" type="text" placeholder="description" value={desc} onChange={event => setDesc(event.target.value)} />
//         <br />
//         <button type="submit">Submit</button>
//         <h2>{message}</h2>
//         <p>{descrip}</p>
//       </form>
//     </div>
//   );
// };

// export default Form;



// import React from 'react';


// const Display = (props) => {
//     const{inputvalue,inputdesc} = props;
//   return (
//     <div>
//         <h1>{inputvalue}</h1>
//         <p>{inputdesc}</p>
//     </div>
//   )
// }

// export default Display

