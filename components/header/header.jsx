import Link from "next/link";
import { makeStyles, createStyles } from "@material-ui/styles";
import { SubheaderNavigationContent } from "../../utils/navigation-content";

const useStyles = makeStyles(theme =>
  createStyles({
    headerWrapper: {
      position: "fixed",
      background: "#fff",
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.19)",
      height: "120px",
      justifyContent: "space-between",
      top: 0,
      width: "100%",
      zIndex: 5
    },
    header: {
      display: "flex",
      alignItems: "center",
      height: "55px",
      margin: "auto",
      maxWidth: "1200px",
      width: "100%"
    },
    headerContent: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      justifyContent: "space-between",
      maxWidth: "1200px",
      width: "100%"
    },
    nav: {
      display: "flex",
      alignItems: "center"
    },
    navItem: {
      color: "black",
      marginRight: "10px",
      textDecoration: "none"
    },
    titleWrapper: {
      margin: 0
    },
    title: {
      color: "black",
      textDecoration: "none",
      textTransform: "uppercase"
    },
    subHeader: {
      display: "flex",
      alignItems: "center",
      background: "#e10600",
      height: "65px",
      justifyContent: "center"
    },
    list: {
      display: "flex",
      listStyleType: "none",
      margin: 0,
      maxWidth: "1200px",
      padding: 0
    },
    listItem: {
      color: "white",
      fontWeight: 500,
      fontSize: "18px",
      marginRight: "25px"
    }
  })
);

function Header(props) {
  const styles = useStyles(props);
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.titleWrapper}>
            <Link href="/">
              <a className={styles.title}>F1 Stats</a>
            </Link>
          </h2>
          <nav className={styles.nav}>
            <div className={styles.navItem}>
              <Link href="/about">
                <a className={styles.navItem}>Stats</a>
              </Link>
            </div>
            <div className={styles.navItem}>Races</div>
            <div className={styles.navItem}>
              <Link href="/qualifying">
                <a className={styles.navItem}>Qualifying</a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className={styles.subHeader}>
        <div className={styles.headerContent}>
          <ul className={styles.list}>
            {SubheaderNavigationContent.map(item => (
              <li className={styles.listItem}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
