import { useState } from "react";
function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
    ? notes
    : notes.filter(n => n.important === true)

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    // Create a note
    const note = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toString(),
      important: Math.random() < 0.5
    }

    if (newNote !== '') setNotes(notes.concat(note))
    setNewNote('')
  }

  const handleDelete = (id) => {
    window.confirm(`Do you really want to delete note with id ${id}`)

  }

  return (
    <>
      <h2>Notes</h2>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'show important' : 'show all'}
      </button>
      <ul>
        {notesToShow.map(note =>
          <li key={note.id}> <p>{note.content}</p>
            <p>{note.date}</p>
            <button onClick={() => handleDelete(note.id)}>
              delete
            </button>
          </li>
        )}
      </ul>

      <form>
        <input value={newNote} onChange={handleChange} />
        <button onClick={handleAdd}>add</button>
      </form>
    </>
  );
}

export default App;
