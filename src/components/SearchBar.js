import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    //console.log(this.state.term);
    event.preventDefault();

    //pass it as props to the parent
    this.props.data(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>{this.props.label}</label>
            <br />
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              type="text"
              placeholder="Type and press Enter"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
