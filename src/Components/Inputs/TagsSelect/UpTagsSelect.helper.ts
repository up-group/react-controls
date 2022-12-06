import { TagData } from '../../Display/Tag';

export const findAndUpdateSelectedTag = (tags: TagData[], updatedTag: TagData): TagData[] => {
  return tags.reduce((acc, curr) => {
    if (curr.id === updatedTag.id) {
      acc.push(updatedTag);
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
};
