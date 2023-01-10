import React, { useState } from 'react';
import classnames from 'classnames';
import { useTheme } from '../../../Common/hooks';
import { UpTag, TagData } from '../../Display/Tag';
import { getLabelStyles, getLabelWrapperStyles, getTagsWrapperStyles, getWrapperStyles } from './UpTagsSelect.style';
import { findAndUpdateSelectedTag } from './UpTagsSelect.helper';
import { getWrapperStyle } from 'Components/Display/StepperControl/StepperControl.style';

type DataOutput = TagData[] | TagData;

interface Props {
  tags: TagData[];
  label?: string;
  onChange?: (e: React.MouseEvent, data: DataOutput) => void;
  multipleSelection?: boolean;
}

const UpTagsSelect: React.VFC<Props> = ({ tags, onChange, label, multipleSelection = true }) => {
  const theme = useTheme();
  const [selectedTags, setSelectedTags] = useState(tags);

  const handleTagSelected = (e: React.MouseEvent, data: TagData): void => {
    //TODO: to remove on react/testing library update
    e.persist();
    const updatedSelectedTags = findAndUpdateSelectedTag(selectedTags, data, multipleSelection);

    setSelectedTags(updatedSelectedTags);
    if (multipleSelection) {
      onChange?.(e, updatedSelectedTags);
    } else {
      onChange?.(e, data);
    }
  };

  const tagsWrapperStyles = getTagsWrapperStyles();
  const labelWrapperStyles = getLabelWrapperStyles(theme);
  const labelStyles = getLabelStyles(theme);
  const wrapperStyles = getWrapperStyles(theme);

  return (
    <div className={classnames(wrapperStyles)}>
      {label && (
        <p className={classnames(labelWrapperStyles)}>
          <label className={classnames(labelStyles)}>{label}</label>
        </p>
      )}
      <div className={classnames(tagsWrapperStyles)}>
        {selectedTags.map(tag => (
          <UpTag id={tag.id} text={tag.text} selected={tag.selected} onChange={handleTagSelected} key={tag.id} />
        ))}
      </div>
    </div>
  );
};

export { UpTagsSelect, Props };
