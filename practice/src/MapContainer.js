import React, { useEffect } from "react";

const { kakao } = window;

const MapContainer = () => {
  useEffect(()=>{
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    console.log("MAP CREATED :)");
    
    return () => (console.log("MAP DESTROYED :("));
    //cleanup fn : in case we want to use fn when the component has destroyed
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
};

export default MapContainer;
