import React from 'react'
import './App.css';
import {GlobalStyle} from './styles.ts'
import Leaderboard from './components/LeaderBoard.tsx'



const App: React.FC = () => {
return(
  <>
  <GlobalStyle/>
  <Leaderboard/>
  </>
)
}
export default App;
