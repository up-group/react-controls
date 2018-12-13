import * as React from 'react';
import { style } from 'typestyle';
import { Page, Document } from 'react-pdf';
import { throttle } from 'lodash' ;
import { WithThemeProps, withTheme } from '../../../Common/theming';
import UpLoadingIndicator from '../LoadingIndicator';

const FullWidth = style({
  width: '100%',
  flexDirection: 'column',
});

export interface UpPDFViewerProps {
  isProcessingPrint?: boolean;
  base64PDF: string;
  fileName?: string;
  pageNumber?:number;
  scale?:number;
  onLoadSuccess:() => void;
}

export interface UpPDFViewerState {
  wrapperWidth? : number;
}

class UpPDFViewer extends React.PureComponent<UpPDFViewerProps & WithThemeProps, UpPDFViewerState> {

  static defaultProps = {
    scale: 1.5,
    pageNumber:1,
  };
  // The wrapper block of the PDF Viewer
  pdfWrapper ;

  constructor(props, context) {
    super(props, context);
    // Initialize state
    this.state = {} ;
  }
  componentDidMount () {
    this.setDivSize();
    window.addEventListener('resize', throttle(this.setDivSize, 500));
  }

  componentWillUnmount () {
    window.removeEventListener('resize', throttle(this.setDivSize, 500));
  }

  setDivSize = () => {
    if (this.pdfWrapper != null) {
      this.setState({ wrapperWidth: this.pdfWrapper.getBoundingClientRect().width });
    }
  }

  render() {
    const { isProcessingPrint, base64PDF, onLoadSuccess } = this.props;

    if (isProcessingPrint) {
      return (
        <UpLoadingIndicator
          message="Chargement en cours..."
          isLoading={isProcessingPrint}
        />
      );
    }

    return (
      <div ref={(ref) => { this.pdfWrapper = ref ; this.setDivSize() ; }}>
        <Document
          className={FullWidth}
          file={base64PDF}
          loading={
            <UpLoadingIndicator
              message={"Chargement en cours..."}
              isLoading={true}
            />
          }
          onLoadSuccess={onLoadSuccess ? onLoadSuccess() : () => {}}
          noData={''}>
          <Page
            width={this.state.wrapperWidth ? this.state.wrapperWidth : '100%'}
            pageNumber={this.props.pageNumber}
            scale={this.props.scale} />
        </Document>
      </div>
    );
  }
}

export default withTheme<UpPDFViewerProps>(UpPDFViewer);
