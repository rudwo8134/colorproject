import React,{Component} from "react"
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {ChromePicker} from 'react-color'
import Button from '@material-ui/core/Button'
import { colors } from "@material-ui/core";
import Draggable from './draggable'
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator"

const drawerWidth = 400;

const styles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      height: "calc(100vh - 64px)",
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  });
  

class newpalette extends Component{
    constructor(props){
        super(props);
        this.state={
            open: true,
            currentColor: 'teal',
            colors:[{color: "blue", name:"blue"}],
            newname:""
        }
        this.updateCurrentColor= this.updateCurrentColor.bind(this)
        this.addnewColor= this.addnewColor.bind(this)
        this.handlechange=this.handlechange.bind(this)
        this.savePalette=this.savePalette.bind(this)
    }  
    componentDidMount(){
        ValidatorForm.addValidationRule("isNameUnique", value => 
        this.state.colors.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        )
      );
      ValidatorForm.addValidationRule("isColorUnique", value => 
        this.state.colors.every(
          ({ color }) => color !== this.state.currentColor
        )
      );
    }
      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
      handleDrawerClose = () => {
        this.setState({ open: false });
      };
      updateCurrentColor(newColor){
          this.setState({currentColor:newColor.hex})
      }
      addnewColor(){
          let newColor = {color: this.state.currentColor, name:this.state.newname}
          this.setState({colors:[...this.state.colors, newColor], newname:""})
      }
      handlechange(evt){
          this.setState({newname: evt.target.value })
      }
      savePalette(){
          let newname= "New  test platte"
          const newPalette = {paletteName:newname,id: newname.toLowerCase().replace(/ /g, "-"), colors:this.state.colors}
          this.props.savePalette(newPalette)
          this.props.history.push("/")
      }
      render() {
        const { classes} = this.props;
        const { open } = this.state;
    
        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              color="default"
              position="fixed"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Persistent drawer
                </Typography>
                <Button variant="contained" color="primary" onClick={this.savePalette}>Save Palette</Button>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <Typography variant="h4">Design your palette</Typography>
              <div>
              <Button variant="contained" color="secondary">clear Color</Button>
              <Button variant="contained" color="primary">random Color</Button>
              </div>
              <ChromePicker 
              color={this.state.currentColor} 
              onChangeComplete={this.updateCurrentColor}/>
              <ValidatorForm onSubmit={this.addnewColor}>
                  <TextValidator value={this.state.newname} onChange={this.handlechange}
                  validators={["required","isNameUnique", "isColorUnique"]}
                  errorMessages={["Enter your color name😤", "Color name must be unique😱", "you can not add same color😥"]}/>
                  <Button variant="contained" color ="primary" style={{backgroundColor:this.state.currentColor}} type="submit">Add Color</Button>
              </ValidatorForm>
             
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
                 {this.state.colors.map(color=>(
                     <Draggable color={color.color} name={color.name}/>
                 ))}
             
            </main>
          </div>
        );
      }
}
export default withStyles(styles, { withTheme: true })(newpalette);
