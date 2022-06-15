import React, { useState, useEffect } from "react";
import { getAllParcels } from "../utils/others/parcelApi";
import Card from "../components/Card";
import "../index.css";

const Parcel = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    getAllParcels().then((data) => setParcels(data.data.parcel));
  }, []);

  return (
    <div className="container">
      {parcels &&
        parcels.map((p, i) => {
          return (
            <Card
              key={i}
              code={p.code}
              imageUrl="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcmNlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              body="View for more details about parcel and to update and delete parcel"
            >
              <p>{p.code}</p>
            </Card>
          );
        })}
    </div>
  );
};

export default Parcel;
