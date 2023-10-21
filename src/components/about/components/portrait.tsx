import useMobile from '@/hooks/useMobile';
import { useTheme } from '@/pages';
import { Box } from '@chakra-ui/react';

import CercleBasDroite from './portrait-components/cercle-bas-droite';
import CercleBasGauche from './portrait-components/cercle-bas-gauche';
import CercleHautDroite from './portrait-components/cercle-haut-droite';
import CercleHautGauche from './portrait-components/cercle-haut-gauche';
import Circle from './portrait-components/circle';
import Face from './portrait-components/face';
import TShirt from './portrait-components/t-shirt';
import TraitBas from './portrait-components/trait-bas';
import TraitHaut from './portrait-components/trait-haut';

export default function Portait() {
  const { activeColorTheme } = useTheme();
  return (
    <Box>
      <svg
        width='228'
        height='245'
        viewBox='0 0 228 245'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ perspective: '10px' }}
      >
        <Circle
          color={
            activeColorTheme?.id === 'sea'
              ? '#9BCDD6'
              : activeColorTheme?.id === 'forest'
              ? '#F0C273'
              : '#C9C1D5'
          }
        />
        <Face />
        <TShirt
          color={
            activeColorTheme?.id === 'sea'
              ? '#E3A591'
              : activeColorTheme?.id === 'forest'
              ? '#9CB380'
              : '#C283A8'
          }
        />
        <CercleBasGauche
          color={
            activeColorTheme?.id === 'sea'
              ? '#4B7A85'
              : activeColorTheme?.id === 'forest'
              ? '#455647'
              : '#666BA2'
          }
        />
        <CercleBasDroite
          color={
            activeColorTheme?.id === 'sea'
              ? '#4B7A85'
              : activeColorTheme?.id === 'forest'
              ? '#455647'
              : '#666BA2'
          }
        />
        <TraitBas
          color={
            activeColorTheme?.id === 'sea'
              ? '#4B7A85'
              : activeColorTheme?.id === 'forest'
              ? '#455647'
              : '#666BA2'
          }
        />
        <CercleHautDroite
          color={
            activeColorTheme?.id === 'sea'
              ? '#E3A591'
              : activeColorTheme?.id === 'forest'
              ? '#D4E09B'
              : '#F1C9C1'
          }
        />
        <TraitHaut
          color={
            activeColorTheme?.id === 'sea'
              ? '#E3A591'
              : activeColorTheme?.id === 'forest'
              ? '#D4E09B'
              : '#F1C9C1'
          }
        />
        <CercleHautGauche
          color={
            activeColorTheme?.id === 'sea'
              ? '#E3A591'
              : activeColorTheme?.id === 'forest'
              ? '#D4E09B'
              : '#F1C9C1'
          }
        />
      </svg>
    </Box>
  );
}
