import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import "./App.css";

const { kakao } = window;

function App() {
  //geolocation
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  function geolocation() {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }

  useEffect(() => {
    geolocation();
  }, []);
  return (
    <div>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={4} // 지도의 확대 레벨
      >
        <MapMarker
          position={state.center}
          onClick={onclick}
          image={{
            src: "https://img.icons8.com/ios-glyphs/100/000000/user-location.png",
            size: {
              width: 50,
              height: 50,
              options: {
                offset: {
                  x: 27,
                  y: 69,
                },
              },
            },
          }}
        ></MapMarker>
      </Map>
    </div>
  );
}

export default App;
