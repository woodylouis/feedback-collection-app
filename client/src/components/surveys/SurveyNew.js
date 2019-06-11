// SurveyNew: content is from SurveyForm
import React from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import SurveyHeader from "./Header";
class SurveryNew extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { new: true };
  // }

  state = { showFormReview: false };
  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return (
      <div>
        <SurveyHeader />
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveryNew);
