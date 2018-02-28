import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import Yup from 'yup';
// import DisplayFormikState from '../../utils/FormikState';

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
    <div>
      <h2>Square Foot Calculator</h2>
      <form onSubmit={handleSubmit}>
        <h5>Product Length</h5>
        <label htmlFor="LengthFeet">Feet
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
        {errors.LengthFeet &&
          touched.LengthFeet && <div className="input-feedback">{errors.LengthFeet}</div>}

        <label htmlFor="LengthInches">Inches
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
        {errors.LengthInches &&
          touched.LengthInches && <div className="input-feedback">{errors.LengthInches}</div>}

        <h5>Product Width</h5>
        <label htmlFor="WidthFeet">Feet
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
        {errors.WidthFeet &&
          touched.WidthFeet && <div className="input-feedback">{errors.WidthFeet}</div>}

        <label htmlFor="WidthInches">Inches
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
        {errors.WidthInches &&
          touched.WidthInches && <div className="input-feedback">{errors.WidthInches}</div>}

        <button type="submit" disabled={isSubmitting}>
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
      // alert(JSON.stringify(values, null, 2));

      setSubmitting(false);
    }, 1000);
  },
  displayName: 'CalculatorSq', // helps with React DevTools
})(CalcSquareFoot);


export default EnhancedCalc;