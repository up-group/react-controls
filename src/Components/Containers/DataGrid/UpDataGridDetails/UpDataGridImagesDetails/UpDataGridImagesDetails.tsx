import React, { useEffect, useState } from 'react';
import {
  getWrapperStyle,
  getContentStyle,
  getContentItemStyle,
  getLoadingStyle,
} from './UpDataGridImagesDetails.style';
import { ActionDetails } from '../../UpDataGrid';
import UpLoadingIndicator from '../../../../Display/LoadingIndicator';

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const init = async (): Promise<ImageDetailsData[]> => {
      const dataResponse = await fetchData();

      setData(dataResponse);

      return dataResponse;
    };

    setIsLoading(true);
    init()
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const wrapperStyle = getWrapperStyle();
  const contentStyle = getContentStyle();
  const loadingStyle = getLoadingStyle();
  const contentItemStyle = getContentItemStyle();

  return (
    <div className={wrapperStyle}>
      {isLoading && (
        <div className={loadingStyle}>
          <UpLoadingIndicator displayMode={'inline'} isLoading={isLoading} width={320} height={240} />
        </div>
      )}

      {!isLoading && data.length > 0 && (
        <div className={contentStyle}>
          {data.map(({ src, alt }, i) => (
            <div className={contentItemStyle} key={i}>
              <img key={i} src={src} alt={alt} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
