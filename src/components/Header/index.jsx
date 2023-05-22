import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from '/Users/damien/Desktop/react/shiny-agency/src/assets/dark-logo.png'
import { StyledLink } from '../../utils/style/atoms'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={DarkLogo} />
      </Link>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/freelances">Profils</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Faire le test
      </StyledLink>
    </NavContainer>
  )
}

export default Header
