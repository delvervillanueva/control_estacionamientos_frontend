import React, { Component } from "react";

export class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Playa de estacionamientos</strong> hecho por{" "}
            <a href="https://delvervillanueva.netlify.app/">
              Delver Villanueva
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
