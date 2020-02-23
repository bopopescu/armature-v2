// Newspaper (Light) icon from: https://fontawesome.com/icons/newspaper?style=light
import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const Newspaper: React.FunctionComponent<SvgIconProps> = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 2048 1408">
      <path d="M1024 384H640v384h384V384zm128 640v128H512v-128h640zm0-768v640H512V256h640zm640 768v128h-512v-128h512zm0-256v128h-512V768h512zm0-256v128h-512V512h512zm0-256v128h-512V256h512zM256 1216V256H128v960q0 26 19 45t45 19t45-19t19-45zm1664 0V128H384v1088q0 33-11 64h1483q26 0 45-19t19-45zM2048 0v1216q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V128h256V0h1792z" />
    </SvgIcon>
  );
};
export default Newspaper;
