import styled from 'styled-components';

export const FriendsListItems = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${p => p.theme.space[3]}px;

    margin-top: ${p => p.theme.space[5]}px;
    margin-bottom: ${p => p.theme.space[5]}px;
    // width:  ${p => p.theme.space[8]}px;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: ${p => p.theme.space[5]}px;

    background-color: ${p => p.theme.colors.white};


    box-shadow: ${p => p.theme.shadows.first};
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[2]}px;

    width:  ${p => p.theme.space[8]}px;
`;

export const FriendStatusOn = styled.span`
    height:  ${p => p.theme.space[4]}px;
    width:  ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.round};

    background-color: ${p => p.theme.colors.green};
`;

export const FriendStatusOff = styled.span`

    height:  ${p => p.theme.space[4]}px;
    width:  ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.round};

    background-color: ${p => p.theme.colors.red};
`;

export const FriendAvatar = styled.img`
    width: ${p => p.theme.space[6]}px;
    height: ${p => p.theme.space[6]}px;
    border-radius: ${p => p.theme.radii.normal};

    border: ${p => p.theme.borders.normal}; 
`;



export const FriendName = styled.p`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};

    color: ${p => p.theme.colors.black};

    text-align: center;
`;
