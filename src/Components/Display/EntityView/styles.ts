import { style } from 'typestyle';
import { toRem } from '../../../Common/theming/utils';

export const getStyles = () => style({
    $nest: {
        '& .up-entity-view-title': {
            fontSize: toRem(18),
            fontWeight: 'bold',
            marginBottom: toRem(15),
            color: '#596664'
        },
        '& .up-entity-view-content': {
            margin: `${toRem(10)} ${toRem(0)}`,
            color: '#596664',
            marginLeft: toRem(30)
        }
    }
});