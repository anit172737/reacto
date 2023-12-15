import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { baseUrl } from "../../../../../app.config";
import { JavascriptFetch } from "../../../../../services/apiEndpoints";

export const fetchJsQtnList = createAsyncThunk(
  "javascriptMaster",
  async (params, { dispatch }) => {
    try {
      const response = await axios.get(baseUrl + JavascriptFetch);
      return {
        jsQtnList: response.data.data,
      };
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const addJsQtn = createAsyncThunk(
  "javascriptMaster",
  async (params, { dispatch }) => {
    try {
      await axios.post(baseUrl + JavascriptFetch, params)
      toast.success('Question added successfully')
      dispatch(fetchJsQtnList())
      return true
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const javascriptMaster = createSlice({
  name: "javascriptMaster",
  initialState: {
    jsQtnList: [],
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJsQtnList.fulfilled, (state, action) => {
      state.jsQtnList = action.payload.jsQtnList;
    });
  },
});

export const { setSearch } = javascriptMaster.actions;

export default javascriptMaster.reducer;
