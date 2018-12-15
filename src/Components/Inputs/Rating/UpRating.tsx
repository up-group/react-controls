import * as React from 'react'
import * as _ from 'lodash'
import { style } from 'typestyle'
import * as classnames from 'classnames'
import { NestedCSSSelectors, NestedCSSProperties } from 'typestyle/lib/types';

import UpDefaultTheme, { WithThemeProps, withTheme } from '../../../Common/theming';
import UpSvgIcon from '../../Display/SvgIcon';
import { eventFactory } from '../../../Common/utils/eventListener';

const RatingWrapperStyle = style({
});

const RatingBoxStyle = (props : WithThemeProps) => style({
  color: props.theme.colorMap.gray1,
  textShadow: "0px 1px 10px rgba(0, 0, 0, 1)",
  margin: "auto",
});

const CommonStartCSS = (props: RatingProps & WithThemeProps) => ({
    fontSize: "16px",
    height: "32px",
    width: "32px",
    padding: "2px",
    position: 'relative',
    display: 'inline-block',
    $nest : {
        '&.up-star svg, &.up-star svg path, &.up-star svg polygon' : {
            fill: props.theme.colorMap.primary,
        },
    },
    cursor : props.disabled ? 'default' : 'pointer',
} as NestedCSSProperties);

const FullStarStyle = style({
    ...CommonStartCSS,
})

const EmptyStarStyle = style({
    ...CommonStartCSS,
})

const HalfStarStarStyle = (props : WithThemeProps) => style({
    ...CommonStartCSS,
})

export interface RatingProps {
    name : string;
    numberOfStars : number,
    max: number,
    value?: number,
    className?:string,
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<any>, value: number) => void;
}

export interface RatingState {
    editedValue?: number;
    value: number;
}

export type STAR_FILL_TYPE = 'full' | 'empty' | 'half' 

export const getStarFill = (current, number, rating, max) : STAR_FILL_TYPE => {
    
    const numberByStar = (1/number) * 100 ;

    const valeurMin = (current - 1) * numberByStar;
    const valeurMax = current * numberByStar;

    const ratingLevel = Math.ceil((rating/max) * 100) ;
    
    if(ratingLevel>=valeurMax) {
        return 'full';
    } else if(ratingLevel>valeurMin) {
        return 'half';
    }

    return 'empty' ;
}

const getStarFillStyle = (current, number, rating, max, theme) : string => {
    const fillType = getStarFill(current, number, rating, max) 
    switch(fillType) {
        case 'full' :
            return FullStarStyle
        case 'half' :
            return HalfStarStarStyle({theme})
        default :
            return EmptyStarStyle
    }
}

class UpRating extends React.PureComponent<RatingProps & WithThemeProps, RatingState> {
    
    static defaultProps = {
        theme : UpDefaultTheme,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            editedValue : null,
            value: props.value,
        }
    }

    isControlled = () => this.props.value !== undefined ;

    getValue = () => this.isControlled() ? this.props.value : this.state.value ;

    setEditedValue = (index: number) => {
        if(!this.props.disabled) {
            this.setState({editedValue: this.computeValue(index)}) ;
        }
    }
    
    unsetEditedValue = () => {
        if(!this.props.disabled) {
            _.throttle(() => this.setState({editedValue: null}), 500);
        }
    }
    
    validEditedValue = (index: number) => {
        if(!this.props.disabled) {
            const newValue = this.computeValue(index) ;
            this.setState({value: newValue}, () => {
                if(this.props.onChange) {
                    this.props.onChange(eventFactory(this.props.name, newValue), newValue);
                }
            }) ;
        }
    }

    computeValue = (index: number) : number => {
        return index * Math.floor(this.props.max/this.props.numberOfStars);
    }

    render() {
        const {className, value, numberOfStars, max, theme} = this.props
        return (
            <div className={classnames(RatingWrapperStyle, className)}>
                {
                    Array(numberOfStars).fill(0).map( (element, index) => {
                        const fillMode = getStarFill(index+1, numberOfStars, this.state.editedValue != null ? this.state.editedValue : value, max)
                        return <span onMouseOver={this.setEditedValue.bind(this, index+1)} 
                                onMouseOut={this.unsetEditedValue.bind(this, index+1)} onClick={this.validEditedValue.bind(this, index+1)} >
                            <UpSvgIcon iconName={fillMode == 'empty' ? 'star-outline' : 'star-filled'} 
                                    key={index} className={classnames('up-star', style(CommonStartCSS(this.props)))}>
                            </UpSvgIcon>
                        </span>
                    })
                }
            </div>
        ) 
    }
}

export default withTheme<RatingProps>(UpRating);
