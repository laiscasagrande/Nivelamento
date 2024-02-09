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
    padding: 0 0 0 27rem;
   
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
    cursor: pointer;

}

button:hover{
        background-color: #F63F60;
        color: white;
    }

`;

export const Tabela=styled.div`

display: flex;
justify-content: center;
margin: 5rem;
font-family: Roboto;

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  
}

th, td{
   width: 14.9rem;
   height: 3.81rem;
    text-align: center;
}

th{
    background-color: #B5B5B5;
}

td{
    color: #7D7D7D;
}

button{
    border: none;
}

`;

export const Upload=styled.div`
padding: 1rem 0 0 85rem;

button{
    background-color: #008FFB;
    border-radius: 3px;
    width: 10rem;
    height: 3rem;
    color: white;
    font-size: 18px;
    cursor: pointer;
}
`;