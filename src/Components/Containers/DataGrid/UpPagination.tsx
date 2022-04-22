import React from 'react';
import classnames from 'classnames';

import { UpGrid, UpRow } from '../../Containers/Grid';
import { UpSelectOption } from '../../Inputs/Select';

import { style } from 'typestyle';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import defaultTheme, { UpThemeInterface } from '../../../Common/theming';
import { isEmpty } from '../../../Common/utils';

const getMaxPage = (take, total): number => {
  if (isEmpty(take)) {
    return 0;
  }
  return Math.ceil(total / take);
};

const generatePagesNavigation = (page, total, take): Array<number> => {
  {
    // Get the max page
    let maxPage = 0;
    maxPage = Math.ceil(total / take);
    let pages: Array<number> = [];
    if (maxPage >= 1) {
      if (maxPage <= 8) {
        pages = Array.from({ length: maxPage }, (_, i) => i + 1);
      } else {
        [1, 2].map(v => pages.push(v));
        if (page - 3 > 1 && !pages.includes(page - 3)) {
          pages.push(0);
        }
        if (page - 2 > 1 && !pages.includes(page - 2)) {
          pages.push(page - 2);
        }
        if (page - 1 > 1 && !pages.includes(page - 1)) {
          pages.push(page - 1);
        }
        if (page < maxPage - 1 && !pages.includes(page)) {
          pages.push(page);
        }
        if (page + 1 < maxPage - 1 && !pages.includes(page + 1)) {
          pages.push(page + 1);
        }
        if (page + 2 < maxPage - 1 && !pages.includes(page + 2)) {
          pages.push(page + 2);
        }
        if (page + 3 < maxPage - 1) {
          pages.push(0);
        }
        if (!pages.includes(maxPage - 1)) {
          pages.push(maxPage - 1);
        }
        if (!pages.includes(maxPage)) {
          pages.push(maxPage);
        }
      }
    }
    return pages;
  }
};

export interface UpPaginationState {
  page: number; // Donnée calculée à partir de Skip et Take mais conservé dans l'état
  skip: number; // Nombre d'élément à retirer
  take: number; // Nombre d'élément à prendre
}

export interface UpPaginationProps extends WithThemeProps {
  /** Nombre total d'éléments paginés */
  total: number;
  /** Valeur du nombre d'éléments à ignorer */
  skip?: number;
  /** Valeur du nombre d'éléments à récupérer */
  take?: number;
  /** Valeur de l'index de pagination */
  page?: number;
  /** Message à afficher pour l'information du nombre d'élément par page */
  nbByPageMessage?: string;
  /** Les options pour le nombre d'élément à récupérer */
  takes?: Array<UpSelectOption>;
  /** Activer ou non le composant de modification du nombre d'éléments à afficher par page */
  isTakeChangeEnable?: boolean;
  /** Afficher ou non les informations indiquant le positionnement dans les éléments paginés */
  isExtraInfoDisplay?: boolean;
  /** Label pour le lien 'Suivant' */
  nextLabel?: string;
  /** Label pour le lien 'Précédent' */
  previousLabel?: string;
  /** chaine de caractères utilisées comme séparateur dans la pagination*/
  paginationNavigationSeparator?: string;
  /** generate the pages navigation */
  generatePagesNavigation?: (page, total, take) => Array<number>;
  /** Affihage du nombre de résultats */
  renderResultMessage?: (theme: UpThemeInterface, from: number, to: number, total: number) => JSX.Element;
  /** Notification de du changement de l'état de la pagination */
  onPageChange: (page: number, take: number, skip: number) => void;
}

const paginationStyle = style({
  margin: '0px 4px',
  listStyle: 'none',
  display: 'inline-block',
  paddingLeft: '0',
});

const firstChild = (props: UpPaginationProps) => ({
  textDecoration: 'underline',
  fontSize: '15px',
});

const lastChild = (props: UpPaginationProps) => ({
  textDecoration: 'underline',
  fontSize: '15px',
});

