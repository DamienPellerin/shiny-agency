import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'

const StyledLink = styledComponents(Link)`          
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
`

function Header() {
  return (
    <nav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/survey">Questionnaire</StyledLink>
      <StyledLink to="/freelances">Freelances</StyledLink>
    </nav>
  )
}

export default Header
