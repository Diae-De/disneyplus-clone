import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg"/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    display:flex;
    align-items:top;
    justify-content:center;
    position:relative;
    height:calc(100vh - 70px);
    &:before{
        position:absolute;
        top:0;
        bottom:0;
        content:"";
        left:0;
        right:0;
        background-image:url("/images/login-background.jpg");
        z-index:-1;
        opacity:0.7;
        background-position:top;
        background-size: cover;
        background-repeat: no-repeat;
    }
`

const CTA = styled.div`
    max-width:650px;
    padding:80px 40px;
    width:80%;
    display:flex;
    flex-direction: column;
    margin-top:100px;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    widht:100%;
    background-color: #0063e5;
    font-weight: bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius:4px;
    text-align: center;
    cursor:pointer;
    font-size:18px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;

    &:hover{
        background:#0483ee;
    }
`

const Description = styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
    margin-bottom:12px;
`

const CTALogoTwo = styled.img`

`