const itemHover = (props: UpPaginationProps) => ({
  color: props.theme.colorMap.primary,
});

const itemActive = (props: UpPaginationProps) => ({
  color: props.theme.colorMap.primary,
});

const itemDisabled = (props: UpPaginationProps) => ({
  color: '#777',
  cursor: 'not-allowed',
});

const paginationItemStyle = (props: UpPaginationProps) => {
  const itemHoverStyle = itemHover(props);
  const itemActiveStyle = itemActive(props);
  const itemDisabledStyle = itemDisabled(props);
  const firstChildStyle = firstChild(props);
  const lastChildStyle = lastChild(props);

  return style({
    display: 'inline',
    color: '#4E5B59',
    $nest: {
      '& > a': {
        minWidth: '1rem',
        textAlign: 'center',
        position: 'relative',
        float: 'left',
        padding: '6px 3px',
        marginLeft: '-1px',
        lineHeight: '1.43',
        color: '#4E5B59',
        textDecoration: 'none',
      },
      '&:first-child a': firstChildStyle,
      '&:first-child span': firstChildStyle,
      '&:last-child a': lastChildStyle,
      '&:last-child span': lastChildStyle,
      '& a:hover': itemHoverStyle,
      '& a:focus': itemHoverStyle,
      '& span:hover': itemHoverStyle,
      '& span:focus': itemHoverStyle,
      '&.active > a': itemActiveStyle,
      '&.active > span': itemActiveStyle,
      '&.active > a:hover': itemActiveStyle,
      '&.active > span:hover': itemActiveStyle,
      '&.active > a:focus': itemActiveStyle,
      '&.active > span:focus': itemActiveStyle,
      '&.active > a > span': itemActiveStyle,
      '&.disabled > a': itemDisabledStyle,
      '&.disabled > span': itemDisabledStyle,
      '&.disabled > a:hover': itemDisabledStyle,
      '&.disabled > span:hover': itemDisabledStyle,
      '&.disabled > a:focus': itemDisabledStyle,
      '&.disabled > span:focus': itemDisabledStyle,
      '&.disabled > a > span': itemDisabledStyle,
    },
  });
};

class UpPagination extends React.Component<UpPaginationProps, UpPaginationState> {
  static defaultProps: UpPaginationProps = {
    nbByPageMessage: 'Par page',
    isTakeChangeEnable: true,
    isExtraInfoDisplay: true,
    takes: [
      { id: 20, text: '20' },
      { id: 50, text: '50' },
      { id: 100, text: '100' },
      { id: 200, text: '200' },
    ],
    total: 0,
    theme: defaultTheme,
    previousLabel: 'Précédent',
    nextLabel: 'Suivant',
    generatePagesNavigation: generatePagesNavigation,
    onPageChange: (page: number, take: number, skip: number) => {},
    renderResultMessage: (theme: UpThemeInterface, from: number, to: number, total: number) => (
      <span
        style={{
          lineHeight: '1.43',
          padding: '6px 16px',
        }}
      >
        {total === 0 && <span>Aucun résultat</span>}
        {total !== 0 && <span>{`${total} résultat${total > 1 ? 's' : ''}`}</span>}
      </span>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      page: this.getPage(this.props.take || 50, this.props.skip || 0, this.props.total || 0),
      skip: this.props.skip || 0,
      take: this.props.take || 50,
    };
  }

  goToPreviousPage = () => {
    if (this.state.page > 1) {
      const previousPage = this.state.page - 1;
      const newState = {
        page: previousPage,
        skip: (previousPage - 1) * this.state.take,
      };
      this.setState(newState, () => {
        this.props.onPageChange(this.state.page, this.state.take, this.state.skip);
      });
    }
  };

  getMaxPage = () => {
    return getMaxPage(this.state.take, this.props.total);
  };

  goToNextPage = () => {
    if (this.state.page < this.getMaxPage()) {
      const nextPage = this.state.page + 1;
      const newState = {
        page: nextPage,
        skip: (nextPage - 1) * this.state.take,
      };
      this.setState(newState, () => {
        this.props.onPageChange(this.state.page, this.state.take, this.state.skip);
      });
    }
  };

