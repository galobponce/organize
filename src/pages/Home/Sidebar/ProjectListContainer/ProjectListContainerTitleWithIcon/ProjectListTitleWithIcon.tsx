import { FC } from 'react';
import { Square, theme } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';

import { TitleWithIcon } from '../../styles';
import { SmallTitle } from '../../../../../common/styles';

const ProjectListTitleWithIcon: FC = () => (
  <TitleWithIcon>
    <Square rounded='base' marginRight='1.5' size='1.7rem' bg={theme.colors.teal[300]}>
      <FontAwesomeIcon color={theme.colors.gray[50]} size='sm' icon={faDiagramProject} />
    </Square>
    <SmallTitle>Your Projects</SmallTitle>
  </TitleWithIcon>
)

export default ProjectListTitleWithIcon;