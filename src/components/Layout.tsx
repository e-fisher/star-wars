import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import logo from '../assets/images/logo.png'
import starfieldBg from '../assets/images/starfield-bg.png'
import jediWoff from '../assets/fonts/StarJedi.woff'
import jediWoff2 from '../assets/fonts/StarJedi.woff2'

const theme = {
  yellow: '#dba90d',
  bg: '#000',
  jediFont: 'Star Jedi',
  textFont: 'Libre Franklin'
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Star Jedi';
    src: url(${jediWoff}) format('woff2'),
        url({${jediWoff2}}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  body {
    background: #000 url(${starfieldBg});
  }
`

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
`

const Logo = styled.img`
  max-width: 100%;
  margin-bottom: 50px;
`

const Content = styled.div`
  font-size: 18px;
  * {
    color: ${props => props.theme.yellow};
    font-family: ${props => props.theme.textFont};
  }
`

const Layout = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Logo src={logo} alt="logo" />
      <Content>
        {children}
      </Content>
    </Container>
  </ThemeProvider>
)

export default Layout
