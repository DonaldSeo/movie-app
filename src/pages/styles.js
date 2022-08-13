import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  background-color: #800000;
  color: white;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`

export const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`

export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  width: 100%;
  margin-left: 15px;
`

export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: center;
`

export const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`

export const MovieNotFoundImage = styled.img`
  margin: 150px;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;