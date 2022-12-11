import React from 'react'
import styled from 'styled-components'

export default function FourthView() {
  return (
    <Sec1>
        {/* <h1>Who dey here</h1> */}
    </Sec1>
  )
}


const Sec1 = styled.section`
    color: white;
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
`;