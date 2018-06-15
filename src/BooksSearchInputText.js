import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: 16,
        margin: theme.spacing.unit * 3,
    })
});

class BooksSearch extends Component
{
    render()
    {
        const { onSearchTextChange } = this.props;

        return (
            <div>
                <TextField
                    id='query'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    placeholder="Search"
                    fullWidth
                    margin="normal"
                    onChange={ (event) => onSearchTextChange(event)}
                />
        </div>
        );
    }
}

export default withStyles(styles)(BooksSearch);
