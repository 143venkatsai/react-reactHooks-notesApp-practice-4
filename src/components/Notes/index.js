import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesContainer,
  NotesHeading,
  NotesCardContainer,
  NotesInput,
  NotesTextarea,
  NotesAddButton,
  NotesList,
  EmptyContainer,
  EmptyImage,
  EmptyHeading,
  EmptyDescription,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)

  const onChangeNotes = event => setNotes(event.target.value)

  const onAddButton = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      notes,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNotes])
    setTitle('')
    setNotes('')
  }

  return (
    <NotesContainer>
      <NotesHeading>Notes</NotesHeading>
      <NotesCardContainer onSubmit={onAddButton}>
        <NotesInput
          type="text"
          value={title}
          placeholder="Title"
          onChange={onChangeTitle}
        />
        <NotesTextarea
          type="input"
          rows="8"
          value={notes}
          placeholder="Take a Note..."
          onChange={onChangeNotes}
        />
        <NotesAddButton type="submit">Add</NotesAddButton>
      </NotesCardContainer>
      {notesList.length > 0 ? (
        <NotesList>
          {notesList.map(eachNotes => (
            <NoteItem notesDetails={eachNotes} key={eachNotes.id} />
          ))}
        </NotesList>
      ) : (
        <EmptyContainer>
          <EmptyImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyDescription>Notes you add will appear here</EmptyDescription>
        </EmptyContainer>
      )}
    </NotesContainer>
  )
}

export default Notes
