import { useFormik } from "formik"
import { basicSchema } from "../src/schemas/schemas"
import { Link } from "react-router-dom"

const onSubmit = async (values, actions) => {
  console.log(values)
  console.log(actions)

  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  actions.resetForm()
}

const onChange = () => {

}

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
    onChange

  })
  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={values.email} placeholder="Type your email address..."
          onChange={handleChange}
          onSubmit={handleSubmit}
          className={errors.email && 'input-error'}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={values.age} placeholder="Type your age..."
          onChange={handleChange}
          onSubmit={handleSubmit}
          className={errors.age && 'input-error'}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={values.password} placeholder="Type your password..."
          onChange={handleChange}
          onSubmit={handleSubmit}
          className={errors.password && 'input-error'}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={values.confirmPassword} placeholder="Re-type your password..."
          onChange={handleChange}
          onSubmit={handleSubmit}
          className={errors.confirmPassword && 'input-error'}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
      <button disabled={isSubmitting} type="submit" >Save</button>
      <Link to="/portal">Portal Form</Link>
    </form>
  )
}

export default GeneralForm