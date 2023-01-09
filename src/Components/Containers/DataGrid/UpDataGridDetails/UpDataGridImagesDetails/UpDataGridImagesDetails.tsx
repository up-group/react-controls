import React, { useEffect, useState } from 'react';
import { getWrapperStyle, getContentStyle, getContentItemStyle } from './UpDataGridImagesDetails.style';
import { ActionDetails } from '../../UpDataGrid';

export interface ImageDetailsData {
  src: string;
  alt: string;
}

export interface Props {
  details: ActionDetails;
}
export const UpDataGridImagesDetails: React.VFC<Props> = ({ details }) => {
  const { fetchData } = details;
  const [data, setData] = useState([]);

  useEffect(() => {
    const init = async (): Promise<ImageDetailsData[]> => {
      const dataResponse = await fetchData();

      setData(dataResponse);

      return dataResponse;
    };

    init().catch(console.error);
  }, []);

  const wrapperStyle = getWrapperStyle();
  const contentStyle = getContentStyle();
  const contentItemStyle = getContentItemStyle();

  return (
    <div className={wrapperStyle}>
      <div className={contentStyle}>
        {data.map(({ src, alt }, i) => (
          <div className={contentItemStyle} key={i}>
            <img key={i} src={src} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
