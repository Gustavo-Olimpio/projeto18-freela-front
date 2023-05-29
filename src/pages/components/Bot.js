import styled from "styled-components"

export default function Bot() {
    return (
        <>
        <Footer>
            <div>
            <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="facebook"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="instagram"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png" alt="Whatsapp"/>
            </div>
            <div>
                <p>Info</p>
                <p>Support</p>
                <p>Marketing</p>
            </div>
            <div>
                <p>Terms of use</p>
                <p>Privacy police</p>
            </div>
            <div>
                <p>@ 2023 Droven</p>
            </div>
        </Footer>
        </>
    )
}

const Footer = styled.div`
background-color:black;
color:white;
height:160px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
padding:20px;
div{
    display:flex;
    p{
        margin-right:5px;
        margin-left:5px;
        cursor: pointer;
        :hover{
            text-decoration:underline;
        }
    }
}
img{
    width:30px;
    height:30px;
    margin-left:5px;
    margin-right:5px;
    cursor: pointer;
    :hover{
        transform:scale(1.3)
    }
}
`