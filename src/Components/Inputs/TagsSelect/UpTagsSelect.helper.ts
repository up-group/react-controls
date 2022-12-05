import { SelectedTagData } from "../../Display/Tag";
import {TagData} from "../TagsSelect/UpTagsSelect";

export const findAndUpdateSelectedTag = (tags: SelectedTagData[], updatedTag: SelectedTagData) => {
    return tags
        .reduce((acc, curr) => {
            if (curr.id === updatedTag.id){
                acc.push(updatedTag);
            }
            else {
                acc.push(curr);
            }
            return acc;
        }, []);
}

export const initSelectedTags = (tags: TagData[]) => tags.map((tag) => ({...tag, selected: false}));

