import styled from 'styled-components/native';
import StatusBarHeight from '../StatusBarHeight';

const H = 70-StatusBarHeight;

const MenuNameCotaner = styled.View`
  background-color: #5c5a61;
  height: 33px;
  width: 55px;
  marginTop: ${H}px;
  marginLeft: 20px;
`;

export default MenuNameCotaner;