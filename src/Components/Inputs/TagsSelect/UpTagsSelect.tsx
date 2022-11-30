import React, { useState } from 'react';
import classnames from "classnames";
import { useTheme } from "../../../Common/theming/ThemeContext";
import { UpTag, SelectedTagData } from '../../Display/Tag'
import {getLabelStyles, getLabelWrapperStyles, getTagsWrapperStyles} from './UpTagsSelect.style'
import {findAndUpdateSelectedTag, initSelectedTags} from "./UpTagsSelect.helper";

export interface TagData {
    id: string;
    text: string;
}

interface Props {
    tags: TagData[];
    label?: string;
    onChange?: (e: React.MouseEvent, tags: SelectedTagData[]) => void;
}

const UpTagsSelect: React.VFC<Props> = ({tags, onChange, label}) => {
    const theme = useTheme();
    const [selectedTags, setSelectedTags] = useState(initSelectedTags(tags));

  const handleTagSelected = (e: React.MouseEvent, data: SelectedTagData) => {
      //TODO: to remove on react/testing library update
      e.persist();
      const updatedSelectedTags = findAndUpdateSelectedTag(selectedTags, data);

      setSelectedTags(updatedSelectedTags);
      onChange?.(e, updatedSelectedTags);
  }

    const tagsWrapperStyles = getTagsWrapperStyles(theme);
    const labelWrapperStyles = getLabelWrapperStyles(theme);
    const labelStyles = getLabelStyles(theme);

  return (
      <div>
          {label && (
              <p className={classnames(labelWrapperStyles)}>
                  <label className={classnames(labelStyles)}>{label}</label>
              </p>
          )}
        <div className={classnames(tagsWrapperStyles)}>
          {tags.map((tag) => <UpTag id={tag.id} text={tag.text} onChange={handleTagSelected} key={tag.id}/>)}
        </div>
      </div>
  );
}

export { UpTagsSelect, Props };
