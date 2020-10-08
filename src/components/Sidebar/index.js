import React from "react";
import Item from "./Items/Item";

import chair from "../../assets/chair-logo.png";
import assPillow from "../../assets/ass-pillow.png";
import wheels from "../../assets/wheels-logo.png";
import bigBrainPillow from "../../assets/head-pillow-logo.png";

import "./style.scss";

const menuItems = [
  { title: "Kėdės", subtitle: "Patogiai pailsint sėdimąją", image: chair },
  {
    title: "Sėdimosios pagalvės",
    subtitle: "Minkštai šikynei, debesėlis",
    image: assPillow,
  },
  {
    title: "Ratukai",
    subtitle: "Greiti ratukai = greitas kodas",
    image: wheels,
  },
  {
    title: "Galvos pagalvės",
    subtitle: "Atremti big brain'ui",
    image: bigBrainPillow,
  },
];
function Sidebar() {
  return (
    <div className="sidebar_root">
      <div className="sidebar_side" />
      {menuItems.map(({ title, subtitle, image }, index) => (
        <Item key={index} title={title} subtitle={subtitle} image={image} />
      ))}
    </div>
  );
}

export default Sidebar;
