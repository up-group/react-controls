import { findAndUpdateSelectedTag } from './UpTagsSelect.helper';

const tags = [
  { id: '1', text: 'Mono', selected: false },
  { id: '2', text: 'Multi', selected: false },
  { id: '3', text: 'Tag 3', selected: false },
];

describe('UpTagsSelect.helper', () => {
  describe('#findAndUpdateSelectedTag', () => {
    it('should update to true the found selected tag', () => {
      const selectedTag = {
        id: '2',
        text: 'Multi',
        selected: true,
      };
      const result = findAndUpdateSelectedTag(tags, selectedTag, false);
      const expected = [
        { id: '1', text: 'Mono', selected: false },
        { id: '2', text: 'Multi', selected: true },
        { id: '3', text: 'Tag 3', selected: false },
      ];

      expect(result).toMatchObject(expected);
    });
    it('should update to false the found selected tag', () => {
      const selectedTag = {
        id: '2',
        text: 'Multi',
        selected: false,
      };
      const result = findAndUpdateSelectedTag(tags, selectedTag, false);
      const expected = [
        { id: '1', text: 'Mono', selected: false },
        { id: '2', text: 'Multi', selected: false },
        { id: '3', text: 'Tag 3', selected: false },
      ];

      expect(result).toMatchObject(expected);
    });

    it('should not update the tags array if the tag is not found', () => {
      const selectedTag = {
        id: '4',
        text: 'Multi',
        selected: false,
      };
      const result = findAndUpdateSelectedTag(tags, selectedTag, false);
      const expected = [
        { id: '1', text: 'Mono', selected: false },
        { id: '2', text: 'Multi', selected: false },
        { id: '3', text: 'Tag 3', selected: false },
      ];

      expect(result).toMatchObject(expected);
    });
  });
});
