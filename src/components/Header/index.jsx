import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from '/Users/damien/Desktop/shiny-agency/src/assets/dark-logo.png'
import { StyledLink } from '../../utils/style/atoms'

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`

const HomeLogo = styled.img`
  height: 70px;
`

function Header() {
  return (
    <NavBar>
      <Link to="/">
        <HomeLogo src={DarkLogo} />
      </Link>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/freelances">Profils</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Faire le test
      </StyledLink>
    </NavBar>
  )
}

export default Header
