import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

const KEY = "AIzaSyCohs3GZKg8swYyucbWJV087xZTA-vO5yU";

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY
      }
    });

    //console.log(response);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar data={this.onSearchSubmit} />
        <p> I have found {this.state.videos.length} videos.</p>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
