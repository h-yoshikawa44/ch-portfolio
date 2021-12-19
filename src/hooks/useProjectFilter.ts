import { useState, useEffect, useCallback } from 'react';
import { Project } from '@/models/Personal';

const filteringProject = (filter: string, projects: Project[]) => {
  if (filter === '') {
    return projects;
  }
  return projects.filter((project) => project.tags.includes(filter));
};

const useProjectFilter = (projects: Project[]) => {
  const [filter, setFilter] = useState<string>('');
  const [filterProjects, setFilterProjects] = useState<Project[]>([]);

  useEffect(() => {
    setFilterProjects(filteringProject(filter, projects));
  }, [projects, filter]);

  const handleChangeFilter = useCallback(
    (tag: string) => {
      tag === filter ? setFilter('') : setFilter(tag);
    },
    [filter]
  );

  return { filter, filterProjects, handleChangeFilter };
};

export default useProjectFilter;
