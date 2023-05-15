import DefaultPicture from '../../assets/profil.jpg'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const StyledTitle = styled.h2`
  padding-top: 30px;
`

const StyledSubtitle = styled.h3`
  padding-bottom: 30px;
  font-size: 15px;
  line-height: 50px;
  color: ${colors.secondary};
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
]

function Freelances() {
  return (
    <Container>
      <StyledTitle>Trouvez votre prestataire </StyledTitle>
      <StyledSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledSubtitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </Container>
  )
}

export default Freelances
