import styled, {css} from 'styled-components';
import { shade } from 'polished';

interface inputProps {
    hasError:boolean;
}

export const Header = styled.header`
    margin-top: 80px;
    font-size: 20px;
    max-width: 500px;
    padding: 0 30px;
    
`;

export const Form = styled.form<inputProps>`
    padding: 0 30px;
    margin-top: 40px;
    max-width: 600px;
    display: flex;

    input {
        flex: 1;
        height: 65px;
        padding: 0 20px;
        border: 2px solid #FFF;
        border-right: 0;
        border-radius: 5px 0px 0px 5px;
        color: #535353;
        font-size: 14px;

        &::placeholder {
            color: #A9A9A9;
        }

        ${(props) => props.hasError && css`
            border-color: #F51E38;
        `}
    }

    button {
        width: 150px;
        font-size: large;
        font-weight: bold;
        border: 0;
        border-radius: 0px 5px 5px 0px;
        background: #09C3EC;
        color: #FFF;
        transition: background-color 0.2s;


        ${(props) => props.hasError ? css`
            background: #F51E38;
            &:hover {
                background: ${shade(0.2, '#F51E38')};
            }
        `: css`
            &:hover {
                background: ${shade(0.2, '#09C3EC')};
            }
        `}
    }
`;

export const PokemonList = styled.div`
    padding: 30px;
    margin-top: 40px;
    max-width: 700px;

    a{
        display: flex;
        align-items: center;
        padding: 0 30px 0 20px;

        background: #FFF;
        border-radius: 5px;
        height: 100px;  
        text-decoration: none;
        transition: 0.2s;

        &+a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        div {
            margin-left: 10px;
            
            strong {
                font-size: 18px;
                color: #09C3EC;
            }

            p {
                margin-top: 4px;
                font-size: 14px;
                color: #9A9A9A;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }

        &+li {
            margin-top: 16px;
        }
        
    }
`;

export const InputError = styled.span`
    display: block;
    padding: 0 30px;
    margin-top: 10px;   
    font-size: 14px;
    color: #F51E38;
`;