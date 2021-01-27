import * as React from 'react';
import * as _ from 'lodash';
import { style } from 'typestyle';
import * as classnames from 'classnames';
import UpDefaultTheme, { WithThemeProps, withTheme } from '../../../Common/theming';
import UpSvgIcon from '../../Display/SvgIcon';
import { eventFactory } from '../../../Common/utils/eventListener';
import { RatingProps, RatingState, STAR_FILL_TYPE } from './types';
import { CommonStartCSS, RatingWrapperStyle } from './styles';

export const getStarFill = (current, number, rating, max): STAR_FILL_TYPE => {

    const numberByStar = (1 / number) * 100;
    const valeurMin = (current - 1) * numberByStar;
    const valeurMax = current * numberByStar;
    const ratingLevel = Math.ceil((rating / max) * 100);

    if (ratingLevel >= valeurMax) {
        return 'full';
    } else if (ratingLevel > valeurMin) {
        return 'half';
    }

    return 'empty';
};

class UpRating extends React.PureComponent<RatingProps & WithThemeProps, RatingState> {

    static defaultProps = {
        theme: UpDefaultTheme,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            editedValue: null,
            value: props.value,
        }
    }

    isControlled = () => this.props.value !== undefined;

    getValue = () => this.isControlled() ? this.props.value : this.state.value;

    setEditedValue = (index: number) => {
        if (!this.props.disabled) {
            this.setState({ editedValue: this.computeValue(index) });
        }
    }

    unsetEditedValue = () => {
        if (!this.props.disabled) {
            _.throttle(() => this.setState({ editedValue: null }), 500);
        }
    }

    validEditedValue = (index: number) => {
        if (!this.props.disabled) {
            const newValue = this.computeValue(index);
            this.setState({ value: newValue }, () => {
                if (this.props.onChange) {
                    this.props.onChange(eventFactory(this.props.name, newValue), newValue);
                }
            });
        }
    }

    computeValue = (index: number): number => {
        return index * Math.floor(this.props.max / this.props.numberOfStars);
    }

    render() {
        const {
            className,
            value,
            numberOfStars,
            max,
            dataFor,
            theme
        } = this.props;


        return (
            <div
                className={classnames(RatingWrapperStyle, className, 'up-rating')}
                data-for={dataFor}
                data-tip={"tooltip"}
            >
                {
                    Array(numberOfStars).fill(0).map((element, index) => {
                        const fillMode = getStarFill(index + 1, numberOfStars, this.state.editedValue != null ? this.state.editedValue : value, max);

                        return (
                            <span
                                key={index}
                                onMouseOver={this.setEditedValue.bind(this, index + 1)}
                                onMouseOut={this.unsetEditedValue.bind(this, index + 1)} 
                                onClick={this.validEditedValue.bind(this, index + 1)}
                            >
                                <UpSvgIcon
                                    iconName={fillMode == 'empty' ? 'star-outline' : 'star-filled'}
                                    key={index}
                                    className={classnames('up-star', style(CommonStartCSS(this.props)))}
                                >
                                </UpSvgIcon>
                            </span>
                        )
                    })
                }
            </div>
        )
    }
};

export { UpRating };
export default withTheme<RatingProps>(UpRating);
