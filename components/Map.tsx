import { Wrapper } from "@googlemaps/react-wrapper";
import React, { useEffect, useRef } from "react";

export const Map = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: { lat: 35.180601, lng: 136.879036 },
        zoom: 15,
      });
      new window.google.maps.Marker({
        position: { lat: 35.180601, lng: 136.879036 },
        map,
      });
    }
  }, [ref.current]);

  return (
    <Wrapper apiKey={process.env.GOOGLE_API || ""}>
      <div ref={ref} className="w-full h-full" />
    </Wrapper>
  );
};
