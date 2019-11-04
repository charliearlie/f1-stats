import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    fieldset: {
      background: "white",
      borderRightColor: "black",
      borderRightStyle: "solid",
      borderRightWidth: "2px",
      borderTopColor: "black",
      borderTopStyle: "solid",
      borderTopWidth: "2px",
      borderBottom: "none",
      borderLeft: "none",
      borderRadius: "5px",
      padding: "10px",
      paddingInlineStart: "0em",
      "& p": {
        margin: 0
      }
    },
    legend: {
      color: "#e10600",
      fontWeight: "bold",
      paddingRight: "5px",
      textTransform: "uppercase"
    }
  })
);
function Preview({ children, legend }) {
  const styles = useStyles();
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
}

export default Preview;
