import React from "react";

import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview.component";

import SHOP_DATA from "./Shop.data.js";

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...args }) => {
          return <CollectionPreview key={id} {...args} />;
        })}
      </div>
    );
  }
}
