import styled from 'styled-components';

const Avatar = styled.div.attrs({
    className: 'p-1 bg-white rounded-full border border-gray-500',
})`
    height: 125px;
`;

const AvatarImg = styled.img.attrs({
    className: 'p-px bg-white rounded-full border border-gray-500',
})`
    max-height: 3rem;
    max-width: 3rem;
`;

export { Avatar, AvatarImg };
