import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BooksCard from './BooksCard';
import BooksSearchInputText from './BooksSearchInputText';
import * as BooksAPI from './BooksAPI';

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: 16,
        margin: theme.spacing.unit * 3,
    }),
     progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-50px',
        marginLeft: '-50px',
    }
});

class BooksSearch extends Component {
    state = {
        books: [],
        showProgress: false,
        myBookList: this.props.myBookList
    }

    onSearchTextChange = (event) => {
        event.preventDefault();
        const { value } = event.target;

        if (value && value.length > 2) {
            this.setState({ showProgress: true});
            BooksAPI.search(event.target.value)
                .then(res => this.setState({
                    books: res,
                    showProgress: false
                }))
                .catch(error => this.setState({
                    books: [],
                    showProgress: false
                }));
        }
    }

    getBook = (book) => {
        const found = this.state.myBookList.filter(item => book.id === item.id);
        if (found.length > 0) {
            book.shelf = found[0].shelf;
        }

        return book;
    }

    render() {
        const { classes, onBooksShelfChange} = this.props;
        const { books, showProgress } = this.state;

        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <Link to='/'>
                        <IconButton>
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                    <Typography variant="headline" component="h3">
                    </Typography>
                    <BooksSearchInputText onSearchTextChange={this.onSearchTextChange} />
                    {showProgress &&
                        <CircularProgress className={classes.progress} />
                    }
                    <GridList cellHeight={300} cols={4}>
                    {books &&  books.map(item => (
                        <GridListTile key={item.id} cols={1}>
                            <BooksCard book={this.getBook(item)} onBooksShelfChange={(e, book, shelf) => onBooksShelfChange(e, book, shelf)} />
                        </GridListTile>
                    ))}
                    </GridList>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(BooksSearch);
