import { useCallback, useEffect, useState } from 'react'
import {CharacterCard,Hero,Title, Subtitle  } from './components';


export const AppContent = () =>{
    return (
<>
<Hero>
        <Title>Rick & Morty</Title>
        <Subtitle>👨🏻‍🍳 en La Cocina del Código</Subtitle>
</Hero>
<CharacterCard/>
</>
    )    
}