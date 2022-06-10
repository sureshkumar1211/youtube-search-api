import React, { Component, createRef } from 'react'
import SearchBar from './SearchBar'
import youtube from "./Youtube";
import "./app.css";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
const APIKey = "AIzaSyBHN15CrGzqMIIBk9m-kxQ2mpxR78toFXI";
class App extends Component
{
    constructor(props)
    {
        super(props);
        this.textInput = createRef();
    }

    state = {
        videos: [],
        selectedInfo: {}
    }

    onFormSubmit = async (query) =>
    {
        let resonse = await youtube.get('/search', {
            params: {
                part: "snippet",
                maxResults: "5",
                key: APIKey,
                q: query
            }
        });
        let videos = await resonse.data.items;
        this.setState({
            ...this.state,
            videos,
            selectedInfo: videos[0]
        });
        this.textInput.current.focus();
    }

    selectedEventHandler = (selected, e) =>
    {
        e.preventDefault();
        this.setState({
            ...this.state,
            selectedInfo: selected
        });
    }
    componentDidMount()
    {
        this.onFormSubmit('web development');
        this.textInput.current.focus();
    }
    render()
    {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} inputRef={this.textInput} />
                <div className="ui grid">
                    <div className="ten wide column">
                        {!this.state.selectedInfo.id ? <div style={{ marginTop: "30px" }} class="ui active centered inline loader"></div> :
                            <VideoDetails details={this.state.selectedInfo} />
                        }
                    </div>
                    <div className="six wide column x-hidden">
                        <VideoList selectedEventHandler={this.selectedEventHandler} videosList={this.state.videos} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
