import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Avatar } from "@material-ui/core";
import Logo from "../../Media/GYC logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import LocalCarWashIcon from "@material-ui/icons/LocalCarWash";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import FlareIcon from "@material-ui/icons/Flare";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    width: "80px",
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "fit-content",
    },
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(3),
      width: "auto",
      fontWeight: 900,
    },
    // [theme.breakpoints.up('sm')]: {
    //
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/quiz">
          <IconButton aria-label="show 4 new mails" color="inherit">
            <LocalCarWashIcon />
          </IconButton>
          <p>Guess Car</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/quiz">
          <IconButton aria-label="show 4 new carts" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <DriveEtaIcon />
            </Badge>
          </IconButton>
          <p>Upcoming Car</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/quiz">
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <SpeakerNotesIcon />
          </IconButton>
          <p>Testimonials</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/quiz">
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <NotificationsIcon />
          </IconButton>
          <p>Tips</p>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className="container-fluid">
      <div className="w-100">
        <AppBar elevation={0} color="transparent" position="static">
          <Toolbar>
            <Link to="/">
              <Avatar variant="square" className={classes.avatar} src={Logo} />{" "}
            </Link>

            <div className={classes.search}>
              <Link to="/">
                <Typography variant="h4" style={{ fontWeight: 800 }}>
                  <span className="text-primary">G</span>uess
                  <span className="text-success">Y</span>our
                  <span className="text-danger">C</span>ar
                </Typography>
              </Link>
            </div>
            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              <MenuItem>
                <Link to="/quiz">Guess Car </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Upcoming Car</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Testimonials</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Tips</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/login">Login</Link>
              </MenuItem>
              <MenuItem>English</MenuItem>

              <MenuItem>
                <FacebookIcon style={{ color: "#3b5998" }} />
              </MenuItem>
              <MenuItem>
                <TwitterIcon style={{ color: "#00acee" }} />
              </MenuItem>

              <MenuItem>
                <YouTubeIcon style={{ color: "#c4302b" }} />
              </MenuItem>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </div>
  );
}
