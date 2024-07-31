import styled from 'styled-components'

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 200px;
  @media screen and (max-width: 767px) {
    padding: 10px 10px;
  }
`

export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 30px;
  font-weight: 500;
  color: #4c63b6;
  text-align: center;
`

export const NotesCardContainer = styled.form`
  width: 100%;
  box-shadow: 4px 4px 16px 0px #aab8c8;
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  border-radius: 4px;
`

export const NotesInput = styled.input`
  font-family: 'Roboto';
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: 20px;
`

export const NotesTextarea = styled.textarea`
  font-family: 'Roboto';
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  height: 50px;
  line-height: 20px;
  @media screen and (max-width: 767px) {
    height: 100px;
  }
`

export const NotesAddButton = styled.button`
  align-self: flex-end;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  background-color: #4c63b6;
  border: none;
  border-radius: 2px;
  padding: 8px 15px;
  margin-top: 10px;
  margin-right: 20px;
  outline: none;
  cursor: pointer;
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`

export const EmptyImage = styled.img`
  height: 100px;
  width: 100px;
`

export const EmptyHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  color: #475569;
`

export const EmptyDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #475569;
`
export const NotesList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`
