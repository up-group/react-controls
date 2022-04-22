// Imports
import React from 'react';
import { getStyles } from './styles';

export type ImageSize = 'thumb' | 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'full';

export interface UpImageProps {
  imageSize?: ImageSize;
  src: string;
  alt: string;
}

export default class UpImage extends React.Component<UpImageProps> {
  public render() {
    const { src, alt } = this.props;
    return <img src={src} alt={alt} className={getStyles(this.props)} />;
  }
}
