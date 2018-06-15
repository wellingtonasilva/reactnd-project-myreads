import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { BooksShelf } from  './BooksUtils';

const styles = theme => ({
    card: {
        minWidth: 300,
        minHeight: 380,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    media: {
        maxWidth: '100%',
        height: 'auto',
        width: '145px',
        transform: 'translateX(50%)'
    }
});

class BooksCard extends Component
{
    constructor(props) {
        super(props);
        this.state.book = props.book;
        this.state.shelf = props.book.shelf === undefined ? 'none' : props.book.shelf;
        this.state.selectedIndex = BooksShelf.filter(item => item.status === this.state.shelf)[0].index;
        this.onBooksShelfChange = props.onBooksShelfChange;
    }

    state = {
        anchorEl: null,
        selectedIndex: 0,
        book: null
    }

    handleClick = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        });
    }

    handleMenuItemClick = (event, index) => {
        this.setState({
            anchorEl: null,
            selectedIndex: index,
        });
        this.onBooksShelfChange(event, this.state.book, BooksShelf[index].status);
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    }

    render()
    {
        const { classes} = this.props;
        const { book, anchorEl } = this.state;

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        action={
                            <IconButton
                                aria-label="More"
                                aria-haspopup="true"
                                aria-owns={anchorEl ? 'long-menu' : null}
                                onClick={this.handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={
                            <Typography variant='title' gutterBottom>
                                {book.title}
                            </Typography>
                        }
                        subheader={book.hasOwnProperty('authors') &&
                            book.authors[0]
                        }
                    />
                    {book.hasOwnProperty('imageLinks') && book.imageLinks.hasOwnProperty('thumbnail') &&
                    <img src={book.imageLinks.thumbnail} className={classes.media}
                        alt={book.title}/>
                    }
                </Card>
                <Menu
                    id='long-menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {BooksShelf.map((option,index) => (
                        <MenuItem
                            key={option.title}
                            disabled={option.clickable === false}
                            selected={index === this.state.selectedIndex}
                            onClick={event => this.handleMenuItemClick(event, index)}
                        >
                            {option.title}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(BooksCard);
