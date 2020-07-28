import styled from 'styled-components';

interface Props {
  open?: boolean;
  background?: string;
}

const navBarBackground =
  'transparent linear-gradient(265deg,#281664 0%,#0F0730 100%) 0% 0% no-repeat padding-box';

const Nav = styled.nav`
  background: ${(props: Props) =>
    props.background ? props.background : navBarBackground};
  padding: 20px;
  display: flex;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
    flex-wrap: wrap;
    a {
      font-family: 'Roboto';
      font-size: 19px;
      text-transform: uppercase;
      color: #fff;
      display: block;
      font-weight: 400;
      padding: 10px;
      text-decoration: none;
      text-align: center;
    }
    li {
      width: 180px;
      height: 50px;
    }
    .drop-down > a:after {
      content: '\\25BC';
      padding-left: 8px;
    }
    li > ul > li {
      width: 150px;
    }
    li.drop-down {
      display: inline-block;
    }
    li > ul {
      opacity: 0;
      position: absolute;
    }
    li:hover > ul {
      opacity: 1;
      display: flex;
      flex-direction: column;
      position: absolute;
      background: rgba(0, 0, 255, 0.6);
      border-radius: 3px;
      transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.5s,
        z-index 0s linear 0.01s;
    }
    li a:hover {
      background: rgba(0, 0, 255, 0.1);
      border-radius: 3px;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
    }
  }
  .brand-container {
    display: flex;
    justify-content: space-between;
    .brand img,
    svg {
      width: 70px;
      font-size: 40px;
      color: #ffff;
    }
    .brand {
      text-decoration: none;
      display: flex;
      align-items: center;
      h1 {
        font-family: 'Roboto';
        color: #fff;
        padding-left: 15px;
        font-size: 30px;
      }
    }
    button {
      background: none;
      display: none;
      border: none;
      svg {
        color: #ffff;
        margin: 5px;
        cursor: pointer;
        font-size: 36px;
      }
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    li.drop-down {
      display: flex;
      flex-direction: column;
    }
    ul li:hover > ul {
      display: flex;
    }
    > ul {
      display: ${props => (props.open ? 'flex' : 'none')};
    }
    ul li {
      width: 100%;
    }
    li:hover > ul {
      opacity: 1;
      flex-direction: column;
    }
    li a:hover {
      background: rgba(0, 0, 255, 0.1);
      border-radius: 3px;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
    }
    .brand-container {
      padding: 20px;
      button {
        display: inline-block;
      }
      .brand {
        text-decoration: none;
        justify-content: center;
        display: flex;
        h1 {
          font-size: 16px;
          padding-left: 10px;
          letter-spacing: 0;
        }
      }
      .brand img {
        width: 15%;
        height: auto;
      }
    }
  }
`;

export { Nav };
