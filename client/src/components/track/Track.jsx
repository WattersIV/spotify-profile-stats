import React, { useEffect, useState } from "react";
import { getTrack } from "../../api/spotify";
import Navbar from "../Navbar";
import { useWindowWidth } from "@react-hook/window-size";
import { useParams } from "react-router";

export default function Artist() {
  const [trackInfo, setTrackInfo] = useState(null);
  const { id } = useParams();
  const width = useWindowWidth();

  useEffect(() => {
    async function fetchData() {
      const data = await getTrack(id);
      setTrackInfo(data);
    }
    fetchData();
  }, []);

  console.log(trackInfo);

  return (
    <>
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main"></div>
    </>
  );
}
