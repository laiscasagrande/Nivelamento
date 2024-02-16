import styled from "styled-components";


export const Navbar= styled.div`
font-family: Montserrat;
padding: 2rem 48rem;
display: flex;
//justify-content: center;
img{
    
    height: 2.5rem;
}

h1{
    padding: 0 2rem;
}

#button1{
    padding: 0 0 0 24.06rem;
}

#button2{
    padding: 0 32rem 0 0;
}
`; 
export const Sessione=styled.div`
padding: 1rem 0 0 85rem;

button{
    background-color: #C7C7C7;
    border-radius: 3px;
    width: 10rem;
    height: 3rem;
    color: #7D7D7D;
    font-size: 18px;

}

button:hover{
        background-color: #F63F60;
        color: white;
    }

`;

export const Direct=styled.div`

`;

export const Container = styled.main`
 padding: 2rem 35rem;


.slide-item{
    padding: 0 2rem;
    width: 39rem;
    height: 25rem;
    object-fit: cover;
    display: flex;
    justify-content: center;
    display: flex;
 justify-content: center;
 font-family: Montserrat;

    
}
`;