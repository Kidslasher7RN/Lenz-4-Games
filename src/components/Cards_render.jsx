import React from "react";
import Card from "./Card";
import app_list from "../List";

function Cards_render() {
  let render_cards = app_list.map((data) => {
    return (
      <Card
        name={data.name}
        release={data.release}
        href={data.href}
        cover={data.cover}
        password={data.password}
        origins={data.origins}
      />
    );
  });

  return <>{render_cards}</>;
}

export default Cards_render;
