// Adapted from https://grommet.github.io/docs/spinning
import * as React from 'react';
import * as classnames from 'classnames';
import Box from '../../Containers/Box';
import { UpGrid, UpRow, UpCol } from '../../Containers/Grid'
import { style } from 'typestyle';
import { svgStyle, getStyleByMode } from './styles';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
export type LoadingIndicatorDisplayMode = "inline" | "layer" | "modal" | "zone"

import defaultTheme from '../../../Common/theming';
import UpBox from '../../Containers/Box';
export type LoaderSize ={
    loaderSize?:number
} 
export interface LoadingIndicatorProps {
    isLoading: boolean;
    displayMode?: LoadingIndicatorDisplayMode;
    message?: string;
    title?: string;
    className?: string;
    width?: number;
    height?: number;
    loaderSize?:number;
}
type SVGProps = React.SVGAttributes<SVGSVGElement>;

const SvgIcon: React.StatelessComponent<SVGProps & WithThemeProps & LoaderSize> = (props: SVGProps & WithThemeProps & LoaderSize ) => {
    const { children, className, loaderSize, ...others } = props;
    return <svg className={classnames(style(svgStyle(props)), className)} {...others}>{children}</svg>;
}

class LoadingIndicator extends React.Component<LoadingIndicatorProps & WithThemeProps & LoaderSize>{

    public static defaultProps: Partial<LoadingIndicatorProps> & WithThemeProps = {
        theme: defaultTheme,
        width: 84
    }

    constructor(p, c) {
        super(p, c);
    }

    render() {
        const _displayMode = this.props.displayMode || "inline";
        const _title = this.props.title || "Veuillez patienter...";
        const { theme, isLoading } = this.props;

        if (!isLoading && _displayMode != "zone") {
            return null;
        }

        const { container, overlay, loadingIndicatorStyle } = getStyleByMode(this.props, _displayMode)

        if (_displayMode == "zone") {



            return (
                <div
                    style={container}
                    className={classnames(
                        "up-loading-indicator",
                        this.props.className
                    )}
                >
                    {this.props.children}
                    <div style={overlay}>
                        <div className={style(loadingIndicatorStyle)}>
                            <Box
                                boxSize={"auto"}
                                pad={"none"}
                                margin={"none"}
                                flexDirection={"column"}
                                alignItems="center"
                                justifyContent="center"
                                className={classnames(
                                    "up-loading-indicator",
                                    this.props.className
                                )}
                            >
                                <SvgIcon viewBox="0 0 64 64" theme={theme} loaderSize={this.props.loaderSize}  />
                                {this.props.message &&
                                    <p style={{ color: theme.colorMap.grey1 }}>{this.props.message}</p>
                                }
                            </Box>
                        </div>
                    </div>
                </div>
            );

        } else if (_displayMode == "inline") {
            return <Box boxSize={"auto"} pad={"none"} margin={'none'} alignItems="center" justifyContent="center" className={classnames('up-loading-indicator', this.props.className)}>
                <SvgIcon viewBox="0 0 48 48" loaderSize={this.props.loaderSize}   theme={theme} />
                {this.props.message &&
                    <p style={{ color: theme.colorMap.grey1 }}>{this.props.message}</p>
                }
            </Box >;
        } else {




            return <aside
                className={classnames('up-loading-screen', this.props.className)} style={container}>
                <UpBox boxSize={'full'} justifyContent={'center'} alignItems={'center'}>
                    <div style={loadingIndicatorStyle}>
                        <UpGrid>
                            <UpRow>
                                <UpCol span={6}>
                                    <SvgIcon theme={theme} loaderSize={this.props.loaderSize}  viewBox="0 0 48 48" />
                                </UpCol>
                                <UpCol span={18}>
                                    <UpGrid>
                                        <UpRow>
                                            <UpCol span={24}>
                                                <hgroup style={{ "textShadow": "0px 0px 0.1ex" }} className="">
                                                    <h3 style={{ "fontSize": "22px", 'margin': '0px' }}>
                                                        <span>{_title}</span>
                                                    </h3>
                                                </hgroup>
                                            </UpCol>
                                        </UpRow>
                                        <UpRow>
                                            <UpCol span={24}>
                                                <p className="loading-status text-info"
                                                    style={{ "textAlign": "left", color: theme.colorMap.grey1 }}>{this.props.message}</p>
                                            </UpCol>
                                        </UpRow>
                                    </UpGrid>
                                </UpCol>
                            </UpRow>
                        </UpGrid>
                    </div>
                </UpBox>
            </aside>;

        }
    }
};

export default withTheme<LoadingIndicatorProps>(LoadingIndicator);