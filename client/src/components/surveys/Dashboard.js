import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./SurveyList";
import SurveyHeader from "./Header";
const Dashboard = () => {
  return (
    <div>
      <SurveyHeader />
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/app/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
