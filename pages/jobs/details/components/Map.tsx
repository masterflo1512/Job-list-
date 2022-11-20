import React from "react";
import Location from '../../../../components/icons/Location'

type MapProps = {
  lat: number;
  long: number;
  styles?: string;
  name: string;
  address: string;
  phone: string;
  email: string;
};

function Map(props: MapProps) {
  const { lat, long, name, address, phone, email} = props;

  return (
    <>
      <div className="bg-bg-map 2xl:m-10">
        <div className="text-white pl-20 pt-5 pb-3">
          <h3>Department name.</h3>
          <h3>{props.name}</h3>
          <h3 className="flex"><Location styles="mr-2" />{props.address}</h3>
          <span>{props.phone}</span>
          <h3>{props.email}</h3>
        </div>
        <iframe
          className={props.styles}
          id="iframeId"
          height="200px"
          width="100%"
          src={`https://maps.google.com/maps?q=${lat},${long}&hl=es;&output=embed`}
        ></iframe>
      </div>
    </>
  );
}

export default Map;
