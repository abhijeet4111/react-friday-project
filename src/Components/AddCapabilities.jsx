import { useSelector } from "react-redux";
import HorizontalTabs from "./HorizontalTabs";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const AddCapabilities = () => {
  const tabsData = useSelector((data) => data.tabs);
  const roleFormData = useSelector((data) => data.admin.formData);
  return (
    <div>
      <div className="d-flex flex-column gap-3 pb-5">
        <Typography variant="body7">{tabsData.state}</Typography>
        <Typography variant="body5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <div className="d-flex gap-5 align-items-center">
          <div class="input-group w-25">
            <span class="input-group-text" id="basic-addon1">
              <SearchIcon />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="search capabilities"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <Typography variant="body8">Role</Typography>
          <div class="input-group w-25">
            <input
              type="text"
              class="form-control"
              value={roleFormData.selectVal}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <HorizontalTabs />
    </div>
  );
};
export { AddCapabilities };
