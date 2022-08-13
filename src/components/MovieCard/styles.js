import styled from 'styled-components'

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.1);
  }
`

export const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`

export const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: wrap;
  overflow: hidden;
`

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: wrap;
  overflow: hidden;
  text-transform: capitalize;
`
