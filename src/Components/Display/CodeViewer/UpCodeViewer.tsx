import * as React from 'react' ;
import Highlight, { defaultProps, PrismTheme, Language } from "prism-react-renderer";
import { style } from 'typestyle';

import UpParagraph from '../Paragraph';
import UpBox from '../../Containers/Box';
import UpButtonGroup from '../../Containers/ButtonGroup';
import UpButton from '../../Inputs/Button/UpButton';
import UpHeading from '../../Display/Heading';

export interface UpCodeViewerProps {
    theme?: PrismTheme;
    language: Language;
    code: string;
    children?: React.ReactNode;
}

const UpCodeViewer = (props: UpCodeViewerProps) => {
    const [copySuccess, setCopySuccess] = React.useState('');
    const textAreaRef = React.useRef(null);

    const copyToClipboard = (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
    };

    const toolBarStyle = style({
        $nest : {

        }
    })

    return <UpParagraph className={style({
        maxWidth: '100%',
        $nest: {
            '.prism-code': {
                maxWidth: '100%',
                overflowX: 'auto',
                borderBottomLeftRadius: '6px',
                borderBottomRightRadius: '6px',
                borderTopLeftRadius: '0px',
                borderTopRightRadius: '0px',
                padding: '8px',
                marginTop: '0px'
            },
            '.prism-code span': {
                textAlign: 'left'
            },
            '.prism-code div': {
                textAlign: 'left',
            },
            '.up-codeviewer-toolbar' : {
                paddingRight: '8px',
                marginTop: '0px',
                backgroundColor: 'whitesmoke',
                padding: '4px',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px',
            },
            '.up-codeviewer-toolbar .up-btn-wrapper:first-child' : {
                marginRight: '0px',
                width:'24px',
            },
            '.up-codeviewer-toolbar-title' : {
                margin:'0px',
                textAlign: 'left',
                fontSize: '14px',
                width: '97%'
            }
        }
    })}>
        <UpBox flexDirection={'row'} justifyContent={'flex-end'} alignItems={'flex-end'} className={'up-codeviewer-toolbar'}>
            <UpHeading className={'up-codeviewer-toolbar-title'} tag={'h3'}>Code</UpHeading>
            <UpButtonGroup>
                <UpButton intent={'primary'} onClick={copyToClipboard} width={'icon'} actionType={'cake'}></UpButton>
            </UpButtonGroup>
        </UpBox>
        <Highlight {...defaultProps} {...props}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
        <form style={{ position: 'absolute', left : '-9999px'}}>
            <textarea
                ref={textAreaRef}
                value={props.code}
            />
        </form>
    </UpParagraph> ;
}

export default UpCodeViewer ;