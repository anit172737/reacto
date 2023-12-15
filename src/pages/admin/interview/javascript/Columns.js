import { Button } from "reactstrap";
import { Edit, Trash2 } from "react-feather";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../../../../sass/pages/admin/columns.scss";

export const columns = [
  {
    name: "QUESTION",
    selector: "question",
    width: "40%",
    sortable: false,
    selector: (row) => row.question,
    cell: (row) => (
      <span className="text-capitalize " style={{ fontSize: "18px" }}>
        {row.question}
      </span>
    ),
  },
  {
    name: "ANSWER",
    selector: "answer",
    width: "40%",
    sortable: false,
    selector: (row) => row.answer,
    cell: (row) => (
      //   row?.answer?.length > 20 ? (
      //     <OverlayTrigger
      //       placement="bottom"
      //       trigger={["hover", "focus"]}
      //       overlay={
      //         <Tooltip id="toolTip">
      //           <div className="toolTip" style={{ fontSize: "22px" }}>
      //             {row.answer}
      //           </div>
      //         </Tooltip>
      //       }
      //     >
      //       <span className="table_row description" style={{ fontSize: "22px" }}>
      //         {row.answer}
      //       </span>
      //     </OverlayTrigger>
      //   ) : (
      //     <span style={{ fontSize: "22px" }}>{row.answer || "-"}</span>

      //   ),
      <span className="text-capitalize " style={{ fontSize: "18px" }}>
        {row.answer}
      </span>
    ),
  },
  {
    name: "ACTIONS",
    width: "20%",
    cell: (row) => {
      return (
        <div
          className="align-items-center permissions-actions"
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {/* {hasPermission('Designation_Update') && ( */}
          <Button
            size="sm"
            color="transparent"
            className="btn"
            // onClick={() => handleEditClick(row)}
          >
            <Edit className="font-medium-2 btn_edit" />
          </Button>
          {/* )} */}
          <Button
            size={20}
            color="transparent"
            className="btn"
            //   onClick={() => {
            //     setSelectedRows([row])
            //     dispatch(selectDesignation(row))
            //     setDeleteModal(true)
            //   }}
          >
            <Trash2 className="font-medium-2 btn_delete" />
          </Button>
          {/* )} */}
        </div>
      );
    },
  },
];
