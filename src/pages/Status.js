import React, { useEffect } from "react";
import { Button, Input, message } from "antd";
import { getAllParcels, list } from "../utils/others/parcelApi";
import { useState } from "react";
import Card from "../components/Card";
import DataFetchingState from "../components/common/DataFetchingState";

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
      return `Found ${results.length} parcel`;
    }
    if (searched && results.length < 1) {
      return `No parcels found`;
    }
  };

  const searchedParcels = (results = []) => {
    console.log(results);
    return (
      <div>
        <h2>{searchMessage(state.searched, state.results)}</h2>
        <DataFetchingState
          loading={state.loading}
          error={state.error}
          onClickTryAgain={loadParcels}
        >
          {results.map((p, i) => (
            <Card
              key={i}
              id={p._id}
              code={p.code}
              name={p.name}
              imageUrl="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBhcmNlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              description={p.description}
            />
          ))}
        </DataFetchingState>
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={searchSubmit} className="status-container">
        <Input
          onChange={(e) => handleChange("search", e.target.value)}
          type="search"
          placeholder="Search Parcel"
        />
        <Button onClick={searchSubmit}>Search</Button>
      </form>
      <div>{searchedParcels(state.results)}</div>
    </div>
  );
};

export default Status;
