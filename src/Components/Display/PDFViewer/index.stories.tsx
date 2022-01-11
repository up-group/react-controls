import * as React from 'react';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import { withKnobs } from '@storybook/addon-knobs';
import UpBox from '../../Containers/Box';
import UpParagraph from '../../Display/Paragraph';
import UpPDFViewer, { UpPDFViewer as UpPDFViewerComponent } from './UpPDFViewer';
import { getRootContainer } from '../../../Common/stories';
import UpCodeViewer from '../CodeViewer';

export default {
  title: 'Components/Display/UpPDFViewer',
  decorators: [withKnobs, getRootContainer('UpPDFViewer')],
  component: UpPDFViewerComponent,
};

const codeStoryPDFViewer = `const action = {() => { console.log("PDF Loaded Successfully") }};
        <UpPDFViewer 
            width={450} 
            isProcessingPrint={false} 
            onLoadSuccess={action} 
            base64PDFOrUrl={"base64PDFOrUrl"} 
  />`;

const sample =
  'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
  'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
  'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
  'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
  'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
  'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
  'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
  'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
  'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
  'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
  'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
  'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
  'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G';

export const General = () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpBox
      style={{
        margin: '40px 30px',
        border: '1px solid tomato',
      }}
    >
      <UpParagraph>
        <UpBox flexDirection={'row'} flexWrap={true}>
          <UpPDFViewer
            width={450}
            isProcessingPrint={false}
            onLoadSuccess={() => {
              console.log('PDF Loaded Successfully');
            }}
            base64PDFOrUrl={`data:application/pdf;base64,${sample}`}
          />
        </UpBox>
      </UpParagraph>
    </UpBox>
  </UpThemeProvider>
);

export const PdfWithScaleOption = () => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <UpBox
      style={{
        margin: '40px 30px',
        border: '1px solid tomato',
      }}
    >
      <UpParagraph>
        <UpBox flexDirection={'row'} flexWrap={true}>
          <UpPDFViewer
            width={450}
            isProcessingPrint={false}
            onLoadSuccess={() => {
              console.log('PDF Loaded Successfully');
            }}
            base64PDFOrUrl={`data:application/pdf;base64,${sample}`}
            scale={2}
          />
        </UpBox>
      </UpParagraph>
    </UpBox>
  </UpThemeProvider>
);
