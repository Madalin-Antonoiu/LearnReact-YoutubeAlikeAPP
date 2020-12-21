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
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            type="text"
            placeholder="Type and press Enter"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
