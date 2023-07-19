import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Preview = ({ setFinalReult }) => {
  const previewData = useSelector((data) => data.admin);
  // console.log(previewData.arr);

  setFinalReult(previewData);

  return (
    <div>
      <Typography variant="body6">Preview</Typography>
      <div className="p-2"></div>
      <Typography variant="body5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <div className="p-2"></div>
      <hr />

      <Typography variant="body6">{previewData.formData.roleName}</Typography>
      <div></div>
      <Typography variant="body5">
        {previewData.formData.descreption}
      </Typography>

      <hr />
      <Typography variant="body6">Capabilities</Typography>
      <div className="px-5 my-5">
        <div>{previewData.name}</div>
        <div className="d-flex flex-column">
          {previewData.arr.map((data) => (
            <div
              key={data.id}
              className="d-flex align-item-center gap-2 px-4 my-3"
            >
              <input
                className="inputCheckBox"
                checked={data.isChecked}
                type="checkbox"
                disabled
              />
              <Typography variant="body5" key={data.id}>
                {data.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};
export { Preview };
