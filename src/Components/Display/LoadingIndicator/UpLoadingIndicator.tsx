import * as React from 'react';
import classnames from 'classnames';
import Box from '../../Containers/Box';
import { UpGrid, UpRow, UpCol } from '../../Containers/Grid';
import { style } from 'typestyle';
import { SVGProps, LoadingIndicatorProps } from './types';
import { svgStyle, getStyleByMode } from './styles';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import UpBox from '../../Containers/Box';
import { toRem } from '../../../Common/theming/utils';

const SvgIcon: React.FunctionComponent<SVGProps & WithThemeProps & LoadingIndicatorProps> = (
  props: SVGProps & WithThemeProps & LoadingIndicatorProps
) => {
  const { children, className, loaderSize, theme, ...others } = props;
  return (
    <svg className={classnames(style(svgStyle(props)), className)} {...others}>
      {children}
    </svg>
  );
};

class LoadingIndicator extends React.Component<LoadingIndicatorProps & WithThemeProps> {
  public static defaultProps: Partial<LoadingIndicatorProps> & WithThemeProps = {
    theme: defaultTheme,
    width: 84,
  };

  render() {
    const _displayMode = this.props.displayMode || 'inline';
    const _title = this.props.title || 'Veuillez patienter...';
    const { theme, isLoading } = this.props;

    if (!isLoading && _displayMode != 'zone') {
      return null;
    }

    const { container, overlay, loadingIndicatorStyle } = getStyleByMode(this.props, _displayMode);

    if (_displayMode === 'zone') {
      return (
        <div style={container} className={classnames('up-loading-indicator', this.props.className)}>
          {this.props.children}
          <div style={overlay}>
            <div className={style(loadingIndicatorStyle)}>
              <Box
                boxSize={'auto'}
                pad={'none'}
                margin={'none'}
                flexDirection={'column'}
                alignItems="center"
                justifyContent="center"
                className={classnames('up-loading-indicator', this.props.className)}
              >
                <SvgIcon viewBox="0 0 64 64" theme={theme} loaderSize={this.props.loaderSize} />
                {this.props.message && (
                  <p
                    style={{
                      color: theme.colorMap.grey1,
                    }}
                  >
                    {this.props.message}
                  </p>
                )}
              </Box>
            </div>
          </div>
        </div>
      );
    } else if (_displayMode === 'inline') {
      return (
        <Box
          boxSize={'auto'}
          pad={'none'}
          margin={'none'}
          alignItems="center"
          justifyContent="center"
          className={classnames('up-loading-indicator', this.props.className)}
        >
          <SvgIcon
            viewBox={`0 0 ${this.props.width || 48} ${this.props.width || 48}`}
            loaderSize={this.props.loaderSize}
            theme={theme}
          />
          {this.props.message && <p style={{ color: theme.colorMap.grey1 }}>{this.props.message}</p>}
        </Box>
      );
    } else {
      return (
        <aside className={classnames('up-loading-screen', this.props.className)} style={container}>
          <UpBox boxSize={'full'} justifyContent={'center'} alignItems={'center'}>
            <div style={loadingIndicatorStyle}>
              <UpGrid>
                <UpRow>
                  <UpCol span={6}>
                    <SvgIcon theme={theme} loaderSize={this.props.loaderSize} viewBox="0 0 48 48" />
                  </UpCol>
                  <UpCol span={18}>
                    <UpGrid>
                      <UpRow>
                        <UpCol span={24}>
                          <hgroup
                            style={{
                              textShadow: '0px 0px 0.1ex',
                            }}
                          >
                            <h3
                              style={{
                                fontSize: toRem(22),
                                margin: '0px',
                              }}
                            >
                              <span>{_title}</span>
                            </h3>
                          </hgroup>
                        </UpCol>
                      </UpRow>
                      <UpRow>
                        <UpCol span={24}>
                          <p
                            className="loading-status text-info"
                            style={{
                              textAlign: 'left',
                              color: theme.colorMap.grey1,
                            }}
                          >
                            {this.props.message}
                          </p>
                        </UpCol>
                      </UpRow>
                    </UpGrid>
                  </UpCol>
                </UpRow>
              </UpGrid>
            </div>
          </UpBox>
        </aside>
      );
    }
  }
}

export { LoadingIndicator };
export default withTheme<LoadingIndicatorProps>(LoadingIndicator);
