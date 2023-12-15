import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "../../../../sass/pages/admin/form.scss";

import { Button, Col, Form, FormFeedback, Input, Label, Row } from "reactstrap";
// import { addContact, editContact, selectContact, setLoader } from "./store";

const defaultValues = {
  question: "",
  answer: "",
};
const AddForm = ({ setOpenForm }) => {
  // const { selected, contactList } = useSelector(
  //   (state) => state?.contactMaster
  // );
  const dispatch = useDispatch();
  const {
    reset,
    control,
    setError,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleModalClosed = () => {
    setOpenForm(false);
    reset();
    // dispatch(selectContact(null));
  };

  const onSubmit = async (data) => {
    console.log("data", data);
    let response = "";
    // if (selected) {
    // await dispatch(setLoader(true));

    // const modifiedArray = contactList.map((obj) => {
    //   if (obj.id === data.id) {
    //     return {
    //       ...obj,
    //       firstName: data.firstName,
    //       lastName: data.lastName,
    //       status: data.status,
    //     };
    //   }
    //   return obj;
    // });

    // response = await dispatch(editContact(modifiedArray));
    //   toast.success("Contact Edited Successfully");
    // } else {
    // await dispatch(setLoader(true));
    // response = await dispatch(
    //   addContact({
    //     id: contactList.length + 1,
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     status: data.status,
    //   })
    // );
    //   toast.success("Contact Added Successfully");
    // }
    if (response) {
      handleModalClosed();
    }
    handleModalClosed();
  };

  useEffect(() => {
    // if (selected) {
    //   setValue("id", selected.id);
    //   setValue("firstName", selected.firstName);
    //   setValue("lastName", selected.lastName);
    //   setValue("status", selected.status);
    // }
  }, []);

  return (
    <div className="addModal">
      <div className="addModal__content">
        <div className="addModal__content--header">
          {/* <h2 className="mb-0">{selected ? "Edit" : "Add"} Contact</h2> */}
          <h2 className="addModal__content--header-h2">Add Question</h2>
        </div>

        <Row tag={Form} className="p-2" onSubmit={handleSubmit(onSubmit)}>
          <Col xs={12} className="addModal__content--body">
            <div className="addModal__content--input">
              <Label className="form-label addModal__content--input-label" for="question">
                Question <span style={{ color: "orangered" }}>*</span>
              </Label>
              <Controller
                id="question"
                name="question"
                control={control}
                render={({ field }) => (
                  <textarea
                    className="addModal__content--input-1"
                    placeholder="Enter Question"
                    {...register("question", {
                      required: "Please enter Question ",
                      // pattern: {
                      //   value: characterRegex,
                      //   message: 'Allow Only 100 Character'
                      // }
                    })}
                    invalid={errors.question ? true : false}
                    {...field}
                  />
                )}
              />
              {errors && errors.question && (
                <div style={{ color: "orangered",fontSize:'17px' }}>
                  {errors.question.message}
                </div>
              )}
            </div>

            <div className="addModal__content--input">
              <Label className="form-label addModal__content--input-label" for="answer">
                Answer <span style={{ color: "orangered" }}>*</span>
              </Label>
              <Controller
                id="answer"
                name="answer"
                control={control}
                render={({ field }) => (
                  <textarea
                    className="addModal__content--input-1"
                    placeholder="Enter Answer"
                    {...register("answer", {
                      required: "Please enter Answer ",
                      // pattern: {
                      //   value: characterRegex,
                      //   message: 'Allow Only 100 Character'
                      // }
                    })}
                    // invalid={errors.answer ? true : false}
                    {...field}
                  />
                )}
              />
              {errors && errors.answer && (
                <div style={{ color: "orangered", fontSize:'17px' }}>
                  {errors.answer.message}
                </div>
              )}
            </div>
          </Col>

          <Col xs={12} className="addModal__content--footer">
            <Button className="addModal__content--footer-btn" type="submit">
              Submit
            </Button>
            <button
              className="addModal__content--footer-btn addModal__content--footer-btn-close"
              onClick={() => setOpenForm(false)}
            >
              Close
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddForm;
