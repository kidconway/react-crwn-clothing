import React from "react";

import MenuItem from "../MenuItem/MenuItem.component";

import "./Directory.styles.scss";

import SECTIONS_DATA from "./sections.data.js";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...args }) => (
          <MenuItem key={id} {...args} />
        ))}
      </div>
    );
  }
}

export default Directory;
