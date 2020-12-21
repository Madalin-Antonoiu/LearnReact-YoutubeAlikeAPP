import React from "react";
import youtube from "../api/youtube";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyCohs3GZKg8swYyucbWJV087xZTA-vO5yU";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

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

  onVideoSelect = (video) => {
    //console.log("From the App!", video); // - When i click a video, it logs
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar data={this.onSearchSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
