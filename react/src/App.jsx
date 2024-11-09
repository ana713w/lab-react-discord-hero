import "./App.css";
import Button from "./components/button/button";
import Hamburger from "./components/hamburger/hamburger";
import Paragraph from "./components/paragraph/paragraph";
import Title from "./components/title/title";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img src="../src/assets/discord-logo-white.png" alt="discord" className ="discord"></img>
        <Hamburger></Hamburger>
      </div>
      <div className ="content">
        <Title text="IMAGINE A PLACE..."></Title>
        <Paragraph text="...where you can belong to a school club, a gaming group, or a worldwide
          art community. Where just you and a handful of friends can spend time
          together. A place that makes it ease to talk everyday and hang out more often">
        </Paragraph>
        <Button type="white" text="Download for Mac" />
        <Button type="black" text="Open Discord in your browser" />
      </div>
      <img src="./assets/discord-background.png" alt="background"></img>
    </div>
  );
}

export default App;
