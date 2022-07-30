import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Client Information Card</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="itemImg"
              />
              <details className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <AlternateEmailIcon className="icon" />
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoes@gmail.com</span>
                </div>
                <div className="detailItem">
                  <LocalPhoneIcon className="icon" />
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">98 225 654</span>
                </div>
                <div className="detailItem">
                  <LocationOnIcon className="icon" />
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">102 Hammam sousse 2</span>
                </div>
                <div className="detailItem">
                  <LocationCityIcon className="icon" />
                  <span className="itemKey">City: </span>
                  <span className="itemValue">Sousse</span>
                </div>
                <div className="detailItem">
                  <PublicIcon className="icon" />
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Tunis</span>
                </div>
              </details>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions Data</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
