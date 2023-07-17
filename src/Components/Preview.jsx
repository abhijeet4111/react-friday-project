import { useSelector } from "react-redux";

const Preview = () => {
  const previewData = useSelector((data) => data.admin);
  console.log(previewData);
  return (
    <div>
      <div>{previewData.roleName}</div>
      <div>{previewData.descreption}</div>
      <hr />
      <div>{previewData.name}</div>
      <div className="d-flex flex-column">
        {previewData.arr.map((data) => (
          <label>
            <input type="checkbox" checked={data.isChecked} />
            {data.name}
          </label>
        ))}
      </div>
    </div>
  );
};
export { Preview };
