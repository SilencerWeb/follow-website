import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import Select from 'react-select';

import { Container } from 'ui/atoms';
import { Card } from 'ui/molecules';
import { GlobalStyles, color } from 'ui/theme';


const IntroText = styled.p`
  font-size: 40px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  
  &:first-child {
    margin-top: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const IntroInterest = styled.span`
  font-size: 20px;
  color: ${color.onTertiary};
  background-color: ${color.tertiary};
  border: 1px solid ${color.onTertiary};
  border-radius: 6px;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
  margin-right: 10px;
  transition: 0.1s;
  cursor: pointer;
  
  &:last-child {
    margin-right: 0;
  }
  
  &:hover {
    color: ${color.primary};
    border-color: ${color.primary};
  }
  
  ${props => css`
    
    ${props.isChosen && css`
      color: ${color.onPrimary};
      background-color: ${color.primary};
      border-color: ${color.primary};
      
      &:hover {
        color: ${color.onPrimary};
        border-color: ${color.primary};
      }
    `}
  `}
`;

const IntroInterestsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Intro = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


class App extends React.Component {
  state = {
    cards: [
      {
        name: 'Corey Gwin',
        username: '@corey_gwin',
        description: 'I solve problems and make stuff. 📱👨🏻‍💻☕️ Helping you write with @blurtdotapp.',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Toni Codina',
        username: '@tcodinat',
        description: 'Multidisciplinary designer & entrepreneur. Running @noonstudios + bootstrapping my own products ⚒️',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Ethan 👨‍🎤',
        username: '@Booligoosh',
        description: '🤘🔥🚀 An Indie Maker creating @KanbanMail & @CodeTheWebBlog 🧙‍♂️',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Armin Ulrich',
        username: '@arminulrich',
        description: '@madewithvuejs 🚀 + @shipstreams 🚢 + @joblist_app 👩‍💻👨‍💻 + http://makerwidget.com️️',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Lady Desiree 🎶',
        username: '@ladydesiree',
        description: 'http://twitch.tv/ladydesiree  Gamer nerd and musician http://instagram.com/ladydesiree00',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Kitty A',
        username: '@kitty_actually',
        description: 'Musician. Feminist. Video game enthusiast. Sarcastic. You can find me singing on Twitch!',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Anna Filou',
        username: '@that__anna',
        description: 'Web designer / tech geek - Athens, Greece 🇬🇷, Vienna, Austria 🇦🇹 - I draw, design and like to take photos of places and food 🙃',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Anda',
        username: '@AndaPetras',
        description: 'Making things on the internet. Focused on remote working tools & helping women in tech.',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'dima',
        username: '@FZTSH',
        description: 'All life transitions in one stream of thoughts and ideas.',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Simon Sinek',
        username: '@simonsinek',
        description: 'To run & jump & laugh & cry & love & hope & imagine...to experience as much as I can for one purpose: to inspire. New book, The Infinite Game, coming this year',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Wojtek',
        username: '@pugson',
        description: 'Making internet 👽 shenanigans with @thinkoco',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'circe @ nanowrimo',
        username: '@circemilIer',
        description: 'writer, book nerd, professional rambler (they/them) @eIbabyface is my partner in crime',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Ryan Hoover',
        username: '@rrhoover',
        description: 'Founder of @ProductHunt, @WeekendFund investor. Real likes, no gimmicks. ✌️😸',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Andrey  Azimov',
        username: '@AndreyAzimov',
        description: 'Indie maker. 💵 I have 1 year to profit: http://MacBookAlarm.com  http://ProgressBarOSX.com  http://MakeOSXGreatAgain.com  http://Sheet2Site.com  http://DarkModeList.com',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'VenusWorldOfficial',
        username: '@VenusWorldHQ',
        description: '- S I N G E R - S O N G W R I T E R - S T R E A M E R - T W I T C H 🎶 P A R T N E R',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Pieter Levels',
        username: '@levelsio',
        description: 'Serial maker🏝http://nomadlist.com  + 👩‍💻http://remoteok.io  + 🗺http://hoodmaps.com  + 📕http://makebook.io  + 📈http://open-startup.com  + 🌴http://makevillage.com  + 🚧http://wip.chat/@levelsio  + 📣http://t.me/levelsio',
        interests: ['design', 'entrepreneurship'],
      },
    ],
    filterCards: [
      {
        name: 'Corey Gwin',
        username: '@corey_gwin',
        description: 'I solve problems and make stuff. 📱👨🏻‍💻☕️ Helping you write with @blurtdotapp.',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Toni Codina',
        username: '@tcodinat',
        description: 'Multidisciplinary designer & entrepreneur. Running @noonstudios + bootstrapping my own products ⚒️',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Ethan 👨‍🎤',
        username: '@Booligoosh',
        description: '🤘🔥🚀 An Indie Maker creating @KanbanMail & @CodeTheWebBlog 🧙‍♂️',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Armin Ulrich',
        username: '@arminulrich',
        description: '@madewithvuejs 🚀 + @shipstreams 🚢 + @joblist_app 👩‍💻👨‍💻 + http://makerwidget.com️️',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Lady Desiree 🎶',
        username: '@ladydesiree',
        description: 'http://twitch.tv/ladydesiree  Gamer nerd and musician http://instagram.com/ladydesiree00',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Kitty A',
        username: '@kitty_actually',
        description: 'Musician. Feminist. Video game enthusiast. Sarcastic. You can find me singing on Twitch!',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Anna Filou',
        username: '@that__anna',
        description: 'Web designer / tech geek - Athens, Greece 🇬🇷, Vienna, Austria 🇦🇹 - I draw, design and like to take photos of places and food 🙃',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Anda',
        username: '@AndaPetras',
        description: 'Making things on the internet. Focused on remote working tools & helping women in tech.',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'dima',
        username: '@FZTSH',
        description: 'All life transitions in one stream of thoughts and ideas.',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Simon Sinek',
        username: '@simonsinek',
        description: 'To run & jump & laugh & cry & love & hope & imagine...to experience as much as I can for one purpose: to inspire. New book, The Infinite Game, coming this year',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Wojtek',
        username: '@pugson',
        description: 'Making internet 👽 shenanigans with @thinkoco',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'circe @ nanowrimo',
        username: '@circemilIer',
        description: 'writer, book nerd, professional rambler (they/them) @eIbabyface is my partner in crime',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Ryan Hoover',
        username: '@rrhoover',
        description: 'Founder of @ProductHunt, @WeekendFund investor. Real likes, no gimmicks. ✌️😸',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Andrey  Azimov',
        username: '@AndreyAzimov',
        description: 'Indie maker. 💵 I have 1 year to profit: http://MacBookAlarm.com  http://ProgressBarOSX.com  http://MakeOSXGreatAgain.com  http://Sheet2Site.com  http://DarkModeList.com',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'VenusWorldOfficial',
        username: '@VenusWorldHQ',
        description: '- S I N G E R - S O N G W R I T E R - S T R E A M E R - T W I T C H 🎶 P A R T N E R',
        interests: ['design', 'entrepreneurship'],
      },
      {
        name: 'Pieter Levels',
        username: '@levelsio',
        description: 'Serial maker🏝http://nomadlist.com  + 👩‍💻http://remoteok.io  + 🗺http://hoodmaps.com  + 📕http://makebook.io  + 📈http://open-startup.com  + 🌴http://makevillage.com  + 🚧http://wip.chat/@levelsio  + 📣http://t.me/levelsio',
        interests: ['design', 'entrepreneurship'],
      },
    ],
    availableInterests: ['design', 'entrepreneurship'],
    chosenInterests: [],
  };

  filterCards = () => {
    this.setState((prevState) => ({
      ...prevState,
      filterCards: prevState.cards.filter((card) => {
        return card.interests.some((cardInterest) => {
          if (!prevState.chosenInterests.length) return true;

          return prevState.chosenInterests.some((chosenInterest) => chosenInterest === cardInterest);
        });
      }),
    }));
  };

  handleSelectChange = (selectedOptions) => {
    this.setState({ chosenInterests: selectedOptions.map((selectedOption) => selectedOption.value) }, this.filterCards);
  };

  handleIntroInterest = (interest) => {
    this.setState((prevState) => {
      let newChosenInterests = prevState.chosenInterests;

      const isChosen = prevState.chosenInterests && prevState.chosenInterests.includes(interest);

      if (isChosen) {
        const interestIndex = prevState.chosenInterests.findIndex((chosenInterest) => chosenInterest === interest);

        newChosenInterests.splice(interestIndex, 1);
      } else {
        newChosenInterests.push(interest);
      }

      return {
        ...prevState,
        chosenInterests: newChosenInterests,
      };
    }, this.filterCards);
  };

  render = () => {

    return (
      <React.Fragment>
        <GlobalStyles/>

        <Container>
          <Intro>
            <IntroText>Type your interests</IntroText>
            <Select
              isMulti={ true }
              value={
                this.state.chosenInterests && this.state.chosenInterests.map((chosenInterest) => ({
                  value: chosenInterest,
                  label: chosenInterest,
                }))
              }
              options={
                this.state.availableInterests && this.state.availableInterests.map((availableInterest) => ({
                  value: availableInterest,
                  label: availableInterest,
                }))
              }
              onChange={ this.handleSelectChange }
            />
            <IntroText>Or choose them here</IntroText>
            <IntroInterestsWrapper>
              {
                this.state.availableInterests && this.state.availableInterests.map((availableInterest) => (
                  <IntroInterest
                    isChosen={ this.state.chosenInterests && this.state.chosenInterests.includes(availableInterest) }
                    onClick={ () => this.handleIntroInterest(availableInterest) }
                    key={ availableInterest }
                  >
                    { availableInterest }
                  </IntroInterest>
                ))
              }
            </IntroInterestsWrapper>
          </Intro>

          <CardList>
            {
              this.state.filterCards && this.state.filterCards.map((card) => (
                <Card
                  avatar={ card.avatar }
                  name={ card.name }
                  username={ card.username }
                  description={ card.description }
                  interests={ card.interests }
                  chosenInterests={ this.state.chosenInterests }
                  key={ card.username }
                />
              ))
            }
          </CardList>
        </Container>
      </React.Fragment>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));
