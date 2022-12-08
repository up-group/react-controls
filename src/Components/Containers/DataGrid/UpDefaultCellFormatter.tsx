import * as React from 'react';
import moment from 'moment';

import { Column, Row } from './UpDataGrid/UpDataGrid.types';
import UpBadge from '../../Display/Badge/index';
import { isEmpty } from '../../../Common/utils/index';

import UpLink from '../../Display/Link/index';
import UpSvgIcon from '../../Display/SvgIcon/index';

import { IconName } from '../../../Common/theming/icons';

export interface ICellFormatter {
  format: (item: any, column: Column, additionalProps?: any) => React.ReactElement<any>;
}

export default class UpDefaultCellFormatter implements ICellFormatter {
  getValue = (value, column) => {
    const field = column.field;
    const pathParts = field.split('.');
    let valueExtracted;
    if (pathParts.length == 1) {
      valueExtracted = value[field];
    } else {
      const nextValue = value[pathParts[0]];
      const nextPath = pathParts.slice(1).join('.');
      if (nextPath != null) {
        valueExtracted = this.getValue(nextValue, {
          field: nextPath,
        });
      } else {
        valueExtracted = nextValue;
      }
    }
    let result: any = '';
    const type = column.type;
    if (field) {
      switch (type) {
        case 'link':
          if (!isEmpty(valueExtracted)) {
            const href = valueExtracted;
            if (valueExtracted.href !== undefined) {
              valueExtracted = valueExtracted.href;
            }
            let icon: IconName = 'link';
            if (valueExtracted.icon !== undefined) {
              icon = valueExtracted.icon;
            }
            result = (
              <UpLink
                href={valueExtracted}
                onClick={e => {
                  window.open(valueExtracted);
                }}
              >
                <UpSvgIcon iconName={icon} />
              </UpLink>
            );
          }
          break;
        case 'file':
          // TODO
          break;
        case 'date':
          // var _format = c.format;
          // if (_format) {
          //     try {
          //         var _data = eval("self.item." + field);
          //         result = new moment(_data).format(_format);
          //     } catch (exception) {
          //         console.log(exception)
          //     }
          // } else {
          //     result = eval("self.item." + field);
          // }
          break;
        default:
          if (valueExtracted != undefined) {
            // On regarde s'il est défini une couleur
            let _couleur = undefined;
            if (typeof valueExtracted['Couleur'] != 'undefined') _couleur = valueExtracted['Couleur'];

            if (_couleur == undefined) {
              result = valueExtracted;
            } else {
              let _libelle = '';
              if (typeof valueExtracted['Libelle'] != 'undefined') _libelle = valueExtracted['Libelle'];

              if (_libelle == undefined) {
                _libelle = '';
              }
              result = <UpBadge text={_libelle} background={_couleur} />;
            }
          } else {
            result = '';
          }
          break;
      }
    }
    return result;
  };

  format = (item: any, column: Column) => {
    let result = item;
    if (column && column.field) {
      result = this.getValue(item, column);
    }
    return <div>{result}</div>;
  };
}

export interface UpCellFormatterProps {
  column: Column;
  value: any;
}

interface UpCellFormatterState {}

export class UpCellFormatter extends React.Component<UpCellFormatterProps, {}> {
  constructor(p, c) {
    super(p, c);
    this.state = {};
  }

  render() {
    if (this.props.column.formatter != null) {
      const additionalProps =
        this.props.column.getFormatterProps &&
        this.props.column.getFormatterProps(this.props.value[this.props.column.field]);
      return this.props.column.formatter.format(this.props.value, this.props.column, additionalProps || {});
    }
    let valueExtracted = null;

    if (this.props.column.field) {
      valueExtracted = this.props.value[this.props.column.field];
    }

    if (valueExtracted == null) {
      return <span>{this.props.children}</span>;
    }

    switch (this.props.column.type) {
      case 'link':
        if (!isEmpty(valueExtracted)) {
          const href = valueExtracted;
          if (valueExtracted.href !== undefined) {
            valueExtracted = valueExtracted.href;
          }
          let icon: IconName = 'link';
          if (valueExtracted.icon !== undefined) {
            icon = valueExtracted.icon;
          }
          return (
            <UpLink
              href={valueExtracted}
              onClick={e => {
                window.open(valueExtracted);
              }}
            >
              <UpSvgIcon iconName={icon} />
            </UpLink>
          );
        }
        break;
      case 'file':
        // TODO
        break;
      case 'date':
        return <span>{moment(valueExtracted).format('DD/MM/YYYY')}</span>;
      case 'date-time':
        return <span>{moment(valueExtracted).format('DD/MM/YYYY HH:mm')}</span>;
      case 'time':
        return <span>{moment(valueExtracted).format('HH:mm')}</span>;
      case 'multilineText':
        return <span>{valueExtracted}</span>;
      case 'boolean':
        switch (valueExtracted) {
          case true:
            return <UpBadge text={'Oui'} background={'green'} />;
          case false:
            return <UpBadge text={'Non'} background={'red'} />;
          default:
            return <span />;
        }
      default:
        if (valueExtracted != undefined) {
          // On regarde s'il est défini une couleur
          let _couleur = undefined;
          if (typeof valueExtracted['Couleur'] != 'undefined') _couleur = valueExtracted['Couleur'];

          if (_couleur != null) {
            let _libelle = '';
            if (typeof valueExtracted['Libelle'] != 'undefined') _libelle = valueExtracted['Libelle'];

            if (_libelle == undefined) {
              _libelle = '';
            }
            return <UpBadge text={_libelle} background={_couleur} />;
          }
        }
        if (Array.isArray(valueExtracted)) {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {valueExtracted.map((element, index) => (
                <p key={`-${index}`}>{element}</p>
              ))}
            </div>
          );
        }
        return <p>{valueExtracted == null ? '' : valueExtracted}</p>;
    }

    return <div></div>;
  }
}
