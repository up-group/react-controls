import * as React from 'react'
import * as classname from 'classnames'

import { UpGrid, UpRow, UpCol } from '../../Containers/Grid'
import UpSelect, { UpSelectOption } from '../../Inputs/Select'

import { style } from "typestyle"
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';

export interface UpPaginationState {
    page: number; // Donnée calculée à partir de Skip et Take mais conservé dans l'état
    skip: number; // Nombre d'élément à retirer
    take: number; // Nombre d'élément à prendre
}

export interface UpPaginationProps {
    /** Nombre total d'éléments paginés */
    total: number;
    /** Valeur du nombre d'éléments à ignorer */
    skip?: number;
    /** Valeur du nombre d'éléments à récupérer */
    take?: number;
    /** Valeur de l'index de pagination */
    page?: number;
    /** Message à afficher si aucun résultat retourné */
    noResultMessage?: string;
    /** Message à afficher pour l'information du nombre d'élément par page */
    nbByPageMessage?: string;
    /** Les options pour le nombre d'élément à récupérer */
    takes?: Array<UpSelectOption>;
    /** Activer ou non le composant de modification du nombre d'éléments à afficher par page */
    isTakeChangeEnable?: boolean;
    /** Afficher ou non les informations indiquant le positionnement dans les éléments paginés */
    isExtraInfoDisplay?: boolean; 
    /** Notification de du changement de l'état de la pagination */
    onPageChange: (page: number, take: number, skip: number) => void;
}

const paginationStyle = style({
    margin: "0px 4px",
    listStyle: "none",
    display: "inline-block",
    paddingLeft: "0",
    borderRadius: "4px",
});

const firstChild = {
    marginLeft: 0,
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px"
};
const lastChild = {
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px"
};
const itemHover = (props : WithThemeProps) => ({
    color: props.theme.colorMap.primaryFg,
    backgroundColor: props.theme.colorMap.primary,
    borderColor: props.theme.colorMap.primaryDark,
});

const itemActive = (props : WithThemeProps) => ({
    color: props.theme.colorMap.primaryFg,
    backgroundColor: props.theme.colorMap.primary,
    borderColor: props.theme.colorMap.primary,
    cursor: "not-allowed",
});

const itemDisabled = {
    color: "#777",
    cursor: "not-allowed",
    backgroundColor: "#fff",
    borderColor: "#ddd"
};

const paginationItemStyle = (props : WithThemeProps) => {
    const itemHoverStyle = itemHover(props);
    const itemActiveStyle = itemActive(props) ;

    return style({
        display: "inline",
        $nest: {
            '& > a': {
                minWidth: 41,
                textAlign: "center",
                position: "relative",
                float: "left",
                padding: "6px 3px",
                marginLeft: "-1px",
                lineHeight: "1.43",
                color: props.theme.colorMap.primary,
                textDecoration: "none",
                backgroundColor: props.theme.colorMap.primaryFg,
                border: `1px solid ${props.theme.colorMap.primary}`
            },
            "&:first-child a": firstChild,
            "&:first-child span": firstChild,
            "&:last-child a": lastChild,
            "&:last-child span": lastChild,
            '& a:hover': itemHoverStyle,
            '& a:focus': itemHoverStyle,
            '& span:hover': itemHoverStyle,
            '& span:focus': itemHoverStyle,
            "&.active > a": itemActiveStyle,
            "&.active > span": itemActiveStyle,
            "&.active > a:hover": itemActiveStyle,
            "&.active > span:hover": itemActiveStyle,
            "&.active > a:focus": itemActiveStyle,
            "&.active > span:focus": itemActiveStyle,
            "&.disabled > a": itemDisabled,
            "&.disabled > span": itemDisabled,
            "&.disabled > a:hover": itemDisabled,
            "&.disabled > span:hover": itemDisabled,
            "&.disabled > a:focus": itemDisabled,
            "&.disabled > span:focus": itemDisabled
        }
    });
}

const paginationCounterStyle = (props : WithThemeProps) => style({
    margin: "0px 0px",
    color: props.theme.colorMap.primary,
    backgroundColor: props.theme.colorMap.primaryFg,
    borderRadius: "4px",
    padding: "6px 12px",
    lineHeight: "1.43",
    textDecoration: "none",
    border: `1px solid ${props.theme.colorMap.primary}`,
    float: "right",
    cursor: "pointer",
});

class UpPagination extends React.Component<UpPaginationProps & WithThemeProps, UpPaginationState> {

    static defaultProps: UpPaginationProps & WithThemeProps = {
        noResultMessage: "Aucun résultat",
        nbByPageMessage: "Par page",
        isTakeChangeEnable: true,
        isExtraInfoDisplay: true,
        takes: [{ id: 20, text: "20" },
        { id: 50, text: "50" },
        { id: 100, text: "100" },
        { id: 200, text: "200" }],
        total: 0,
        theme:defaultTheme,
        onPageChange: (page: number, take: number, skip: number) => { }
    }

    constructor(props, context) {
        super(props);

        this.state = {
            page: this.getPage(this.props.take || 50, this.props.skip || 0),
            skip: this.props.skip || 0,
            take: this.props.take || 50
        }
    }

    goToPreviousPage = () => {
        if (this.state.page > 1) {
            var previousPage = this.state.page - 1;
            var newState = { page: previousPage, skip: (previousPage - 1) * this.state.take };
            this.setState(newState, () => {
                this.props.onPageChange(this.state.page, this.state.take, this.state.skip)
            });
        }
    }

    getMaxPage = () => {
        let maxPage = Math.ceil(this.props.total / this.state.take);
        return maxPage;
    }

