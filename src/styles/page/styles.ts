import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 48%;
    min-height: 260px;
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    border-radius: 7px;

    @media(max-width: 1200px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
    }
`;