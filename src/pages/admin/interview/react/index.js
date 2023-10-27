import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { privateGet } from "../../../../services/privateRequest";

const ReactTable = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      await privateGet("/react/questionreact").then((res) =>
        setData(res.data.data)
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{data[0]?.answer}</div>;
};

export default ReactTable;
