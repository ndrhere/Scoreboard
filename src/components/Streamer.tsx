import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Streamer } from '../data/streamerBoardData';


const move = keyframes`
from {
    transform: translateY(0);
}
to {
    transform: translateY(100%);
}

`;


const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}

`;


const StreamerContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
padding: 10px;
background: white;
border-bottom: 1px solid #ddd;
animation: ${move} 1s ease, ${fadeIn} 1s ease

`
const AvatarImage = styled.img`
  width: 30px; 
  height: 30px; 
  border-radius: 50%; 
  margin-right: 10px; 
  background-color: #ccc;
  position: relative;
  top: 7px;
  
  
`;

const DisplayName = styled.span`
font-weight: bold;

`
const Score = styled.div`
color: #e91155;
`

const Rank = styled.span`
  display: inline-block; 
  text-align: center;
  font-weight: bold;
  background-color: skyblue;
  font-size: 1em;
  border: 0px solid;
  border-radius: 50%;
  padding: 3px;
  width:19px;
  height:19px;
  

`


interface StreamerProps {
    streamer: Streamer,
    rank: number
};


const StreamerComponent : React.FC<StreamerProps> = ({streamer, rank}) => {
    const rankColors = ['#ff6347', '#ffa500', '#ffd700'];
    return (
<StreamerContainer>
<div><Rank style={{backgroundColor: rankColors[rank-1]}}><span>{rank}</span></Rank> <AvatarImage/> <DisplayName>{streamer.displayName}</DisplayName></div>
<div><Score>{streamer.score}pt</Score></div>
</StreamerContainer>
    )

}


export default StreamerComponent