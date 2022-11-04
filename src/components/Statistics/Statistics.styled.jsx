import styled from 'styled-components';


export const StatWrapper = styled.section`
    background-color:  ${p => p.theme.colors.white};

    margin-top: ${p => p.theme.space[5]}px;
    margin-bottom: ${p => p.theme.space[5]}px;
    width:  ${p => p.theme.space[8]}px;
`;


export const StatTitle = styled.p`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.l};
    text-transform: uppercase;

    color: ${p => p.theme.colors.black};

    text-align: center;

    padding: ${p => p.theme.space[4]}px;
`;


export const StatList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${p => p.theme.space[2]}px;

    width: ${p => ((p.theme.space[8])/4)}px;
    height: ${p => p.theme.space[6]}px;

    background-color: ${function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`}
};

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