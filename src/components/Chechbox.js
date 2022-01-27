import { Children, useField } from 'formik'

const Chechbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'chechbox'})
   
    return (
        <div>
            <label>
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ?
            <div>{meta.error} </div> : null }
        </div>
    )
}

export default Chechbox