import React from "react";
import PropTypes from "prop-types";

import "./item.scss";

function Item({ title, image, subtitle, onClick }) {
  return (
    <button onClick={onClick} className="item_root">
      <div className="item_image">
        <img src={image} alt="menu-item-logo" />
      </div>
      <div className="item_title">
        <h3>{title}</h3>
      </div>
      <div className="item_subtitle">
        <h5>{subtitle}</h5>
      </div>
    </button>
  );
}
Item.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.object,
  onClick: PropTypes.func,
};
export default Item;
