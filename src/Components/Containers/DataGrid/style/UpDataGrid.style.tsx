import { UpDataGridProps } from '../model/UpDataGridModel';
import { WithThemeProps } from '../../../../Common/theming';
import { media, style } from 'typestyle';
import { DeviceSmartphones } from '../../../../Common/utils/device';

export const DataGridStyle = (props: UpDataGridProps & WithThemeProps) =>
  style(
    {
      width: '100%',
      borderRadius: props.theme.borderRadius,
      borderSpacing: 0,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: props.theme.colorMap.defaultBorder,
      color: props.theme.colorMap.darkGray5,
      fontSize: '14px',
      $nest: {
        '& .up-data-grid-header': {
          backgroundColor: 'white',
          backgroundRepeat: 'repeat-x',
          fontWeight: 700,
          fontSize: '12px',
        },
        '& .up-data-grid-header .up-checkbox': {
          marginTop: '8px',
          marginBottom: '8px',
          marginLeft: '7px',
        },
        '& .up-data-grid-body': {
          background: 'white',
        },
        '& .up-selection': {
          width: '0.2em',
        },
        '& .up-display-label, & .up-display-value': CellInnerElementStyle,
        '& .up-data-grid-header-cell': {
          textAlign: 'left',
          padding: '8px',
          paddingLeft: '14px',
          borderCollapse: 'collapse',
          borderColor: 'transparent',
          borderRadius: props.theme.borderRadius,
        },
        '& .up-data-grid-header-cell-label': {
          fontSize: '14px',
          color: props.theme.colorMap.grey1,
        },
        '& .up-data-grid-header-cell.up-data-grid-header-cell-selection': {
          width: '32px',
          paddingLeft: '8px',
        },
        '& .up-data-grid-header-cell.up-data-grid-header-cell-selection .up-checkbox': {
          marginLeft: '1px',
        },
        '& .up-data-grid-cell': {
          padding: '16px',
          position: 'relative',
          verticalAlign: props.alignCells,
          textAlign: props.textAlignCells,
          $nest: {
            '& .up-buttons-wrapper': {
              justifyContent:
                props.textAlignCells === 'center'
                  ? 'center'
                  : props.textAlignCells === 'left'
                  ? 'flex-start'
                  : props.textAlignCells === 'right'
                  ? 'flex-end'
                  : 'normal',
            },
            '& .up-badge': {
              padding: '4px 6px',
            },
          },
          //width:'100%'
        },
        '& .up-data-grid-cell .up-checkbox .up-control-indicator::before': {
          left: '0px',
        },
        '& .up-data-grid-cell .up-checkbox': {
          marginTop: '0 !important',
          display: 'inline-block',
        },
        '& .up-data-grid-cell .row-actions': {
          position: 'absolute',
          display: 'none',
          width: '300px',
          bottom: '3px',
          justifyContent: 'space-between',
          zIndex: 1,
        },
        '& .up-data-grid-cell .row-action': {
          color: props.theme.colorMap.primary,
          cursor: 'pointer',
        },
        '& .up-data-grid-cell .row-action:hover, & .up-data-grid-cell .row-action-delete:hover': {
          textDecoration: 'underline',
        },
        '& .up-data-grid-cell .row-action-delete': {
          color: props.theme.colorMap.errorActive,
          cursor: 'pointer',
        },
        '& .up-data-grid-row': {
          verticalAlign: 'top',
        },
        '& .up-data-grid-row:hover .row-actions': {
          display: 'flex',
        },
        '& .up-data-grid-row-bordered': {
          $nest: {
            '.up-data-grid-cell': {
              borderTop: `1px solid ${props.theme.colorMap.defaultBorder}`,
              borderCollapse: 'collapse',
            },
          },
        },
        '& .up-data-grid-row-bordered:last-child': {
          $nest: {
            '.up-data-grid-cell': {
              border: '0',
              borderRadius: props.theme.borderRadius,
            },
          },
        },
        '& .up-data-grid-row-borderless': {
          $nest: {
            '.up-data-grid-cell': {
              border: '0',
            },
          },
        },
        '& .up-data-grid-row-selected': {
          $nest: {
            '& .up-data-grid-cell': {
              borderTop: `0.1em solid ${props.theme.colorMap.primaryDark}`,
              borderBottom: `0.1em solid ${props.theme.colorMap.primaryDark}`,
              backgroundColor: props.theme.colorMap.primary,
              color: props.theme.colorMap.primaryFg,
            },
          },
        },
        '& .up-data-grid-sortable': {
          cursor: 'pointer',
        },
      },
    },
    media(DeviceSmartphones, {
      $nest: {
        '& .up-data-grid-header-cell-label': {
          whiteSpace: 'nowrap',
        },
      },
    })
  );

export const WrapperDataGridStyle = style(
  {
    position: 'relative',
  },
  media(DeviceSmartphones, {
    $nest: {
      '& .up-loading-indicator': {
        overflowX: 'auto',
      },
    },
  })
);

const CellInnerElementStyle = {
  marginTop: '0.3em',
};
