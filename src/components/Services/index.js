import React from 'react' 
import Icon1 from '../../images/connection.svg'
import Icon2 from '../../images/drone.svg'
import Icon3 from '../../images/sync.svg'
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements';

export const Services = () => {
    return (
      <ServicesContainer id="services">
          <ServicesH1>Activities map</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    
                        <ServicesIcon src={Icon1}/>
                        <h2>Register</h2>
                        <ServicesH2>To być poinformowanym o możliwości pomocy potrzebującym w okolicy</ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                    
                        <ServicesIcon src={Icon2}/>
                        <h2>Wykorzystujemy najnowsze technologie</h2>
                        <ServicesH2>Współpracujemy z służbami, mamy w ofercie opaski QR - we no to opisz </ServicesH2>
                    </ServicesCard>
                    <ServicesCard>
                    
                        <ServicesIcon src={Icon3}/>
                        <h2>Wprowadzamy najnowsze osiągnięcia naukowe</h2>
                        <ServicesH2>Z pomocą algorytmów AI, przeszukujemy portale społecznościowe, na bieżąco monitorujemy nowe zgłoszenia w sieci </ServicesH2>
                    </ServicesCard>
            </ServicesWrapper>

         




      </ServicesContainer>  
    )
};

export default Services;