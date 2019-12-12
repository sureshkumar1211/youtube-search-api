import React, { Component } from 'react';

class SearchBar extends Component
{
    state = { query: '' };

    onChangeHandler = (e) =>
    {
        e.preventDefault();
        this.setState({
            ...this.state,
            query: e.target.value
        });
    }


    onSubmitHandler = (e) =>
    {
        e.preventDefault();
        this.props.onFormSubmit(this.state.query);
        this.setState({
            ...this.state,
            query: ''
        });
    }


    render()
    {
        return (
            <div className="ui searchbar segment" style={{ marginTop: "20px" }}>
                <form onSubmit={this.onSubmitHandler} className="ui form">
                    <div className="field">
                        <label>Videos</label>
                        <input
                            onChange={this.onChangeHandler}
                            ref={this.props.inputRef}
                            value={this.state.query} type="text" placeholder="search..."
                        />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;
