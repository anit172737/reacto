import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { privateGet } from "../../../../services/privateRequest";
import axios from "axios";

const JavascriptTable = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      await privateGet("/javascript/questionjs").then((res) =>
        setData(res.data.data)
      );
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>JavascriptTable</div>;
};

export default JavascriptTable;
