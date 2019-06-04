// Show user input
import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
class SurveyForm extends React.Component {
  renderFields() {
    return (
      <div>
        <Field
          label="Survey Title"
          type="text"
          name="title"
          component={SurveyField}
        />
        <Field
          label="Subject"
          type="text"
          name="title"
          component={SurveyField}
        />
        <Field
          label="Email body"
          type="text"
          name="title"
          component={SurveyField}
        />
        <Field
          label="Recipient"
          type="text"
          name="title"
          component={SurveyField}
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
