import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const Article = styled.article`
    background: #e3350d; 
    height: 100vh;
    width: 600px;
    padding: 0 30px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 5rem;
    }

    p {
        font-size: 2rem;
    }
`;

export const Form = styled.form`
    display: flex;
    margin-top: 20px;
    
    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;

        font-size: 1.8rem;
        color: #902710;
    }


    button{
        width: 150px;
        height: 70px;

        border: 0;
        border-radius: 0px 5px 5px 0;
        font-size: 2rem;
        color: #fff;
        background: #902710;
    }
`; 

export const Footer = styled.footer`
    position: absolute;
    bottom: 30px;

    a {
        img {
            margin-right: 30px;
        }
    }
`;


export const Pokelist = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    a {
        display: block;
        display: flex;
        align-items: center;
        border: 0;
        border-radius: 5px;
        padding: 0 30px;
        background: #F8F9F9;

        height: 80px;
        width: 500px;
        text-decoration: none;


        div {
            strong {
                font-size: 1.5rem;
                color: #e3350d;
            }

            p {
                font-size: 1.2rem;
                color: #902710;
            }
        }

        svg {
            margin-left: auto;
            color: #902710;
        }

        & + a {
            margin-top: 10px;
        }
    }
`;

export const Errors = styled.span`
    font-size: 1.5rem;
    color:#fdcc01;
`;