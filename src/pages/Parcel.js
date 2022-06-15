import React, { useState, useEffect } from "react";
import { getAllParcels } from "../utils/others/parcelApi";
import Card from "../components/Card";

const Parcel = () => {
  const [parcels, setParcels] = useState([]);

  const loadParcels = () => {
    getAllParcels().then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setParcels(data);
      }
    });
  };

  useEffect(() => {
    loadParcels();
  }, []);

  return (
    <div>
      <h3>Total {parcels.length} Parcels</h3>
      <br />
      <Card
        code="Parcel Code"
        imageUrl="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcmNlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        body="View for more details about parcel and to update and delete parcel"
      />
    </div>
  );
};

export default Parcel;
//  useEffect(() => {
//    async function getParcels() {
//      const res = await axios.get(`${API}/parcel`);
//      console.log(res.data);
//      setParcels(res.data);
//    }
//    getParcels();
//  }, []);

// import { API } from "../config";
// import axios from "axios";
