import * as React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import fast from 'fast.js';

import { color } from 'ui/theme';

import AvatarExample from 'assets/images/avatar-example.jpg';


const Image = styled.img`
  display: block;
  width: 100%;
  height: 225px;
  object-fit: cover;
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 2.5px;
`;

const Username = styled.span`
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
  color: #6a7882;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
`;

const Interest = styled.span`
  font-size: 12px;
  color: ${props => props.isMatching ? color.onPrimary : '#ffffff'};
  background-color: ${props => props.isMatching ? color.primary : '#6a7882'};
  border-radius: 2px;
  padding-top: 4px;
  padding-right: 6px;
  padding-bottom: 4px;
  padding-left: 6px;
  margin-right: 4px;
  
  &:last-child {
    margin-right: 0;
  }
`;

const InterestsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: auto;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 15px;
`;

const FollowButton = styled.a`
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  color: ${color.onPrimary};
  background-color: ${color.primary};
  padding-top: 10px;
  padding-bottom: 10px;
  transition: 0.1s;
  
  &:hover {
    background-color: ${darken(0.1, color.primary)};
  }
`;

const Wrapper = styled.div`
  flex: 0 0 360px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  overflow: hidden;
`;


export const Card = (props) => {
  return (
    <Wrapper className={ props.className }>
      <Image src={ props.avatar || AvatarExample } alt={ props.name }/>
      <Content>
        <Name>{ props.name }</Name>
        <Username>{ props.username }</Username>
        <Description>{ props.description }</Description>
        <InterestsWrapper>
          {
            props.interests && fast.map(props.interests, (interest) => (
              <Interest
                isMatching={ props.chosenInterests && fast.some(props.chosenInterests, (chosenInterest) => chosenInterest === interest) }
                key={ interest }
              >
                { interest }
              </Interest>
            ))
          }
        </InterestsWrapper>
      </Content>
      <FollowButton href={ `http://twitter.com/${props.username}` } target={ '_blank' }>Follow</FollowButton>
    </Wrapper>
  );
};
