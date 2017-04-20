import styled, {css} from '../../../Common/theming/themedComponents';
import {IntentType} from '../../../Common/theming/types';
import Box from '../../Containers/Box';

import { Props } from './';
import colorMap from '../../../Common/theming/colorMap';

const colors = (status: IntentType) => css`
  position:relative;
  background-color: ${colorMap[`${status}Dark`] || colorMap.offwhite};
  p {
    color: ${colorMap[`${status}Light`] || colorMap.black3};
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
