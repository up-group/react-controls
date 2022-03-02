import * as React from 'react';
import { style } from 'typestyle';
import UpButton from '../Button/UpButton';
import UpToggle from '../Toggle';
import UpLoadingIndicator from '../../Display/LoadingIndicator';
import UpNotification from '../../Display/Notification';
import UpBox from '../../Containers/Box';
import defaultTheme from '../../../Common/theming';
import { eventFactory } from '../../../Common/utils/eventListener';
import { LabelsPicture, UpPictureProps } from './types';
import { getCameraWrapperStyles, getPictureCustomStyle, getPictureWrapperStyles } from './styles';

const defaultLabels: LabelsPicture = {
  activation: 'Activer la caméra :',
  takePicture: 'Prendre une photo',
  noCameraSupported: "Vatre navigateur ne supporte pas l'accès à la caméra ou vous n'avez pas autorisé celui-ci",
};

export default function UpPicture({
  theme = defaultTheme,
  name = 'pucture',
  width,
  height,
  labels,
  customStyles,
  onChange,
}: UpPictureProps) {
  const [supportsCamera] = React.useState('mediaDevices' in navigator);
  const [enableVideo, setEnableVideo] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [isCameraReady, setIsCameraReady] = React.useState(false);

  const video = React.useRef(null);
  const picture = React.useRef(null);

  const takeImage = React.useCallback(() => {
    if (picture.current) {
      picture.current.width = width || video.current.videoWidth;
      picture.current.height = height || video.current.videoHeight;

      picture.current.getContext('2d').drawImage(video.current, 0, 0, picture.current.width, picture.current.height);
      const newImage = {
        data: picture.current.toDataURL(),
        width: picture.current.width,
        height: picture.current.height,
      };
      setImage(newImage);
      if (onChange) onChange(eventFactory(name, newImage), newImage);
    }
  }, []);

  const onActivationVideoChange = React.useCallback(() => {
    const newState = !enableVideo;
    setEnableVideo(newState);
    if (!newState) {
      video.current &&
        video.current.srcObject &&
        video.current.srcObject.getVideoTracks().forEach(videoTrack => {
          videoTrack.stop();
        });
      video.current.srcObject = null;
      setIsCameraReady(false);
      setImage(null);
    } else {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.current.srcObject = stream;
        setIsCameraReady(true);
      });
    }
  }, [enableVideo]);

  const currentLabels = labels || defaultLabels;

  const cameraWrapperStyles = style({
    ...getCameraWrapperStyles(
      { theme, width, height, labels, customStyles },
      {
        supportsCamera,
        enableVideo,
        isCameraReady,
        image,
      }
    ),
    ...getPictureCustomStyle(
      'cameraWrapper',
      customStyles,
      { theme, width, height, labels, customStyles },
      {
        supportsCamera,
        enableVideo,
        isCameraReady,
        image,
      }
    ),
  });

  const pictureWrapperStyles = style({
    ...getPictureWrapperStyles(
      { theme, width, height, labels, customStyles },
      {
        supportsCamera,
        enableVideo,
        isCameraReady,
        image,
      }
    ),
    ...getPictureCustomStyle(
      'pictureWrapper',
      customStyles,
      { theme, width, height, labels, customStyles },
      {
        supportsCamera,
        enableVideo,
        isCameraReady,
        image,
      }
    ),
  });

  return (
    <>
      {!supportsCamera && <UpNotification intent={'warning'}>{labels['noCameraSupported']}</UpNotification>}
      {supportsCamera && (
        <UpToggle value={true} checked={enableVideo} onChange={onActivationVideoChange}>
          {currentLabels['activation']}
        </UpToggle>
      )}
      {enableVideo && (
        <UpBox
          flexDirection={'column'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          className={`up-camera-wrapper ${cameraWrapperStyles}`}
        >
          <UpLoadingIndicator isLoading={!isCameraReady} displayMode={'inline'}></UpLoadingIndicator>
          <video ref={video} controls={false} autoPlay style={{ width: '100%', maxWidth: 300 }} />
          <UpBox className={style({ margin: '10px 0px' })}>
            <UpButton onClick={takeImage} actionType={'photo-camera'} intent={'primary'}>
              {currentLabels['takePicture']}
            </UpButton>
          </UpBox>
          <canvas
            className={`up-picture-wrapper ${pictureWrapperStyles}`}
            width={image ? image.width : width}
            height={image ? image.height : height}
            ref={c => {
              picture.current = c;
              if (picture.current && image) {
                const context = picture.current.getContext('2d');
                // load image from data url
                const imageObj = new Image();
                imageObj.onload = function () {
                  context.drawImage(this, 0, 0, image.width, image.height);
                };
                imageObj.src = image.data;
              }
            }}
            style={{
              display: image ? 'inline-block' : 'none',
            }}
          />
        </UpBox>
      )}
    </>
  );
}
