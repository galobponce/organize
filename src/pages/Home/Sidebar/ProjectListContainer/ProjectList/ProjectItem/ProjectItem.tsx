import { FC, FormEvent } from 'react';

import { ProjectListItem } from './styles';
import { cutString } from '../../../../../../utils/StringUtils';
import { useAppContext } from '../../../../../../hooks/useAppContext';
import { useTaskContext } from '../../../../../../hooks/useTaskContext';
import { Project } from '../../../../../../context/Project/ProjectContext';
import { useProjectContext } from '../../../../../../hooks/useProjectContext';
import ProjectItemTrashIcon from './ProjectItemTrashIcon/ProjectItemTrashIcon';

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
  const { fetchTasksByProject } = useTaskContext();
  const { setDisplayMobileSidebar } = useAppContext();
  const { projectState, selectProject } = useProjectContext();

  const handleClick = (e: FormEvent) => {
    e.stopPropagation();
    if (!project.id) return;
    selectProject(project.id);
    fetchTasksByProject(project.id);
    setDisplayMobileSidebar(false);
  };

  return (
    <ProjectListItem 
      onClick={handleClick}
      selected={projectState.selectedProject.id === project.id}>
      
        {cutString(project.name, 27)}

        <ProjectItemTrashIcon projectId={project.id || ''}/>
    
    </ProjectListItem>
  );
};

export default ProjectItem;