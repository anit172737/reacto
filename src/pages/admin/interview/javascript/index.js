import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { ChevronDown } from "react-feather";
import { Circles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../../../../components/adminHeader";
import DataTable, { createTheme } from "react-data-table-component";
import { columns } from "./Columns";
import AddForm from "./Form";
import "../../../../sass/pages/admin/container.scss";
import { fetchJsQtnList } from "./store";

createTheme(
  "solarized",
  {
    text: {
      primary: "#268bd2",
      secondary: "#2aa198",
    },
    background: {
      default: "#002b36",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

const customStyles = {
  rows: {
    style: {
      minHeight: "45px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "16px",
      fontSize: "18px",
      background: "#6c63ff",
      color: "white",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "16px !important",
    },
  },
};

const JavascriptTable = () => {
  const [search, setSearch] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const { jsQtnList } = useSelector((state) => state.javascriptMaster);
  console.log("jsQtnList", jsQtnList);
  const dispatch = useDispatch();

  const dataToRender = () => {
    return jsQtnList;
  };

  const handleAdd = () => {
    setOpenForm(true);
  };
  useEffect(() => {
    dispatch(fetchJsQtnList());
  }, []);

  return (
    <div className="adminContainer">
      {openForm && <AddForm setOpenForm={setOpenForm} />}
      <AdminHeader
        title="Javascript Data Table"
        setSearch={setSearch}
        handleAdd={handleAdd}
      />
      <DataTable
        pagination
        subHeader={false}
        noHeader={true}
        responsive
        highlightOnHover
        paginationServer
        progressComponent={<Circles />}
        columns={columns}
        data={dataToRender()}
        sortIcon={<ChevronDown />}
        className="react-dataTable"
        //   paginationComponent={renderPaginationComponent}
        // theme="solarized"
        customStyles={customStyles}
      />
    </div>
  );
};

export default JavascriptTable;
