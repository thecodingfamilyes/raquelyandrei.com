import React from 'react';
import { H2 } from './styled/Titles';
import styled from 'styled-components';

const ItemContainer = styled.div.attrs({
    className: 'bg-white',
})`
    margin-top: 5rem;
`;

function TimelineItem({ children, title, icon, rightSide, className, time }) {
    let itemHeaderTop = <div className="header-top bg-gray-100 p-3 flex justify-end relative">
        <div className="absolute left-0 ml-16">
            {icon}
        </div>
        <div className="justify-end pr-8">
            <p className="font-extra text-gray-muted text-right text-2xl mt-2">{time}</p>
            <H2 className="text-center text-blue-900 text-3xl self-center">
                {title}
            </H2>
        </div>
    </div>;

    if(rightSide) {
        itemHeaderTop = <div className="header-top bg-gray-100 p-3 flex justify-start relative">
            <div className="justify-start pl-8">
                <p className="font-extra text-gray-muted text-2xl mt-2">{time}</p>
                <H2 className="text-center text-blue-900 text-3xl self-center">
                    {title}
                </H2>
            </div>
            <div className="absolute right-0 mr-16">
                {icon}
            </div>
        </div>;
    }

    return (
        <div className={`relative ${className || ''}`}>
            <ItemContainer>
                <div className="item-header">
                    {itemHeaderTop}
                    <div className="header-bottom bg-red-700 h-4"></div>
                </div>

                <div className="py-5 px-10">{children}</div>
            </ItemContainer>
        </div>
    );
}

export default TimelineItem;