import * as React from "react";
import * as classnames from "classnames";

import { UpGrid, UpRow, UpCol } from "../../Containers/Grid";
import UpSelect, { UpSelectOption } from "../../Inputs/Select";

import { style } from "typestyle";
import withTheme, { WithThemeProps } from "../../../Common/theming/withTheme";
import defaultTheme, { UpThemeInterface } from "../../../Common/theming";
import UpBox from "../Box";
import { isEmpty } from "../../../Common/utils";

const getMaxPage = (take, total): number => {
  if (isEmpty(take)) {
    return 0;
  }
  return Math.ceil(total / take);
};

const generatePagesNavigation = (page, total, take): Array<number> => {
  let pages: Array<number> = [];

  // Get the max page
  const maxPage = getMaxPage(take, total);

  if (maxPage >= 2) {
    if (maxPage <= 8) {
      pages = Array.from({ length: maxPage }, (_, i) => i + 1);
    } else {
      // Get the 4 first pages, the last 3 pages and the current one
      [1, 2, 3, 4].map(v => pages.push(v));

      // push an empty link if only at least 2 steps after
      if (page != 5) pages.push(0);

      if (page > 4 && page < maxPage - 2) {
        pages.push(page);
      }

      if (page != maxPage - 3) pages.push(0);

      // and the last 3 pages
      [maxPage - 2, maxPage - 1, maxPage].map(v => pages.push(v));
    }
  }
  return pages;
};

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
  /** Afficher la pagination de façon flexible ou avec des colonnes */
  paginationNumberSpanSize?: number;
  /** generate the pages navigation */
  generatePagesNavigation?: (page, total, take) => Array<number>;
  /** Affihage du nombre de résultats */
  renderResultMessage?: (
    theme: UpThemeInterface,
    from: number,
    to: number,
    total: number
  ) => JSX.Element;
  /** Notification de du changement de l'état de la pagination */
  onPageChange: (page: number, take: number, skip: number) => void;
}

