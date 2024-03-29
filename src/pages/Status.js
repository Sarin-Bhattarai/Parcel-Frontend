import React, { useEffect } from "react";
import { Button, Input } from "antd";
import { getAllParcels, list } from "../utils/others/parcelApi";
import { useState } from "react";
import DataFetchingState from "../components/common/DataFetchingState";
import "../utils/css/status.css";
import moment from "moment";

const Status = () => {
  const [state, setState] = useState({
    parcels: [],
    results: [],
    name: "",
    loading: true,
    search: "",
    searched: false,
    error: null,
  });

  const loadParcels = () => {
    setState({ ...state, loading: true });
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
    loadParcels();
  }, []);

  const searchData = () => {
    if (state.search) {
      list(state.search)
        .then(({ data }) =>
          setState({
            ...state,
            results: [...data],
            searched: true,
            loading: false,
          })
        )
        .catch((error) => {
          setState({ ...state, error: error, loading: false });
          console.log(error);
        });
    }
  };

  const handleChange = (name, value) => {
    setState({
      ...state,
      error: null,
      search: { ...state.search, [name]: value },
    });
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  const searchMessage = (searched, results) => {
    if (searched && results.length > 0) {
      return (
        <h2
          style={{ textAlign: "center" }}
        >{`Found ${results.length} parcel`}</h2>
      );
    }
    if (searched && results.length < 1) {
      return <h2 style={{ textAlign: "center" }}>{`No parcels found`}</h2>;
    }
  };

  const searchedParcels = (results = []) => {
    return (
      <div>
        <h2>{searchMessage(state.searched, state.results)}</h2>
        <DataFetchingState
          loading={state.loading}
          error={state.error}
          onClickTryAgain={loadParcels}
        >
          {results.map((p, i) => (
            <div key={i}>
              <h3 className="result-parcel-info-code">
                <strong>Code:</strong>
                {p.code}
              </h3>
              <h3 className="result-parcel-info-code">
                <strong>Name:</strong> {p.name}
              </h3>

              <h3 className="result-parcel-info-code">
                <strong>Destination:</strong> {p.destination}
              </h3>

              <h3 className="result-parcel-info-code">
                <strong>Origin Service Area:</strong> Kathmandu
              </h3>
              <h3 className="result-parcel-info-code">
                <strong>Description:</strong> {p.description}
              </h3>
              <table className="status-table-container">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Origin</th>
                    <th>Date/Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Status: {p.status}</td>
                    <td></td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>Added on</td>
                    <td></td>
                    <td>{moment(p.createdAt).format("YYYY/MM/DD , h:mm a")}</td>
                  </tr>

                  {p?.logs?.map?.((t, i) => (
                    <tr key={i}>
                      <td>Updated at: {t.status}</td>
                      <td>{t.origin}</td>
                      <td>
                        {moment(t.updatedAt).format("YYYY/MM/DD , h:mm a")}
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td>Updated at: {p.status}</td>
                    <td>{p.origin}</td>
                    <td>{moment(p.updatedAt).format("YYYY/MM/DD , h:mm a")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </DataFetchingState>
      </div>
    );
  };

  return (
    <>
      <div className="status-div">
        <h3 className="status-co-header">TRACKING DETAILS</h3>
        <form onSubmit={searchSubmit} className="status-container">
          <Input
            onChange={(e) => handleChange("search", e.target.value)}
            type="search"
            placeholder="Search Parcel"
            required
            autoFocus
          />
          <Button className="btn-track" onClick={searchSubmit}>
            Search
          </Button>
        </form>
      </div>
      <div>{searchedParcels(state.results)}</div>
      <br />
      <br />
    </>
  );
};

export default Status;
