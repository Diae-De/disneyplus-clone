import React,{useEffect} from 'react'
import styled from 'styled-components'
import {selectUserName, selectUserPhoto,setUserLogin,setSignOut} from '../features/user/userSlice'
import {useSelector,useDispatch} from 'react-redux'
import {auth,provider} from '../firebase'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Header() {

    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))

            }
        })
    },[])

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push("/")
        })
    }

    const signOut = ()=>{
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut());
            history.push("/login");
        })
    }

  return (
    <Nav>
        <Link to="/">
        <Logo src="/images/logo.svg"/>
        </Link>
        {
            !userName ?
            <LoginContainer>
                <Login onClick={signIn}>Login</Login>
            </LoginContainer>
            :
            <>
            <NavMenu>
                <Link to="/">
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                </Link>
                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImgContainer>
                <UserImg onClick={signOut} src={userPhoto}/>
            </UserImgContainer>
            </>
        }
        
        
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
`

const Logo = styled.img`
    width:80px;
    cursor:pointer;
`

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    justify-content:center;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        text-decoration:none;
        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
            cursor:pointer;
            position:relative;
            color:white;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                border-radius:5px;
                opacity:0;
                transform-origin:left center;
                transform:scaleX(0);
                transition:all 250ms cubic-bezier(0.25, 0.46,0.45, 0.94) 0s;
            }
        }

        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }

    @media screen and (max-width:700px){
        display:none
    }

`

const UserImg = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    cursor:pointer;
`

const Login = styled.div`
    border:1px solid white;
    padding:8px 16px;
    border-radius:4px;
    cursor:pointer;
    letter-spacing:1.5px;
    text-transform:uppercase;
    background-color:rgb(0,0,0,0.6);
    transition:all 250ms cubic-bezier(0.25, 0.46,0.45, 0.94) 0s;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }
`

const LoginContainer = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
`

const UserImgContainer = styled.div`
    @media screen and (max-width:700px){
        flex:1;
        display:flex;
        justify-content:flex-end;
    }
`