import styled from 'styled-components';

export const Container = styled.main`
    margin: 2rem;
    height: 100%;
    width: 100%;
    background: #d9d9d9;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    #content {
        width: 100%;
        height: 80%;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10;
        overflow: auto;

    }

    #input-data {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;  
        width: 100%;
        height: 20%;
        border-radius: 15px;
        padding: 1.5rem;
    }

    #loading {
        height: 12rem;
        width: 25rem;
        background: #d9d9d9;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const LoadingButton = styled.button`
    font-size: 1rem;
    background: #3385ff;
    border: 0;
    border-radius: 2rem;
    padding: 0 2rem;
    height: 2.8rem;
    width: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
`