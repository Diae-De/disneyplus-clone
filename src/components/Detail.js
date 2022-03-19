import React,{ useEffect,useState} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import db from '../firebase'

function Detail() {

    const {id} = useParams();
    const [movie,setMovie] = useState({});
    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists) {
                    setMovie(doc.data());
            }
        })
    },[])

  return (
    <Container>
        <Background>
            <img src={movie.backgroundImg}/> 
        </Background>
        <ImageTitle>
            <img src={movie.titleImg}/>
        </ImageTitle>
        <Controls>
            <PlayBtn>
                <img src="/images/play-icon-black.png" alt=""/>
                <span>PLAY</span>
            </PlayBtn>
            <TrailerBtn>
                <img src="/images/play-icon-white.png" alt=""/>
                <span>Trailer</span>
            </TrailerBtn>
            <AddBtn>
                <img src="/images/watchlist-icon.svg" alt=""/>
            </AddBtn>
            <GroupWtachBtn>
                <img src="/images/group-icon.png" alt=""/>
            </GroupWtachBtn>
        </Controls>
        <SubTitle>
            {movie.subTitle}
        </SubTitle>
        <Description>
            {movie.description}
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
`

const Background = styled.div`
    position:fixed;
    top:0; 
    left:0; 
    bottom:0; 
    right:0;
    z-index:-1;
    opacity:0.8;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

const ImageTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px auto;
height: 30vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;
img {
  max-width: 600px;
  min-width: 200px;
  width: 35vw;
}
`

const Controls = styled.div`
    display:flex;
    align-items:center;

    @media screen and (max-width:700px){
        flex-wrap:wrap;
    
    }
`

const PlayBtn = styled.button`
    border-radius:4px;
    font-size:15px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249,249,249);
    border:none;
    padding:0 24px;
    cursor:pointer;
    margin-right:22px;
    letter-spacing:1.8px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
        background:#F3F3F3 ;
    }
`

const TrailerBtn = styled(PlayBtn)`
    background:rgba(0,0,0,0.3);
    border:1px solid white;
    color:white;
    text-transform:uppercase;

    &:hover{
        background:#141414;
    }
`

const AddBtn = styled.button`
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    margin-right:16px;

    img{
        width:30px;
    }

    @media screen and (max-width:700px){
        margin-top:12px;
    }
`

const GroupWtachBtn = styled(AddBtn)`
    background-color:rgba(0,0,0);
`

const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`

const Description = styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
    color:rgb(249,249,249);
    max-width:750px;
`