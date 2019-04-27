import styled from 'styled-components';

const baseClassName = 'font-cursive text-gray-900 block';

const H1 = styled.h1.attrs({
    className: `${baseClassName}`,
})``;
const H2 = styled.h2.attrs({
    className: `${baseClassName}`,
})``;
const H3 = styled.h3.attrs({
    className: `${baseClassName}`,
})``;
const H4 = styled.h4.attrs({
    className: `${baseClassName}`,
})``;
const H5 = styled.h5.attrs({
    className: `${baseClassName}`,
})``;
const H6 = styled.h6.attrs({
    className: `${baseClassName}`,
})``;

export { H1, H2, H3, H4, H5, H6 };