  goTo = (page: number) => {
    const newState = {
      page: page,
      skip: (page - 1) * this.state.take,
    };
    this.setState(newState, () => {
      this.props.onPageChange(this.state.page, this.state.take, this.state.skip);
    });
  };

  onTakeChange = (event, data: any) => {
    if (data && data.id != this.state.take) {
      const newTake = data.id;
      const newPage = this.getPage(newTake, this.state.skip, this.props.total);
      const newSkip = newTake * (newPage - 1);

      const newState = {
        take: newTake,
        page: newPage,
        skip: newSkip,
      };
      this.setState(newState, function () {
        this.props.onPageChange(this.state.page, this.state.take, this.state.skip);
      });
    }
  };

  getPage = (take: number, skip: number, total: number) => {
    if (total != null && take >= total) {
      return 1; // Set the page to 1
    }
    return Math.floor((skip + take) / take);
  };

  componentWillReceiveProps(nextProps: UpPaginationProps) {
    if (nextProps.take != undefined) {
      const newState = {
        take: nextProps.take,
        skip: nextProps.skip,
        page: this.getPage(nextProps.take, nextProps.skip, nextProps.total),
      };
      this.setState(newState);
    }
  }

  inRange(curPage, pagevalue, distance) {
    const absRange = Math.abs(curPage - pagevalue);
    if (absRange < distance) {
      return true;
    }
    return false;
  }

  render() {
    const maxPage = this.getMaxPage();

    const from = this.state.skip + 1;
    let to = from + this.state.take - 1;
    if (to > this.props.total) to = this.props.total;

    let pageNumberNavigation = <span />;

    const pages = this.props.generatePagesNavigation(this.state.page, this.props.total, this.state.take);

    if (!isEmpty(pages)) {
      const paginationItemClass = classnames(paginationItemStyle(this.props), 'up-pagination-page');

      let PageNumber: any = <span />;

      PageNumber = pages.map((value, index) => {
        if (value === 0) {
          return (
            <li key={`page-${index}`} className={classnames(paginationItemClass, 'disabled')}>
              <a onClick={e => e.preventDefault()} href="#">
                {this.props.paginationNavigationSeparator ? this.props.paginationNavigationSeparator : '..'}
              </a>
            </li>
          );
        }

        return (
          <li
            key={`page-${index}`}
            className={classnames(this.state.page == value ? 'active' : '', paginationItemClass)}
            onClick={this.goTo.bind(this, value)}
          >
            <a onClick={e => e.preventDefault()} href="#">
              {value}
            </a>
          </li>
        );
      });

      pageNumberNavigation = (
        <nav className={'up-pagination-nav'}>
          <ul className={paginationStyle}>
            <li
              key={`page-prev`}
              className={classnames(
                'up-pagination-page-prev',
                this.state.page == 1 ? 'disabled' : 'active',
                paginationItemClass
              )}
              onClick={this.goToPreviousPage}
            >
              <a onClick={e => e.preventDefault()} href="#" aria-label="Previous">
                <span
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html: this.props.previousLabel,
                  }}
                />
              </a>
            </li>
            {PageNumber}
            <li
              key={`page-next`}
              className={classnames(
                'up-pagination-page-next',
                this.state.page == maxPage ? 'disabled' : 'active',
                paginationItemClass
              )}
              onClick={this.goToNextPage}
            >
              <a href="#" aria-label="Next" onClick={e => e.preventDefault()}>
                <span
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html: this.props.nextLabel,
                  }}
                />
              </a>
            </li>
          </ul>
        </nav>
      );
    }

    return (
      <UpGrid
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        className={'up-pagination-wrapper'}
      >
        <UpRow>
          {this.props.renderResultMessage(this.props.theme, from, to, this.props.total)}
          {pageNumberNavigation}
        </UpRow>
      </UpGrid>
    );
  }
}

export default withTheme<UpPaginationProps>(UpPagination);
