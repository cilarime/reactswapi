import "../styles/loading.module.css";
import styles from "../styles/loading.module.css";

const Loading = (props) => {
  const { loading, color } = props;
  if (!loading) return null;

  const style = {
    color: color,
  };

  //blev ingen loading animation til slut utan bara en text!
  return (
    <div className={styles.loading_style}>
      <p style={style}>Please wait while Loading ......</p>
    </div>
  );
};

export default Loading;
