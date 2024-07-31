import {NotesItem, NotesTitle, NotesDescription} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {title, notes} = notesDetails

  return (
    <NotesItem>
      <NotesTitle>{title}</NotesTitle>
      <NotesDescription>{notes}</NotesDescription>
    </NotesItem>
  )
}

export default NoteItem
