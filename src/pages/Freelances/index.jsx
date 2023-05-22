import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import { useEffect, useState } from 'react'
import { Loader } from '/Users/damien/Desktop/react/shiny-agency/src/utils/style/atoms.js'

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

function Freelances() {
  const [freelancersData, setFreelancersData] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchFreelancers() {
      setDataLoading(true)
      try {
        const response = await fetch('http://localhost:8000/freelances')
        const { freelancersList } = await response.json()
        setFreelancersData(freelancersList)
      } catch (err) {
        console.log(error)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelancers()
  }, [])

  return (
    <Container>
      <StyledTitle>Trouvez votre prestataire </StyledTitle>
      <StyledSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </StyledSubtitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelancersData &&
            freelancersData.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                picture={profile.picture}
                title={profile.name}
              />
            ))}
        </CardsContainer>
      )}
    </Container>
  )
}

export default Freelances
