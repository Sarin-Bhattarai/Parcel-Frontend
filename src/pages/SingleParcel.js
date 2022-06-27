import React, { useState, useEffect } from "react";
import {
  getSingleParcel,
  deleteParcel,
  updateParcel,
} from "../utils/others/parcelApi";
import DataFetchingState from "../components/common/DataFetchingState";
import {
  ExclamationCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Modal, Space, Button, Input, Select, message, Popover } from "antd";
import { useParams, useNavigate } from "react-router-dom";

const SingleParcel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { confirm } = Modal;
  const { Option } = Select;
  const [state, setState] = useState({
    loading: true,
    error: null,
    newRemark: "",
    parcel: {},
    modalVisible: false,
    updateLoading: false,
  });

  const fetchParcel = (id) => {
    setState({ ...state, loading: true, error: null });
    getSingleParcel(id)
      .then((parcel) => setState({ ...state, parcel: parcel, loading: false }))
      .catch((error) => {
        setState({ ...state, error: error, loading: false });
      });
  };

  const deleteConfirm = () => {
    confirm({
      title: "Are you sure delete this parcel?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",

      onOk() {
        deleteParcel(id)
          .then((parcel) => {
            console.log(deleteParcel);
            message.success("Parcel deleted");
            setTimeout(() => {
              navigate("/parcels");
            }, 1000);
          })
          .catch((error) => {
            setState({ ...state, error: error, loading: false });
            message.error(error?.message || "Error deleting parcel");
          });
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleChange = (name, value) => {
    setState({
      ...state,
      error: null,
      parcel: { ...state.parcel, [name]: value },
    });
  };

  const submitParcelForm = () => {
    const parcel = {
      code: state.parcel.code,
      name: state.parcel.name,
      status: state.parcel.status,
      description: state.parcel.description,
      remarks: state.parcel.remarks,
    };
    updateParcel(id, parcel)
      .then((parcel) => {
        setState({
          ...state,
          code: parcel.code,
          name: parcel.name,
          status: parcel.status,
          description: parcel.description,
          remarks: parcel.remarks,
          updateLoading: false,
          modalVisible: false,
        });
        message.success("Successfully updated parcel");
        setTimeout(() => {
          navigate("/parcels");
        }, 1000);
      })
      .catch((error) => {
        setState({ ...state, updateLoading: false });
        message.error(error?.message || "Error updating parcel");
      });
  };

  const content = (
    <div style={{ minWidth: "50%" }}>
      <label>Remark</label>
      <textarea
        type="textarea"
        onChange={(e) => setState({ ...state, newRemark: e.target.value })}
        value={state.newRemark}
        style={{ width: "100%" }}
        name="new-remark"
      />
      <br />
      <br />
      <Button
        onClick={() => {
          setState({
            ...state,
            parcel: {
              ...state.parcel,
              remarks: [...state.parcel.remarks, state.newRemark],
            },
            newRemark: "",
          });
        }}
      >
        Add
      </Button>
    </div>
  );

  useEffect(() => {
    fetchParcel(id);
  }, [id]);

  console.log(state.parcel);

  return (
    <DataFetchingState
      loading={state.loading}
      error={state.error}
      onClickTryAgain={fetchParcel}
    >
      <>
        <h1 className="perform-header">Perform your action </h1>
        <div
          className="perform-container"
          style={{
            boxShadow:
              state.parcel.status === "pending"
                ? "4px 4px 4px 4px yellow"
                : "" || state.parcel.status === "processing"
                ? "4px 4px 4px 4px orange"
                : "" || state.parcel.status === "delivering"
                ? "4px 4px 4px 4px orange"
                : "" || state.parcel.status === "rejected"
                ? "4px 4px 4px 4px red"
                : "" || state.parcel.status === "delivered"
                ? "4px 4px 4px 4px green"
                : "",
          }}
        >
          <h2 className="data-info">Name : {state?.parcel?.name}</h2>
          <h2 className="data-info">Code : {state?.parcel?.code}</h2>
          <h2 className="data-info">Status : {state?.parcel?.status}</h2>
          <h2 className="data-info">
            Description : {state?.parcel?.description}
          </h2>
          <div className="data-info">
            <h2 className="data-info">Remarks: </h2>
            <ul className="data-info">
              {state?.parcel?.remarks?.map?.((text, key) => (
                <li style={{ marginTop: "-10px", marginLeft: "2%" }} key={key}>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="perform__button">
            <Space wrap>
              <Button
                onClick={() => setState({ ...state, modalVisible: true })}
              >
                <EditOutlined style={{ color: "#013220", fontSize: "15px" }} />
                Edit
              </Button>
              <Modal
                title="Edit Parcel"
                okText="Edit"
                style={{ top: 20 }}
                visible={state.modalVisible}
                okButtonProps={{ loading: state.updateLoading }}
                onOk={(e) => {
                  e.preventDefault();
                  submitParcelForm();
                  setState({ ...state, modalVisible: false });
                }}
                onCancel={() => setState({ ...state, modalVisible: false })}
              >
                <form>
                  <label>Code</label>
                  <Input
                    type="number"
                    placeholder="code"
                    onChange={(e) => handleChange("code", e.target.value)}
                    value={state.parcel.code}
                    name="code"
                    disabled
                  />
                  <br />
                  <br />
                  <label>Name</label>
                  <Input
                    type="text"
                    placeholder="name"
                    onChange={(e) => handleChange("name", e.target.value)}
                    value={state.parcel.name}
                    name="name"
                  />
                  <br />
                  <br />
                  <label>Status</label>
                  <Select
                    defaultValue="pending"
                    style={{
                      width: "100%",
                      height: "28px",
                    }}
                    onChange={(value) => handleChange("status", value)}
                    value={state.parcel.status}
                    name="status"
                  >
                    <Option value="pending">pending</Option>
                    <Option value="processing">processing</Option>
                    <Option value="delivering">delivering</Option>
                    <Option value="rejected">rejected</Option>
                    <Option value="delivered">delivered</Option>
                  </Select>
                  <br />
                  <br />
                  <label>Description</label>
                  <Input
                    type="text"
                    placeholder="description"
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    value={state.parcel.description}
                    name="description"
                  />
                  <br />
                  <br />
                  <label>Remarks</label>
                  <Popover content={content} title="Add remark">
                    <PlusCircleOutlined
                      style={{
                        fontSize: "25px",
                        float: "right",
                        marginBottom: "5px",
                        cursor: "pointer",
                        color: "green",
                      }}
                    />
                  </Popover>
                  {state.parcel?.remarks?.map?.((text, key) => {
                    return (
                      <Input
                        key={key}
                        type="text"
                        style={{ marginBottom: 5 }}
                        disabled
                        readOnly
                        value={text}
                        name="remark"
                      />
                    );
                  })}
                </form>
              </Modal>
            </Space>
            <Space wrap>
              <Button onClick={deleteConfirm} type="dashed">
                <DeleteOutlined
                  style={{
                    color: "crimson",
                    fontSize: "15px",
                  }}
                />
                Delete
              </Button>
            </Space>
          </div>
        </div>
      </>
    </DataFetchingState>
  );
};

export default SingleParcel;
