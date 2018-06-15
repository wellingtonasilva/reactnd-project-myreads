import React, { Component } from 'react';
import BooksCard from './BooksCard';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: 16,
        margin: theme.spacing.unit * 3,
    })
});

class BooksList extends Component
{
    render()
    {
        const { bookList, shelf, classes, title, onBooksShelfChange } = this.props;
        const currentShelfList = bookList.filter(item => item.shelf === shelf);

        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <Typography variant="headline" component="h3">
                        {title}
                    </Typography>
                    <Divider />
                    <GridList cellHeight={300} cols={3}>
                    {currentShelfList.map(item => (
                        <GridListTile key={item.id} cols={1}>
                            <BooksCard book={item}  onBooksShelfChange={(e, book, shelf) => onBooksShelfChange(e, book, shelf)} />
                        </GridListTile>
                    ))}
                    </GridList>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(BooksList);
