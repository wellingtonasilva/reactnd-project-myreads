import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Debounce } from 'react-throttle';

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: 16,
        margin: theme.spacing.unit * 3,
    })
});

class BooksSearch extends PureComponent {
    render() {
        return (
            <div>
                <Debounce time='300' handler='onChange'>
                    <TextField
                        id='query'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Search"
                        fullWidth
                        margin="normal"
                        onChange={this.props.onSearchTextChange}
                    />
                </Debounce>
        </div>
        );
    }
}

export default withStyles(styles)(BooksSearch);
