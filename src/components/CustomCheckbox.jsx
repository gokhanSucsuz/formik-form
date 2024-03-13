/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useField } from 'formik'

function CustomCheckbox({ ...props }) {
    const [field, meta] = useField(props)
    return (
        <>
            <div className='checkbox'>
                <input
                    {...field}
                    {...props}
                    className={meta.error && "input-error"}
                />
                <span>I agree terms of use.</span>
            </div>
            {meta.error && <div className="error">{meta.error}</div>}
        </>
    )
}

export default CustomCheckbox