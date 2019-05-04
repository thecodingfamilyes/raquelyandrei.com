import React from 'react';
import { H2 } from './styled/Titles';
import { Avatar } from './styled/Avatar';
import styled from 'styled-components';

const SmallAvatar = styled(Avatar)`
    width: 125px;
    margin-top: -5rem;
`;

const BigAvatar = styled(Avatar)`
    width: 250px;
    height: 135px;
    margin-top: -5rem;
`;

const PersonContainer = styled.div.attrs({
    className: 'bg-white m-5 p-5 shadow-lg',
})`
    margin-top: 5rem;
`;


function PersonCard({ children, title, photo, className, isBig = false }) {

    let avatar = <SmallAvatar className="text-center m-auto">
        {photo}
    </SmallAvatar>;

    if (isBig) {
        avatar = <BigAvatar className="text-center m-auto">
            {photo}
        </BigAvatar>;
    }

    return (
        <div className={`relative ${className || ''}`}>
            <PersonContainer>
                {avatar} 

                <H2 className="text-center text-red-700 text-3xl mb-3">
                    {title}
                </H2>

                <div className="py-5 px-10">{children}</div>
            </PersonContainer>
        </div>
    );
}

export default PersonCard;
