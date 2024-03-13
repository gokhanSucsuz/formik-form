/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import CustomInput from "./components/CustomInput";
import { advancedSchema } from "./schemas/schemas";
import CustomSelect from "./components/CustomSelect";
import CustomCheckbox from "./components/CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {

  await new Promise((resolve) => {
    setTimeout(resolve, 4000)
  })
  actions.resetForm()
}

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: '', university: '', isAccepting: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}>
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="User Name"
              name="username"
              type="text"
              placeholder="Enter your username..."
            />
            <CustomSelect
              label="University"
              name="university"
              type="select"
              placeholder="Select your university!"
            >
              <option value="">Please choose your university!</option>
              <option value="bogazici">Boğaziçi University</option>
              <option value="odtu">ODTU University</option>
              <option value="hacettepe">Hacettepe University</option>
              <option value="gazi">Gazi University</option>
            </CustomSelect>
            <CustomCheckbox
              type="checkbox"
              name="isAccepting"
            />
            <button disabled={isSubmitting} type="submit">Save</button>
            <Link to="/">Homepage</Link>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PortalForm