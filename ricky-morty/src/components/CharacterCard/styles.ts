import styled from 'styled-components';

export const Card = styled.div `
width: 600px;
height: 220px;
margin: 13.5px;
overflow:hidden;
displax:flex;
justify-content:center;
align-items: center;
color:white;
box-shadow: 4px 4px 10px rgba(0,0,0,1);
border-radius:8px;
`

export const ImageWrapper = styled.div`
displax: flex;
flex: 2 1 0&;
`

export const Image = styled.img `
width:100%;
height: 100%;
object-fit:cover;
object-position: center-center;
`

export const Title = styled.h1`
  margin: 8px;
`