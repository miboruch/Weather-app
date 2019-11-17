import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchCity, setChosenCity } from '../actions/searchCityAction';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import Spinner from '../components/Spinner/Spinner';

const InnerWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
`;

const StyledParagraphTopPadding = styled(Paragraph)`
  padding: 0.5rem 0;
  letter-spacing: 3px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledResultBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const errorCheck = (errorType, fieldText) =>
  errorType ? (
    <StyledParagraph error large>
      {errorType}
    </StyledParagraph>
  ) : (
    <StyledParagraph large>{fieldText}</StyledParagraph>
  );

const citySchema = Yup.object().shape({
  city: Yup.string()
    .min(2, 'Too short city name')
    .required('This field is required')
});

const LandingPage = ({
  cities,
  citiesLoading,
  searchCity,
  citySearching,
  result,
  error,
  setChosenCity
}) => {
  return (
    <>
      {citiesLoading ? (
        <Spinner />
      ) : (
        <InnerWrapper>
          <Formik
            initialValues={{ city: '' }}
            validationSchema={citySchema}
            onSubmit={({ city }) => {
              searchCity(city, cities);
            }}
          >
            {citySearching ? (
              <Spinner />
            ) : (
              ({ values, errors, handleChange, handleBlur }) => (
                <StyledForm>
                  {errorCheck(errors.city, 'City: ')}
                  <Input
                    name='city'
                    placeholder='City name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                  <Button type='submit'>Submit</Button>
                </StyledForm>
              )
            )}
          </Formik>
          {error !== null ? (
            <StyledParagraph>{error}</StyledParagraph>
          ) : (
            <StyledResultBox>
              {result.map((item, index) => (
                <Link to='/weather' key={index}>
                  <StyledParagraphTopPadding
                    onClick={() => setChosenCity(item.name, item.country)}
                    large
                  >
                    {item.name} {item.country}
                  </StyledParagraphTopPadding>
                </Link>
              ))}
            </StyledResultBox>
          )}
        </InnerWrapper>
      )}
    </>
  );
};

const mapStateToProps = ({
  loadCitiesReducer: { cities, citiesLoading },
  searchCityReducer: { citySearching, result, error }
}) => {
  return {
    cities,
    citiesLoading,
    citySearching,
    result,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchCity: (cityName, loadedCities) => dispatch(searchCity(cityName, loadedCities)),
    setChosenCity: (name, country) => dispatch(setChosenCity(name, country))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
