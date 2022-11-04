import styled from 'styled-components';


export const TransactionTable = styled.table`
    margin-top: ${p => p.theme.space[5]}px;
    margin-bottom: ${p => p.theme.space[5]}px;


    width:  ${p => (p.theme.space[7] * 6)}px;
    box-shadow: ${p => p.theme.shadows.first};
    border-radius: ${p => p.theme.radii.normal};
    border-collapse: collapse;

    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};

    text-align: center;


    color: ${p => p.theme.colors.gray};

`;

export const TableHead = styled.thead`

`;

export const TableBody = styled.tbody`

`;


export const TableRow = styled.tr`
    height: ${p => p.theme.space[5]}px;
    
    :nth-child(even) {background-color: ${p => p.theme.colors.lightgray};}

`;

export const TableHeadItem = styled.th`

    background-color: ${p => p.theme.colors.lightblue};

    :not(:last-child) {border-right: ${p => p.theme.borders.lightgray};}


    font-size: ${p => p.theme.fontSizes.m};
    text-transform: uppercase;

    color: ${p => p.theme.colors.white};

    width:  ${p => (p.theme.space[7] * 2)}px;

    :first-child {  text-align: left;
                    padding-left: ${p => p.theme.space[6]}px;
                    width:  ${p => ((p.theme.space[7] * 2)-p.theme.space[6])}px;}
`;

export const TableRowItem = styled.td`
    text-transform: capitalize;

    height:  ${p => p.theme.space[4]}px;
    width:  ${p => (p.theme.space[7] * 2)}px;
    :not(:last-child) {border-right: ${p => p.theme.borders.lightgray};}
    :first-child {  text-align: left;
                    padding-left: ${p => p.theme.space[6]}px;
                    width:  ${p => ((p.theme.space[7] * 2)-p.theme.space[6])}px;}
`;

