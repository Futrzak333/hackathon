import React from 'react' 
import Icon1 from '../../images/db.svg'
import Icon2 from '../../images/db.svg'
import Icon3 from '../../images/db.svg'
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './';

export const Services = () => {
    return (
      <ServicesContainer id="services">
          <ServicesH1> Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help you ....</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                    
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help you ....</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                    
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help you ....</ServicesP>
                    </ServicesCard>
            </ServicesWrapper>

         




      </ServicesContainer>  
    )
};