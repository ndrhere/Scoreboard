import React, { useEffect, useState } from 'react'
import {streamerBoardData, Streamer} from '../data/streamerBoardData.ts'
import styled from 'styled-components'
import StreamerComponent from './Streamer.tsx'

const LeaderboardContainer = styled.div`
margin-top: 20px;
width: 800px;
margin: auto;
padding: 30px;
background:#7ec1c5;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0,0,0,0.1);


`




const Leaderboard: React.FC = () => {

const [streamers, setStreamers] = useState<Streamer[]>(streamerBoardData)

useEffect(() => {
const interval = setInterval(() => {
     setStreamers((prevStreamers) => (
        prevStreamers.map((streamer) => (
       {...streamer, score: streamer.score + Math.floor(Math.random() * 1000)}
        ))
     ))
}, 1000)
return () => clearInterval(interval)
}, [])


const sortedStreamersScore = [...streamers].sort((a,b) => b.score - a.score)
console.log(sortedStreamersScore)





return(

<LeaderboardContainer>

    {sortedStreamersScore.map((streamer, index) => (
   <StreamerComponent key={streamer.userID} streamer={streamer} rank={index+1} />
    ))}

</LeaderboardContainer>



)



}



export default Leaderboard