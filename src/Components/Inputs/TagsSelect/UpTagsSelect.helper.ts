import { TagData } from '../../Display/Tag';

export const findAndUpdateSelectedTag = (
  tags: TagData[],
  updatedTag: TagData,
  multipleSelectionAllowed: boolean
): TagData[] => {
  return tags.reduce((acc, curr) => {
    if (curr.id === updatedTag.id) {
      acc.push(updatedTag);
    } else {
      let item = { ...curr };
      if (!multipleSelectionAllowed) {
        item = { ...curr, selected: false };
      }
      acc.push(item);
    }
    return acc;
  }, []);
};
