import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import {CSSTransition,TransitionGroup} from "react-transition-group"
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import Avatar from "@material-ui/core/Avatar"
import blue from "@material-ui/core/colors/blue"
import red from "@material-ui/core/colors/red"


class PaletteList extends Component {
  constructor(props){
    super(props);
    this.state = {
      openDialog : false,
      deletingId:""
    }
    this.openD = this.openD.bind(this)
    this.closeD = this.closeD.bind(this)
    this.handledelete = this.handledelete.bind(this)
  }
  openD(id){
    this.setState({openDialog:true, deletingId: id})

  }
  closeD(){
    this.setState({openDialog:false, deletingId: ""})
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  handledelete(){
    this.props.deletePalette(this.state.deletingId)
    this.closeD();
  }
  render() {
    const { palettes, classes,deletePalette} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Eric's color</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>
            <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
                // handlePalette={deletePalette}
                openDialog={this.openD}
                key={palette.id}
                id={palette.id}
              />
              </CSSTransition>
            ))}
            </TransitionGroup>
          </div>
          <Dialog open={this.state.openDialog} arial-labelledby="delete-dialog-title" onClose={this.closeD}>
              <DialogTitle id="delete-dialog-title">Do you want to delete this palette?</DialogTitle>
              <List>
                <ListItem button onClick={this.handledelete}>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                      <CheckIcon></CheckIcon>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Delete">Delete</ListItemText>
                </ListItem>
                <ListItem button onClick={this.closeD}>
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                      <CloseIcon></CloseIcon>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Cancel">Cancel</ListItemText>
                </ListItem>
              </List>
          </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
