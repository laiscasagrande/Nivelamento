import styled from "styled-components";


export const Header=styled.div`
padding: 2rem;
h1{
    font-family: Montserrat;
    font-size: 30px;
    color: #7D7D7D;
}
`;

export const Upload=styled.form`
display: flex;
justify-content: center;
padding: 10rem 0;
#dropzone{
    border-style:dashed;
    border-color: #008FFB;
}

.picture-input{
    display: none;
   
}

#file{
    width: 25.34rem;
    height: 12.84rem;
}

`;

export const Buttons=styled.div`
display: flex;
justify-content: center;
gap:2rem;

#register{background-color: #C7C7C7;
    border-radius: 3px;
    width: 17.5rem;
    height: 3.5rem;
    color: white;
    font-size: 25.17px;
    cursor: pointer;
}
#cancel{
    background-color: #008FFB;
    border-radius: 3px;
    width: 17.5rem;
    height: 3.5rem;
    color: white;
    font-size: 25.17px;
    cursor: pointer;
}

#cancel:hover{
    background-color: #F63F60;
}
`;
