import { Component } from 'react';
import './App.css';
import Game from './components/Game';
import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

class App extends Component { 
  render() {
    return (
      <View className="App">
        <Card>
          <Image src={logo} className="App-logo" alt="logo" />
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={this.props.signOut}>Sign Out</Button>
        <Game />
      </View>
    );
  }
}

export default withAuthenticator(App);
