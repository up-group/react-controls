// Adapted from https://grommet.github.io/docs/spinning
import * as React from 'react';
import * as classnames from 'classnames';
import Box from '../../Containers/Box';
import { UpGrid, UpRow, UpCol } from '../../Containers/Grid'
import { style } from 'typestyle';
import { svgStyle, circleStyle } from './styles';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
export type LoadingIndicatorDisplayMode = "inline" | "layer" | "modal" | "zone"

import defaultTheme from '../../../Common/theming' ;
import UpBox from '../../Containers/Box';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { color } from 'csx';

export interface LoadingIndicatorProps {
    isLoading: boolean;
    displayMode?: LoadingIndicatorDisplayMode;
    message?: string;
    title?: string;
    className?: string;
    width?: number;
    height?: number;
}
type SVGProps = React.SVGAttributes<SVGSVGElement> ;
type CircleProps = React.SVGAttributes<SVGCircleElement>;

const Circle : React.StatelessComponent<CircleProps & WithThemeProps> = (props : CircleProps & WithThemeProps) => {
    const {children, className, ...others} = props; 
    return <circle className={classnames(style(circleStyle(props)), className)} {...others}>{children}</circle>;
}

const SvgIcon : React.StatelessComponent<SVGProps> = (props : SVGProps) => {
    const {children, className, ...others} = props; 
    return <svg className={classnames(style(svgStyle), className)} {...others}>{children}</svg>;
}

class LoadingIndicator extends React.Component<LoadingIndicatorProps & WithThemeProps>{
    
    public static defaultProps: Partial<LoadingIndicatorProps> & WithThemeProps = {
        theme: defaultTheme,
    }
    
    constructor(p, c) {
        super(p, c);
    }

    render() {
        const _displayMode = this.props.displayMode || "inline";
        const _title = this.props.title || "Veuillez patienter...";

        if (!this.props.isLoading && _displayMode != "zone") {
            return null;
        }

        if (_displayMode == "zone") {

            const container: React.CSSProperties = {
                position: "relative",
                display: "block"
            };

            const overlay: React.CSSProperties = {
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.4)",
                display: this.props.isLoading ? "block" : "none",
            }

            const loadingIndicatorStyle: NestedCSSProperties = {};
            loadingIndicatorStyle.position = "absolute";
            loadingIndicatorStyle.left = 'calc(50% - 42px)';
            loadingIndicatorStyle.top = 'calc(50% - 42px)';
            loadingIndicatorStyle.padding= 40;
            loadingIndicatorStyle.textAlign = "center";
            loadingIndicatorStyle.width = this.props.width ? this.props.width : '84px';
            loadingIndicatorStyle.height = this.props.height ? this.props.height : 'auto';
            loadingIndicatorStyle.margin = 'auto';
            loadingIndicatorStyle.zIndex = 9999;
            loadingIndicatorStyle.backgroundColor = "white";
            loadingIndicatorStyle.opacity = 1;
            loadingIndicatorStyle.padding = 10;
            loadingIndicatorStyle.borderRadius = this.props.theme.borderRadius;
            loadingIndicatorStyle.boxShadow = "1px 1px 3px 2px #111";
            loadingIndicatorStyle.display = "flex";
            loadingIndicatorStyle.justifyContent = "center";
            
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
                            <SvgIcon viewBox="0 0 64 64">
                                <Circle
                                theme={this.props.theme}
                                cx="32"
                                cy="32"
                                r="29"
                                stroke={this.props.theme.colorMap.primary}
                                strokeWidth="6"
                                fill="none"
                                />
                            </SvgIcon>
                            {this.props.message &&
                                <p>{this.props.message}</p>
                            }
                        </Box>
                    </div>
                </div>
              </div>
            );

        } else if (_displayMode == "inline") {
            return <Box boxSize={"auto"} pad={"none"} margin={'none'} alignItems="center" justifyContent="center" className={classnames('up-loading-indicator', this.props.className)}>
                <SvgIcon viewBox="0 0 48 48">
                    <Circle theme={this.props.theme} cx="24" cy="24" r="21" stroke={this.props.theme.colorMap.primary} strokeWidth="6" fill="none" />
                </SvgIcon>
                {this.props.message &&
                    <p>{this.props.message}</p>
                }
            </Box >;
        } else {
            const wrapperStyle : React.CSSProperties = { "position": "fixed", "top": 0, "right": 0, "bottom": 0, "left": 0, "zIndex": 9999, backgroundColor: "white", "opacity": 0.8 } ;
            
            const loadingIndicatorStyle: React.CSSProperties  = { 
                'minWidth': '300px'
            } ;

            if(_displayMode == 'layer') {
                wrapperStyle.backgroundColor= "transparent";
                wrapperStyle.opacity= 1;

                loadingIndicatorStyle.zIndex = 9999;
                loadingIndicatorStyle.backgroundColor = "white";
                loadingIndicatorStyle.opacity = 0.8 ;
                loadingIndicatorStyle.padding = 10;
                loadingIndicatorStyle.borderRadius = this.props.theme.borderRadius;
                loadingIndicatorStyle.boxShadow = "1px 1px 3px 2px #111";
            }

            return <aside
                className={classnames('up-loading-screen', this.props.className)} style={wrapperStyle}>
                <UpBox boxSize={'full'} justifyContent={'center'} alignItems={'center'}>
                    <div style={loadingIndicatorStyle}>
                        <UpGrid>
                            <UpRow>
                                <UpCol span={6}>
                                    <SvgIcon viewBox="0 0 48 48">
                                        <Circle
                                            theme={this.props.theme}
                                            cx="24"
                                            cy="24"
                                            r="21"
                                            stroke={this.props.theme.colorMap.primary}
                                            strokeWidth="6"
                                            fill="none"
                                        />
                                    </SvgIcon>
                                </UpCol>
                                <UpCol span={18}>
                                    <UpGrid>
                                        <UpRow>
                                            <UpCol span={24}>
                                                <hgroup style={{ "textShadow": "0px 0px 0.1ex" }} className="">
                                                    <h3 style={{ "fontSize": "22px", 'margin':'0px' }}>
                                                        <span>{_title}</span>
                                                    </h3>
                                                </hgroup>
                                            </UpCol>
                                        </UpRow>
                                        <UpRow>
                                            <UpCol span={24}>
                                                <p className="loading-status text-info"
                                                    style={{ "textAlign": "left" }}>{this.props.message}</p>
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