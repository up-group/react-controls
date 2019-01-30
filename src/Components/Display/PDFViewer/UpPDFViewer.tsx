import * as React from 'react';
import { style } from 'typestyle'; 
import { Document, Page } from 'react-pdf';
import { throttle } from 'lodash' ;
import { WithThemeProps, withTheme } from '../../../Common/theming';
import UpLoadingIndicator from '../LoadingIndicator';
import { UpButton } from 'Components';

const FullWidth = style({
  width: '100%',
  flexDirection: 'column',
});

export interface UpPDFViewerProps {
  isProcessingPrint?: boolean;
  base64PDF: string;
  fileName?: string;
  scale?:number;
  onLoadSuccess?:() => void;
}

export interface UpPDFViewerState {
  wrapperWidth? : number;
  pageNumber?:number;
}

class UpPDFViewer extends React.PureComponent<UpPDFViewerProps & WithThemeProps, UpPDFViewerState> {

  static defaultProps = {
    scale: 1.1,
  };

  // The wrapper block of the PDF Viewer
  pdfWrapper ;

  constructor(props, context) {
    super(props, context);
    // Initialize state
    this.state = {
      pageNumber: 1
    } ;
  }

  componentDidMount () {
    this.setDivSize();
    window.addEventListener('resize', throttle(this.setDivSize, 500));
  }

  componentWillUnmount () {
    window.removeEventListener('resize', throttle(this.setDivSize, 500));
  }

  onLoadSuccess = (data) => {
    this.setState({ pageNumber: data.numPages });
  }

  setDivSize = () => {
    if (this.pdfWrapper != null) {
      this.setState({ wrapperWidth: this.pdfWrapper.getBoundingClientRect().width });
    }
  }

  render() {
    const { isProcessingPrint, base64PDF } = this.props;

    if (isProcessingPrint === true) {
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
          onLoadSuccess={this.onLoadSuccess}
          noData={''}>
          <Page
            width={this.state.wrapperWidth ? this.state.wrapperWidth : '100%'}
            pageNumber={this.state.pageNumber}
            scale={this.props.scale} />
        </Document>
      </div>
    );
  }
}

export default withTheme<UpPDFViewerProps>(UpPDFViewer);
