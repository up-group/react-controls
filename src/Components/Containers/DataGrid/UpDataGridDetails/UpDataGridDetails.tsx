import * as React from 'react';
import { ImageDetailsData, UpDataGridImagesDetails } from './UpDataGridImagesDetails';
import { ActionDetails } from '../UpDataGrid';

export type DetailsType = 'images';
export type DetailsData = ImageDetailsData;

export interface Props {
  details: ActionDetails | null;
}

export const UpDataGridDetails: React.FC<Props> = ({ details }) => {
  if (!details) {
    return null;
  }

  const { type } = details;

  switch (type) {
    case 'images':
      return <UpDataGridImagesDetails details={details} />;
    default:
      return null;
  }
};
