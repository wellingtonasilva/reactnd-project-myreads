import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import BooksList from './BooksList';
import BooksSearch from './BooksSearch';
import * as BooksAPI from './BooksAPI';
import { BooksShelf } from './BooksUtils';

const styles = theme => ({
        root: {
            backgroundColor: theme.palette.background.paper,
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing.unit * 2,
            right: theme.spacing.unit * 2,
        },
        progress: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-50px',
            marginLeft: '-50px',
        }
    });

class BooksApp extends Component
{
    state = {
        bookList: [],
        showProgress: true,
    }

    componentDidMount()
    {
        this.refresh();
    }

    onBooksShelfChange = (e, book, shelf) => {
        BooksAPI.update(book, shelf).then(res => this.refresh());
    }

    refresh = () =>
    {
        BooksAPI.getAll().then(res => this.setState({
            bookList: res,
            showProgress: false,
        }));
    }

    render()
    {
        const { classes } = this.props;
        const { bookList, showProgress } = this.state;

        return (
            <div className={classes.root}>
                <Route exact path="/" render={() => (
                    <div>
                        {showProgress &&
                            <CircularProgress className={classes.progress} />
                        }
                        { bookList.length > 0 && BooksShelf
                            .filter(item => item.canList)
                            .map(item => (
                        <BooksList key={item.index} bookList={bookList} shelf={item.status}
                                title={item.title} onBooksShelfChange={this.onBooksShelfChange} />
                        ))}
                        <Link to="/search" id="book-search">
                            <Button variant='fab' className={classes.fab} color='primary'>
                                <AddIcon />
                            </Button>
                        </Link>
                    </div>
                )}/>
                <Route path="/search" render={() => (
                    <BooksSearch onBooksShelfChange={this.onBooksShelfChange} myBookList={bookList}/>
                )}/>
        </div>
        );
    }
}

export default withStyles(styles)(BooksApp);
