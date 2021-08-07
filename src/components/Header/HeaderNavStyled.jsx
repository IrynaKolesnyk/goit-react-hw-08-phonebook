import styled from 'styled-components';

const HeaderStyled = styled.header`
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(45deg, #0b2349 20%, #0d61bc 75%, #8aa9d6);
  border-image-slice: 1;
  padding: 10px 50px;
  .siteNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navLink {
    font-size: 25px;
    color: #4747e9;
  }
  .activeLink {
    color: tomato;
  }
`;

export default HeaderStyled;
