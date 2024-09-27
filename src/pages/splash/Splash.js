import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
// import LoaderLogo from "../../components/Loader/LoaderLogo.js";
import { RingLoader } from "react-spinners";

function AnimatedSplash(props) {
  const loaderStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0", // Background color
  };

  const circleLoaderStyles = {
    border: "5px solid #f3f3f3", // Light grey
    borderTop: "5px solid #3498db", // Blue
    borderRadius: "50%",
    width: "50px", // or use a prop to set this dynamically
    height: "50px", // same as above
    animation: "spin 1s linear infinite",
  };

  const styles = {
    ...circleLoaderStyles,
    ...loaderStyles,
  };

  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <RingLoader
          loading={true}
          color="#ffffff"
          speedMultiplier={2}
          cssOverride={{ styles }}
          size={100}
        />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
