import React, { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const MapContainer = styled.div`
  margin: 0 auto; /* 수평 가운데 정렬을 위한 스타일 */
  width: 1180px; /* 컨테이너의 너비를 지정 */
`;

const Map = () => {

    useEffect(() => {
      const container = document.getElementById('myMap');
		  const options = {
        center: new kakao.maps.LatLng(37.587, 127.031698331241),
        // 중심축(LatLng: 위도 경도) -> 안암역 근처로 위치 설정
        level: 3
        // 디폴트 확대값
      };
      const map = new kakao.maps.Map(container, options);
      
      console.log(map);
    }, []);
    // 한번만 랜더링

    return (
      <MapContainer>
        <div id='myMap' style={{
            height: '350px',
            width: '1180px'
        }}></div>
      </MapContainer>
    );
}

export default Map; 

//사실 이 부분은.. 카카오맵에서 이렇게 쓰라고 되어있길래 걍 그런가보다 하고 받아적은 부분이라 왜 이렇게 해야되는지는 잘 모르겠어용ㅜㅜ
//카카오맵에서 API를 받아와서 html 파일에 적어주고 요런 식으로 코드 적어주면 지도 컴포넌트 사용 가능