const paginationStyle = style({
  margin: "0px 4px",
  listStyle: "none",
  display: "inline-block",
  paddingLeft: "0",
  borderRadius: "4px"
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
const itemHover = (props: WithThemeProps) => ({
  color: props.theme.colorMap.primaryFg,
  backgroundColor: props.theme.colorMap.primary,
  borderColor: props.theme.colorMap.primaryDark
});

const itemActive = (props: WithThemeProps) => ({
  color: props.theme.colorMap.primaryFg,
  backgroundColor: props.theme.colorMap.primary,
  borderColor: props.theme.colorMap.primary,
  cursor: "not-allowed"
});

const itemDisabled = (props: WithThemeProps) => ({
  color: "#777",
  cursor: "not-allowed",
  backgroundColor: "#fff",
  borderColor: props.theme.colorMap.defaultBorder
});

const paginationItemStyle = (props: WithThemeProps) => {
  const itemHoverStyle = itemHover(props);
  const itemActiveStyle = itemActive(props);
  const itemDisabledStyle = itemDisabled(props);

  return style({
    display: "inline",
    $nest: {
      "& > a": {
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
      "& a:hover": itemHoverStyle,
      "& a:focus": itemHoverStyle,
      "& span:hover": itemHoverStyle,
      "& span:focus": itemHoverStyle,
      "&.active > a": itemActiveStyle,
      "&.active > span": itemActiveStyle,
      "&.active > a:hover": itemActiveStyle,
      "&.active > span:hover": itemActiveStyle,
      "&.active > a:focus": itemActiveStyle,
      "&.active > span:focus": itemActiveStyle,
      "&.disabled > a": itemDisabledStyle,
      "&.disabled > span": itemDisabledStyle,
      "&.disabled > a:hover": itemDisabledStyle,
      "&.disabled > span:hover": itemDisabledStyle,
      "&.disabled > a:focus": itemDisabledStyle,
      "&.disabled > span:focus": itemDisabledStyle
    }
  });
};

const paginationCounterStyle = (props: WithThemeProps) =>
  style({
    margin: "0px 0px",
    color: props.theme.colorMap.primary,
    backgroundColor: props.theme.colorMap.primaryFg,
    borderRadius: "4px",
    padding: "6px 12px",
    lineHeight: "1.43",
    textDecoration: "none",
    border: `1px solid ${props.theme.colorMap.primary}`,
    float: "right"
  });

class UpPagination extends React.Component<
  UpPaginationProps & WithThemeProps,
  UpPaginationState
> {
  static defaultProps: UpPaginationProps & WithThemeProps = {
    nbByPageMessage: "Par page",
    isTakeChangeEnable: true,
    isExtraInfoDisplay: true,
    takes: [
      { id: 20, text: "20" },
      { id: 50, text: "50" },
      { id: 100, text: "100" },
      { id: 200, text: "200" }
    ],
    total: 0,
    theme: defaultTheme,
    previousLabel: "&laquo;",
    nextLabel: "&raquo;",
    generatePagesNavigation: generatePagesNavigation,
    onPageChange: (page: number, take: number, skip: number) => {},
    renderResultMessage: (
      theme: UpThemeInterface,
      from: number,
      to: number,
      total: number
    ) => (
      <span
        className={classnames(
          "up-pagination-result-message",
          paginationCounterStyle({ theme })
        )}
      >
        {total == 0 && <span>Aucun résultat</span>}
        {total != 0 && (
          <span>
            <span>R&eacute;sultat(s)&nbsp;</span>
            <span>{from}</span>
            <span> &agrave; </span>
            <span>{to}</span>
            <span> sur </span>
            <span>{total}</span>
          </span>
        )}
      </span>
    )
  };

  constructor(props, context) {
    super(props);

    this.state = {
      page: this.getPage(this.props.take || 50, this.props.skip || 0),
      skip: this.props.skip || 0,
      take: this.props.take || 50
    };
  }

  goToPreviousPage = () => {
    if (this.state.page > 1) {
      const previousPage = this.state.page - 1;
      const newState = {
        page: previousPage,
        skip: (previousPage - 1) * this.state.take
      };
      this.setState(newState, () => {
        this.props.onPageChange(
          this.state.page,
          this.state.take,
          this.state.skip
        );
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
        skip: (nextPage - 1) * this.state.take
      };
      this.setState(newState, () => {
        this.props.onPageChange(
          this.state.page,
          this.state.take,
          this.state.skip
        );
      });
    }
  };

  goTo = (page: number) => {
    const newState = { page: page, skip: (page - 1) * this.state.take };
    this.setState(newState, () => {
      this.props.onPageChange(
        this.state.page,
        this.state.take,
        this.state.skip
      );
    });
  };

  onTakeChange = (event, data: any) => {
    if (data && data.id != this.state.take) {
      const newTake = data.id;
      const newPage = this.getPage(newTake, this.state.skip);
      const newSkip = newTake * (newPage - 1);

      const newState = { take: newTake, page: newPage, skip: newSkip };
      this.setState(newState, function() {
        this.props.onPageChange(
          this.state.page,
          this.state.take,
          this.state.skip
        );
      });
    }
  };

  getPage = (take: number, skip: number) => {
    if (this.props.total != null && take >= this.props.total) {
      return 1; // Set the page to 1
    }
    return Math.floor((skip + take) / take);
  };

  componentWillReceiveProps(nextProps: UpPaginationProps) {
    if (nextProps.take != undefined) {
      const newState = {
        take: nextProps.take,
        skip: nextProps.skip,
        page: this.getPage(nextProps.take, nextProps.skip)
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
    let currentPage = 1;
    let maxPage = this.getMaxPage();

    let from = this.state.skip + 1;
    let to = from + this.state.take - 1;
    if (to > this.props.total) to = this.props.total;

    const takes = this.props.takes;

    let pageNumberNavigation = <span />;

    const pages = this.props.generatePagesNavigation(
      this.state.page,
      this.props.total,
      this.state.take
    );

    if (!isEmpty(pages)) {
      const paginationItemClass = classnames(
        paginationItemStyle(this.props),
        "up-pagination-page"
      );

      let PageNumber: any = <span />;

      PageNumber = pages.map((value, index) => {
        if (value === 0) {
          return (
            <li
              key={`page-${index}`}
              className={classnames(paginationItemClass, "disabled")}
            >
              <a onClick={e => e.preventDefault()} href="#">
                ..
              </a>
            </li>
          );
        }

        return (
          <li
            key={`page-${index}`}
            className={classnames(
              this.state.page == value ? "active" : "",
              paginationItemClass
            )}
            onClick={this.goTo.bind(this, value)}
          >
            <a onClick={e => e.preventDefault()} href="#">
              {value}
            </a>
          </li>
        );
      });

      pageNumberNavigation = (
        <nav className={"up-pagination-nav"}>
          <ul className={paginationStyle}>
            <li
              key={`page-prev`}
              className={classnames(
                "up-pagination-page-prev",
                this.state.page == 1 ? "disabled" : "",
                paginationItemClass
              )}
              onClick={this.goToPreviousPage}
            >
              <a
                onClick={e => e.preventDefault()}
                href="#"
                aria-label="Previous"
              >
                <span
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: this.props.previousLabel }}
                />
              </a>
            </li>
            {PageNumber}
            <li
              key={`page-next`}
              className={classnames(
                "up-pagination-page-next",
                this.state.page == maxPage ? "disabled" : "",
                paginationItemClass
              )}
              onClick={this.goToNextPage}
            >
              <a href="#" aria-label="Next" onClick={e => e.preventDefault()}>
                <span
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: this.props.nextLabel }}
                />
              </a>
            </li>
          </ul>
        </nav>
      );
    }

    const paginationTakes = (
      <UpBox
        flexDirection={"row"}
        alignItems={"baseline"}
        justifyContent={"flex-end"}
      >
        <div
          className={"up-pagination-takes"}
          style={{ width: "120px", marginRight: "12px" }}
        >
          <UpSelect
            placeholder={this.props.nbByPageMessage}
            default={{
              id: this.props.take,
              text: this.props.take
            }}
            data={takes}
            onChange={this.onTakeChange}
          />
        </div>
        {this.props.renderResultMessage(
          this.props.theme,
          from,
          to,
          this.props.total
        )}
      </UpBox>
    );

    return (
      <UpGrid className={"up-pagination-wrapper"}>
        <UpRow>
          <UpCol
            span={
              this.props.paginationNumberSpanSize
                ? this.props.paginationNumberSpanSize
                : 14
            }
          >
            {pageNumberNavigation}
          </UpCol>
          <UpCol span={1} />
          <UpCol
            span={
              this.props.paginationNumberSpanSize
                ? 21 - this.props.paginationNumberSpanSize
                : 9
            }
          >
            {paginationTakes}
          </UpCol>
        </UpRow>
      </UpGrid>
    );
  }
}

export default withTheme<UpPaginationProps>(UpPagination);
