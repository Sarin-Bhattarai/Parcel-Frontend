import React, { useState, useEffect } from "react";
import { getAllParcels, createParcel } from "../utils/others/parcelApi";
import Card from "../components/Card";
import "../index.css";
import DataFetchingState from "../components/common/DataFetchingState";

const Parcel = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    parcels: [],
  });

  const fetchParcels = () => {
    setState({ ...state, loading: true, error: null });
    getAllParcels()
      .then((parcels) =>
        setState({ ...state, parcels: parcels, loading: false })
      )
      .catch((error) => {
        setState({ ...state, error: error, loading: false });
        console.log(error);
      });
  };

  useEffect(() => {
    fetchParcels();
  }, []);

  const addParcel = () => {
    return (
      <div className="add_parcel">
        <input className="search__control" type="text" autoFocus required />
        <button>Create parcel</button>
      </div>
    );
  };

  return (
    <div>
      <h2 className="header__parcel">Create Parcel</h2>
      {addParcel()}
      <div className="container">
        <DataFetchingState
          loading={state.loading}
          error={state.error}
          onClickTryAgain={fetchParcels}
        >
          <>
            {state.parcels.map((p, i) => {
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
          </>
        </DataFetchingState>
      </div>
    </div>
  );
};

export default Parcel;
