import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { alertClear } from "../redux/Alert.actions";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

const SnackbarAlert = () => {
  const message = useSelector(state => state.AlertReducer.message);
  const openAlert = useSelector(state => state.AlertReducer.open);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const classes = useStyles();

  React.useEffect(() => {
    if (openAlert) {
      setOpen(true);
      setTimeout(function() {
        dispatch(alertClear());
        setOpen(false);
      }, 3000);
    }
  });

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
};

export default SnackbarAlert;
