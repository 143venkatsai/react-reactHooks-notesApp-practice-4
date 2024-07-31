import styled from 'styled-components'

export const NotesItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 10px 15px;
  width: 33%;
  min-height: 80px;
  margin-right: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const NotesTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #334155;
  margin-bottom: 15px;
`
export const NotesDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #334155;
  margin-top: 0px;
`
