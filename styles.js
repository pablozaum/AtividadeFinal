import styled from 'styled-components/native'

export const VieW = styled.View`
    display: flex;
    flex: 1;
    background: #fff;
    
`;

/*
align-items: center;
    justify-content: center;
*/ 


export const Fab = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border-radius: 200px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    justify-content: center;
    align-items: center;
    background-color: blue;
    padding-bottom:5px;
`;

export const TexT = styled.Text`
    font-size: 30px;
    color: #fff;
    font-weight: bold;
`;

