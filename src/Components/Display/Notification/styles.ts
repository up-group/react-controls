import styled, {css} from 'styled-components';
import Box from '../../Containers/Box';
import { Status } from './types';
import { Props } from './';
import colorMap from '../../../Common/theming/colorMap';

const colors = (status: Status) => css`
  position:relative;
  background-color: ${colorMap[`${status}Bg`] || colorMap.offwhite};
  p {
    color: ${colorMap[`${status}Fg`] || colorMap.black3};
  }
`;

export default styled(Box)`
  ${(props:Props) => colors(props.status)}
  border-radius:4px;
  svg {
    margin:10px;
    display:inline-block;
  }
`;
