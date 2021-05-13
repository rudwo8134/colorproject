import sizes from './sizes'
import bg from './bg.svg'
export default {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
     /* background by SVGBackgrounds.com */
    backgroundColor: "#000000",
    backgroundImage: `url(${bg})`,
    overflow: "scroll",
     "& h1":{
       fontSize: "2rem",
       [sizes.down("sm")]:{
         fontSize: "1.5rem"
       }
     }
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]:{
      width: "80%",
    },
    [sizes.down("sm")]:{
      width: "70%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]:{
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("sm")]:{
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem"
    },
  }
};
