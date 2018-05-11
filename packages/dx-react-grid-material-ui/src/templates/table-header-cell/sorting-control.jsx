import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TableSortLabel } from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';
import { withStyles } from 'material-ui/styles';
import HelpOutlineIcon from 'material-ui-icons/HelpOutline';
import { Popover } from 'material-ui';

const styles = theme => ({
  tooltipRoot: {
    display: 'block',
  },
  sortLabelRoot: {
    height: theme.spacing.unit * 3,
    maxWidth: '100%',
  },
  sortLabelActive: {
    color: 'inherit',
  },
  sortLabelText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

const SortingControlBase = ({
  align, sortingDirection, columnTitle, onClick, classes, getMessage, disabled, hint
}) => (
  <div style={{display: 'flex'}}>
    {hint &&
      <Tooltip
        title={hint}
      >
        <HelpOutlineIcon style={{width: 16, height: 16, paddingTop: 4, paddingRight: 2}}/>
      </Tooltip>
    }
    <Tooltip
      title={getMessage('sortingHint')}
      placement={align === 'right' ? 'bottom-end' : 'bottom-start'}
      enterDelay={300}
      classes={{
        root: classes.tooltipRoot,
      }}
    >
      <TableSortLabel
        active={!!sortingDirection}
        direction={sortingDirection === null ? undefined : sortingDirection}
        onClick={onClick}
        disabled={disabled}
        classes={{
          root: classes.sortLabelRoot,
          active: classes.sortLabelActive,
        }}
      >
          {columnTitle}
      </TableSortLabel>
    </Tooltip>
  </div>
);

SortingControlBase.propTypes = {
  align: PropTypes.string.isRequired,
  sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
  columnTitle: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  hint: PropTypes.node,
  disabled: PropTypes.bool,
};

SortingControlBase.defaultProps = {
  sortingDirection: undefined,
  disabled: false,
};

export const SortingControl = withStyles(styles, { name: 'SortingControl' })(SortingControlBase);
