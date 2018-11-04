import * as React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
`;


export const Container = (props) => {
  return (
    <Wrapper className={ props.className }>{ props.children }</Wrapper>
  );
};
