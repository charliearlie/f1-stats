import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, createStyles } from "@material-ui/styles";

import { StyledListItemText } from "./styles/dropdown";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 100,
    backgroundColor: "#fff",
    borderRadius: "4px",
    border: "1px solid #bbb"
  }
}));

const ITEM_HEIGHT = 48;

function Dropdown({ afterChange, options, startingOption }) {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(startingOption || 1);
  const open = Boolean(anchorEl);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    afterChange(options[index]);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return options ? (
    <div className={styles.root}>
      <List component="nav" aria-label="Change season" disablePadding>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="change year"
          onClick={handleClickListItem}
        >
          <StyledListItemText>{options[selectedIndex]}</StyledListItemText>
        </ListItem>
      </List>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200
          }
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  ) : null;
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired
};

export default Dropdown;
