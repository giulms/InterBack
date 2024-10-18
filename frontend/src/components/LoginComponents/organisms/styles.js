import { motion } from "framer-motion";
import styled from "styled-components";


export const LoginFormsContainer = styled(motion.div)`
    width: 100%;
    max-width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #F4E9E1;
    border-radius: 0 20px 20px 0;
`

export const RegistroFormsContainer = styled(motion.div)`
    width: 100%;
    max-width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #F4E9E1;
    border-radius: 20px 0 0 20px;
`


export const LoginSideContainer = styled(motion.div)`
    width: 100%;
    max-width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #280F3E;
    border-radius: 20px 0 0 20px;

    img{
        width: 75%;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    h1{
        color: #ffffff;
        line-height: 20px;
    }
`

export const RegistroSideContainer = styled(motion.div)`
    width: 100%;
    max-width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #280F3E;
    border-radius: 0 20px 20px 0;

    img{
        width: 75%;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    h1{
        color: #ffffff;
        line-height: 20px;
    }
`

export const EmpresaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40%;
`

export const LoginRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 30%;
    margin: 0 auto;
`

export const RegistroRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 30%;
    margin: 0 auto;
`

export const LFConteudo = styled.div`
    width: 100%;
    max-width: 70%;
    margin: 0 auto;

    display: block;

    p{
        text-align: center;
        font-weight: 700;
        font-size: 12px;
    }
`

export const TextContainer = styled.div`
    margin-bottom: 5vh;

    h1{
        text-align: center;
        line-height: 5px;
        font-size: 36px;
    }

    h3{
        text-align: center;
        line-height: 5px;
        font-size: 14px;
    }
`

