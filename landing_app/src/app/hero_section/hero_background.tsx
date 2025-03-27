import React from "react";

const HeroBackground: React.FC = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.text}>
          Systems built to Power the Next Generation of Businesses.
        </h1>
        <div>
          <h2 style={styles.subtext}>
            Dismantling the complexity of traditional business software through
            automation.
          </h2>
        </div>
      </div>
    </>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    backgroundImage: "radial-gradient(circle, #1a1a1a, #000000)",
  },
  text: {
    fontSize: "4rem",
    color: "#FFFFFF", // Nice white
    textShadow:
      "0 0 1px #FFFFFF, 0 0 3px #FFFFFF, 0 0 6px #FFFFFF, 0 0 1px #FFFFFF",
    fontFamily: "Roboto, Arial, sans-serif",
    maxWidth: "80%",
    textAlign: "center",
  },
  subtext: {
    fontSize: "1.5rem",
    color: "#CCCCCC",
    textAlign: "center",
    fontFamily: "Roboto, Arial, sans-serif",
    marginTop: "1rem",
  },
};
export default HeroBackground;
