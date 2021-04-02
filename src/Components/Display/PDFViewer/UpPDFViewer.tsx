import * as React from 'react';
import { style } from 'typestyle';
import { Document, Page } from 'react-pdf';
import { WithThemeProps, withTheme } from '../../../Common/theming';
import UpLoadingIndicator from '../LoadingIndicator';
import { UpPDFViewerProps, UpPDFViewerState } from './types';

const FullWidth = style({
    width: '100%',
    flexDirection: 'column',
});

class UpPDFViewer extends React.PureComponent<UpPDFViewerProps & WithThemeProps, UpPDFViewerState> {

    // The wrapper block of the PDF Viewer
    pdfWrapper;

    static defaultProps = {
        scale: 1.1,
        className: FullWidth
    };

    constructor(props, context) {
        super(props, context);
        // Initialize state
        this.state = {
        };
    }

    componentDidMount() {
        this.setDivSize();
        //window.addEventListener('resize', throttle(this.setDivSize, 500));
    }

    componentWillUnmount() {
        //window.removeEventListener('resize', throttle(this.setDivSize, 500));
    }

    onLoadSuccess = (data) => {
        this.setState({ pagesNumber: data.numPages });
        if (this.props.onLoadSuccess) {
            this.props.onLoadSuccess();
        }
    }

    setDivSize = () => {
        if (this.props.width) {
            this.setState({ wrapperWidth: this.props.width });
        }
        else if (this.pdfWrapper != null) {
            this.setState({ wrapperWidth: this.pdfWrapper.getBoundingClientRect().width });
        }
    }

    displayAllPages = numPages => {
        let pages = [];
        for (let page = 1; page <= numPages; page++) {
            pages.push(
                <Page
                    key={page}
                    pageNumber={page}
                    scale={this.props.scale}
                    width={this.state.wrapperWidth ? this.state.wrapperWidth : '100%'}
                />
            );
        }
        return pages;
    };

    render() {
        const { isProcessingPrint, base64PDFOrUrl } = this.props;

        if (isProcessingPrint === true) {
            return (
                <UpLoadingIndicator
                    message="Chargement en cours..."
                    isLoading={isProcessingPrint}
                />
            );
        }

        return (
            <div
                ref={(ref) => { this.pdfWrapper = ref; this.setDivSize(); }}
                className={this.props.className}>
                <Document
                    file={base64PDFOrUrl}
                    loading={
                        <div style={{ margin: 'auto' }}>
                            <UpLoadingIndicator
                                message={"Chargement en cours..."}
                                isLoading={true}
                            />
                        </div>
                    }
                    onLoadSuccess={this.onLoadSuccess}
                    noData={''}
                >
                    {this.props.showAllPages &&
                        this.state.pagesNumber &&
                        this.displayAllPages(this.state.pagesNumber)
                    }
                    {!this.props.showAllPages &&
                        <Page
                            width={this.state.wrapperWidth ? this.state.wrapperWidth : '100%'}
                            pageNumber={1}
                            scale={this.props.scale} />
                    }
                    {this.props.children}
                </Document>
            </div>
        );
    }
}

export { UpPDFViewer };
export default withTheme<UpPDFViewerProps>(UpPDFViewer);
