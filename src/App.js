import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      fetchedData: false
    };
  }

  // Nasa APOD query example:
  // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
  // https://api.nasa.gov/

  fetchData = async () => {
    console.log('fetching data');
    let apodData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    console.log('apod data:', apodData);
    let pod = apodData.data;
    console.log('pic of the day:', pod);
    this.setState({
      title: apodData.data.title,
      fetchedData: true
    });
  }

  render() {
    return (<>
      <h1 onClick={this.fetchData}>NASA APOD!</h1>
      { this.state.fetchedData ?
        (<>
          <h2>{this.state.title}</h2>
        </>)
        : ''}

    </>
    );
  }
}


export default App;