    goToNextPage = () => {
        if (this.state.page < this.getMaxPage()) {
            var nextPage = this.state.page + 1;
            var newState = { page: nextPage, skip: (nextPage - 1) * this.state.take };
            this.setState(newState, () => {
                this.props.onPageChange(this.state.page, this.state.take, this.state.skip)
            });
        }
    }

    goTo = (page: number) => {
        var newState = { page: page, skip: (page - 1) * this.state.take };
        this.setState(newState, () => {
            this.props.onPageChange(this.state.page, this.state.take, this.state.skip)
        });
    }

    onTakeChange = (event, data: any) => {
        if (data && data.id != this.state.take) {
            var newTake = data.id;
            var newPage = this.getPage(newTake, this.state.skip);
            var newSkip = newTake*(newPage-1)
            
            var newState = { take: newTake, page: newPage, skip: newSkip };
            this.setState(newState, function () {
                this.props.onPageChange(this.state.page, this.state.take, this.state.skip);
            });
        }
    }

    getPage = (take: number, skip: number) => {
        if(take >= this.props.total) {
            return 1 ; // Set the page to 1
        }
        return Math.floor((skip + take) / take)
    }

    componentWillReceiveProps(nextProps: UpPaginationProps) {
        if(nextProps.take != undefined) {
            const newState = { take: nextProps.take , skip: nextProps.skip, page: this.getPage(nextProps.take, nextProps.skip) };
            this.setState(newState);
        }
    }

    inRange(curPage, pagevalue, distance) {
        var absRange = Math.abs(curPage - pagevalue);
        if (absRange < distance) {
            return true;
        }
        return false;
    }

    render() {
        let pages = [];
        let currentPage = 1;
        let maxPage = this.getMaxPage();
        while (currentPage <= maxPage) {
            pages.push(currentPage++);
        }
        let from = this.state.skip + 1;
        let to = from + this.state.take - 1;
        if (to > this.props.total)
            to = this.props.total;

        const takes = this.props.takes;

        let pageNumberNavigation = <span />

        if (pages.length >= 2) {

            const paginationItemClass = paginationItemStyle(this.props) ;

            let PageNumber: any = <span />

            if (pages.length <= 15) {
                PageNumber = pages.map((value, index) => {
                    return <li key={`page-${value}`} className={classname(this.state.page == value ? "active" : "", paginationItemClass)} onClick={this.goTo.bind(this, value)}>
                        <a onClick={(e) => e.preventDefault()} href="#">{value}</a>
                    </li>
                })
            } else {
                PageNumber = pages.map((value, index, array) => {
                    if (value < 4 || array.length - 3 < value) {
                        return <li key={`page-${value}`} className={classname(this.state.page == value ? "active" : "", paginationItemClass)} onClick={this.goTo.bind(this, value)}>
                            <a onClick={(e) => e.preventDefault()} href="#">{value}</a>
                        </li>
                    } else if (this.inRange(this.state.page, value, 4)) {
                        return <li key={`page-${value}`} className={classname(this.state.page == value ? "active" : "", paginationItemClass)} onClick={this.goTo.bind(this, value)}>
                            <a onClick={(e) => e.preventDefault()} href="#">{value}</a>
                        </li>
                    } else if (this.state.page < 8 && this.inRange(7, value, 5)) {
                        return <li key={`page-${value}`} className={classname(this.state.page == value ? "active" : "", paginationItemClass)} onClick={this.goTo.bind(this, value)}>
                            <a onClick={(e) => e.preventDefault()} href="#">{value}</a>
                        </li>
                    } else if (array.length - this.state.page < 8 && this.inRange(array.length - 6, value, 5)) {
                        return <li key={`page-${value}`} className={classname(this.state.page == value ? "active" : "", paginationItemClass)} onClick={this.goTo.bind(this, value)}>
                            <a onClick={(e) => e.preventDefault()} href="#">{value}</a>
                        </li>
                    } else if (value === 4 || array.length - 3 === value) {
                        return <li key={`page-${value}`} className={classname(this.state.page == value ? "active" : "", paginationItemClass)} >
                            <a onClick={(e) => e.preventDefault()} href="#">..</a>
                        </li>
                    } else {
                        return null;
                    }
                }).filter((value) => {
                    return value !== null;
                });
            }

            pageNumberNavigation = <nav>
                <ul className={paginationStyle}>
                    <li key={`page-prev`} className={classname(this.state.page == 1 ? "disabled" : "", paginationItemClass)} onClick={this.goToPreviousPage}>
                        <a onClick={(e) => e.preventDefault()} href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {PageNumber}
                    <li key={`page-next`} className={classname(this.state.page == maxPage ? "disabled" : "", paginationItemClass)} onClick={this.goToNextPage}>
                        <a href="#" aria-label="Next" onClick={(e) => e.preventDefault()}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        }

        return (
            <UpGrid>
                <UpRow>
                    <UpCol span={16}>
                        {pageNumberNavigation}
                    </UpCol>
                    <UpCol span={3}>
                        <UpSelect placeholder={this.props.nbByPageMessage} default={{ id: this.props.take, text: this.props.take }} data={takes} onChange={this.onTakeChange} />
                    </UpCol>
                    <UpCol span={5}>
                        <span className={paginationCounterStyle({theme : this.props.theme})}>
                            {maxPage == 0 &&
                                <span>{this.props.noResultMessage}</span>
                            }
                            {maxPage != 0 &&
                                <span>
                                    <span>R&eacute;sultat(s)&nbsp;</span>
                                    <span>{from}</span>
                                    <span> &agrave; </span>
                                    <span>{to}</span>
                                    <span> sur </span>
                                    <span>{this.props.total}</span>
                                </span>
                            }
                        </span>
                    </UpCol>
                </UpRow>
            </UpGrid>
        )
    }
}

export default withTheme<UpPaginationProps>(UpPagination) ;