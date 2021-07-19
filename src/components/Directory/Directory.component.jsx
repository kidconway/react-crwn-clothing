import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../MenuItem/MenuItem.component";

import "./Directory.styles.scss";

import { selectDirectorySections } from "../../redux/Directory/Directory.selectors";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...args }) => (
      <MenuItem key={id} {...args} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
