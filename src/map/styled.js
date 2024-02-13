import styled from 'styled-components'

export const Container = styled.div`
.leaflet-container{
    height:50vh;
    width:25vw;
}

@media (min-width: 370px) and (max-width: 500px) {
    .leaflet-container{
    height: 37vh;
    width: 34vw;
    }

}

@media (min-width: 501px) and (max-width: 800px) {
    .leaflet-container{
    height: 47vh;
    width: 34vw;
    }
}
`

