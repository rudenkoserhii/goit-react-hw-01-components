import styled from 'styled-components';


export const StatSection = styled.section`
    background-color:  ${p => p.theme.colors.white};

    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
    width:  ${p => p.theme.space[8]}px;

    border-bottom: ${p => p.theme.borders.normal}; 




`;



export const ProfileTitle = styled.p`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};

    color: ${p => p.theme.colors.black};

    text-align: center;

    margin-bottom: ${p => p.theme.space[3]}px;

    text-align: center;
`;



export const StatList = styled.ul`
    display: flex;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${p => p.theme.space[2]}px;

    width: ${p => ((p.theme.space[8]-2)/3)}px;
    height: ${p => p.theme.space[6]}px;

    background-color: ${p => p.theme.colors.lightblue};

`;

export const StatName = styled.span`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xs};

    color: ${p => p.theme.colors.gray};

`;

export const StatQty = styled.span`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};

    color: ${p => p.theme.colors.black};

`;