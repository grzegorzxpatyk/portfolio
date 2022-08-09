import { styled } from "../styles/stitches";

const Navbar = styled("nav", {
  "& ul": {
    padding: 0,
    margin: 0,
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& li": {
      margin: "0 min(1rem, 1vw)",
      "&:first-of-type": {
        margin: "0 min(1rem, 1vw) 0 0"
      },
      "&:last-of-type": {
        margin: "0 0 0 min(1rem, 1vw)"
      }
    }
  }
});

export default Navbar;
