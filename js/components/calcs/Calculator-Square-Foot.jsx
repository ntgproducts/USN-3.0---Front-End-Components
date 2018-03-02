import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import Yup from 'yup';
// import DisplayFormikState from '../../utils/FormikState';
// TODO: Controls can be unlocked and Components should be conditionally loaded based on 
// TODO: The product list and boolean flags that are available on the product. 

const CalcSquareFoot = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <div className="calculator calculator--square-foot">
      <header className="header-filled">
        <h2>Product Name - Square Foot Calculator</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <h5 className="form-title calculator-form-title">Product Length</h5>
        <div className="form-feedback">
          {errors.LengthFeet &&
            touched.LengthFeet && <div className="input-feedback">{errors.LengthFeet}</div>}
          {errors.LengthInches &&
            touched.LengthInches && <div className="input-feedback">{errors.LengthInches}</div>}
        </div>

        <div className="row">
          <div className="column column-50">
            <label className="form-label" htmlFor="LengthFeet"><span className="sr-only">Feet:</span>
              <input
                type="text"
                placeholder="Feet (ft.)"
                value={values.LengthFeet}
                onChange={handleChange}
                onBlur={handleBlur}
                name="LengthFeet"
                id="LengthFeet"
                className={errors.LengthFeet && touched.LengthFeet ? 'text-input error' : 'text-input'}
              />
            </label>
            </div>
          <div className="column column-50">
            <label className="form-label" htmlFor="LengthInches"><span className="sr-only">Inches:</span>
              <input
                type="text"
                name="LengthInches"
                id="LengthInches"
                placeholder="Inches (in.)"
                value={values.LengthInches}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.LengthInches && touched.LengthInches ? 'text-input error' : 'text-input'}
              />
            </label>
            </div>
        </div>
        
        <h5 className="form-title calculator-form-title">Product Width</h5>
        
        <div className="form-feedback">
          {errors.WidthFeet &&
            touched.WidthFeet && <div className="input-feedback">{errors.WidthFeet}</div>}

          {errors.WidthInches &&
            touched.WidthInches && <div className="input-feedback">{errors.WidthInches}</div>}
        </div>

        <div className="row">
          <div className="column column-50">
            <label className="form-label" htmlFor="WidthFeet"><span className="sr-only">Feet:</span>
              <input
                type="text"
                placeholder="Feet (ft.)"
                value={values.WidthFeet}
                onChange={handleChange}
                onBlur={handleBlur}
                name="WidthFeet"
                id="WidthFeet"
                className={errors.WidthFeet && touched.WidthFeet ? 'text-input error' : 'text-input'}
              />
            </label>
            </div>
          <div className="column column-50">
            <label className="form-label" htmlFor="WidthInches"><span className="sr-only">Inches:</span>
              <input
                type="text"
                name="WidthInches"
                id="WidthInches"
                placeholder="Inches (in.)"
                value={values.WidthInches}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.WidthInches && touched.WidthInches ? 'text-input error' : 'text-input'}
              />
            </label>
          </div>
        </div>      

        <button className="btn btn-gradient btn-block" type="submit" disabled={isSubmitting}>
          Submit
        </button>

      </form>
    </div>
  )
};

CalcSquareFoot.propTypes = {
  values: PropTypes.objectOf(PropTypes.string),
  errors: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.objectOf(PropTypes.bool),
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func
};

CalcSquareFoot.defaultProps = {
  values: '',
  errors: '',
  touched: false,
  isSubmitting: false,
  handleChange: () => {},
  handleSubmit: () => {},
  handleBlur: () => {}
}

const EnhancedCalc = withFormik({
  mapPropsToValues: () => ({ 
      LengthFeet: '',
      LengthInches: '',
      WidthFeet: '',
      WidthInches: ''
  }),
  validationSchema: Yup.object().shape({
    LengthFeet: Yup.number('Feet must be a number!')
      .positive('Feet must be positive!')
      .integer('No Decimals! Feet must be a whole number!')
      .required('Feet is required. If smaller than a foot enter 0!'),
    LengthInches: Yup.number('Inches must be a number!')
      .positive('Inches must be positive!'),
    WidthFeet: Yup.number('Feet must be a number!')
      .positive('Feet must be positive!')
      .integer('No Decimals! Feet be a whole number!')
      .required('Feet is required. If smaller than a foot enter 0!'),
    WidthInches: Yup.number('Inches must be a number!')
      .positive('Inches must be positive')
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {

      setSubmitting(false);
    }, 1000);
  },
  displayName: 'CalculatorSq', // helps with React DevTools
})(CalcSquareFoot);


export default EnhancedCalc;