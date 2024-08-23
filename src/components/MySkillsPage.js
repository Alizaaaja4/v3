import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 85vw; 
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
margin: auto;

/* Responsiveness */
@media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 2rem 0;
    width: 95vw; 
    margin-top: 4rem;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 1.2rem;
width: 28vw; 
height: 65vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

/* Responsiveness */
@media (max-width: 768px) {
    width: 55vw; 
    height: auto;
    margin-bottom: 3rem;
}

&:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.8em + 0.8vw); /* Ukuran font lebih kecil */

${Main}:hover & {
    & > * {
        fill: ${props => props.theme.body};
    }
}

& > *:first-child {
    margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.5em + 0.8vw); /* Ukuran font lebih kecil */
padding: 0.5rem 0;

${Main}:hover & {
    color: ${props => props.theme.body};
}

strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul, p {
    margin-left: 2rem;
}

/* Responsiveness */
@media (max-width: 768px) {
    font-size: calc(0.6em + 0.8vw); /* Ukuran font lebih kecil di layar kecil */
    margin-left: 1rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                        <Design width={30} height={30} /> Frontend Developer
                    </Title>
                    <Description>
                        As a Frontend Developer, I focus on creating engaging and responsive user interfaces. 
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            Html, Css, Js, React.js, Vue.js, Tailwind, Next.js, etc.
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            VScode, Github, Figma, etc.
                        </p>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={30} height={30} /> Backend Developer
                    </Title>
                    <Description>
                        As a Backend Developer, I design and implement server-side logic and database interactions. 
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>
                            ERD, Laravel, Integration, Deployment, Microservices etc.
                        </p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>
                            Docker, Kubernetes, MySQL, PostgreSQL, MongoDB, Apache Kafka, dll.
                        </p>
                    </Description>
                </Main>
                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage
