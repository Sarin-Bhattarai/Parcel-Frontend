import React, { useState, useEffect } from "react";
import { getSingleParcel } from "../utils/others/parcelApi";
import DataFetchingState from "../components/common/DataFetchingState";
import { useParams } from "react-router-dom";

const SingleParcel = (props) => {
  const { id } = useParams();
  const [state, setState] = useState({
    loading: true,
    error: null,
    parcel: {},
  });

  const fetchParcel = (id) => {
    setState({ ...state, loading: true, error: null });
    getSingleParcel(id)
      .then((parcel) => setState({ ...state, parcel: parcel, loading: false }))
      .catch((error) => {
        setState({ ...state, error: error, loading: false });
      });
  };

  useEffect(() => {
    fetchParcel(id);
  }, [id]);

  return (
    <DataFetchingState
      loading={state.loading}
      error={state.error}
      onClickTryAgain={fetchParcel}
    >
      <>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state?.parcel?.code}</td>
              <td>{state?.parcel?.status}</td>
              <td>{state?.parcel?.remarks?.[0]}</td>
            </tr>
          </tbody>
        </table>
      </>
    </DataFetchingState>
  );
};

export default SingleParcel;
