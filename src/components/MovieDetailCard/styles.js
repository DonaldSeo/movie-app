import styled from 'styled-components'
import { Spinner } from '../../pages/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
`

export const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CoverImage = styled.img`
  object-fit: contain;
  height: 350px;
`
export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`
export const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: wrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`
export const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`
export const Close = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: black;
  background-color: grey;
  width: 10px;
  height: 12px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.5;
`

export const LoadingSpinner = styled(Spinner)``