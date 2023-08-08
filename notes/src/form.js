import React, { useState } from 'react';
import './App.css';

const Form = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const Submit = event => {
    event.preventDefault();

    if (title.trim() !== '' && desc.trim() !== '') {
      if (editIndex !== -1) {
        const updatedNotes = [...notes];
        updatedNotes[editIndex] = { title, desc };
        setNotes(updatedNotes);
        setTitle('');
        setDesc('');
        setEditIndex(-1);
      } else {
        const newNote = { title, desc };
        setNotes(prevNotes => [...prevNotes, newNote]);
        setTitle('');
        setDesc('');
      }
    }
    else{
      alert('Enter all fields to submit')
    }
  };

  const Delete = index => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  const Edit = index => {
    const noteToEdit = notes[index];
    setTitle(noteToEdit.title);
    setDesc(noteToEdit.desc);
    setEditIndex(index);
  };

  return (
    <div>
      <form onSubmit={Submit}>
        <h1>NOTES!</h1>
        <input id="title" name="title" type="text" placeholder="Title" onChange={event => setTitle(event.target.value)} value={title} />
        <br />
        <input id="description"  name="description"  type="text" placeholder="Description" value={desc} onChange={event => setDesc(event.target.value)}  />
        <br />
        <button type="submit" id="submit"> {editIndex !== -1 ? 'Update' : 'Submit'} </button>
      </form>

      <div>
        {notes.map((note, index) => (
          <div id="content" key={index}>
            <h2>TITLE:  {note.title}</h2>
            <p>DESCRIPTION:  {note.desc}</p>
            <button onClick={() => Delete(index)} className='btn1'>Delete</button>
            <br/>
            <button onClick={() => Edit(index)} className='btn2'>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
