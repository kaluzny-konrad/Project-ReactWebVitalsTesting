import Image from "next/image";
import React from "react";

type Props = {};

export default function SmallestImage({}: Props) {
  return (
    <div style={{ width: "100%", height: "50px", position: "relative" }}>
      <Image
        src="https://img.freepik.com/darmowe-zdjecie/lotnicze-piekne-zdjecia-wybrzeza-ze-wzgorzami-na-tle-o-zachodzie-slonca_181624-24143.jpg?w=3918"
        fill={true}
        quality={100}
        placeholder="empty"
        className="rounded next-image"
        alt="Picture of the cls"
        priority
      />
    </div>
  );
}
