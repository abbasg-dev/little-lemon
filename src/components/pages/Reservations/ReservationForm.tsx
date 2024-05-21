import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
const ReservationForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData,
}) => {
  const minimumDate = new Date();
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = [
    { value: "Birthday", label: "Birthday" },
    { value: "Anniversary", label: "Anniversary" },
  ];
  const validationSchema = Yup.object({
    date: Yup.date().required("Please choose a valid date"),
    time: Yup.string().required("Please choose a valid time"),
    numberOfGuests: Yup.number()
      .min(minimumNumberOfGuests, `Must be at least ${minimumNumberOfGuests}`)
      .max(maximumNumberOfGuests, `Must be at most ${maximumNumberOfGuests}`)
      .required("Please enter the number of guests"),
    occasion: Yup.string().required("Please choose a valid occasion"),
  });
  return (
    <Formik
      initialValues={{
        date: minimumDate,
        time: availableTimes[0] || "",
        numberOfGuests: minimumNumberOfGuests,
        occasion: occasions[0].value,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        submitData(values);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <div className="form-field">
            <label htmlFor="date">Date</label>
            <DatePicker
              selected={values.date}
              onChange={(date) => {
                if (date) {
                  setFieldValue("date", date);
                  dispatchOnDateChange(date);
                }
              }}
              minDate={minimumDate}
              dateFormat="yyyy/MM/dd"
              name="date"
              id="date"
              autoComplete="off"
              onKeyDown={(e) => {
                if (e.keyCode === 8) {
                  e.preventDefault();
                }
              }}
            />
            <ErrorMessage
              name="date"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-field">
            <label htmlFor="time">Time</label>
            <Field as="select" name="time" id="time">
              {availableTimes?.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="time"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-field">
            <label htmlFor="numberOfGuests">Number of guests</label>
            <Field
              type="number"
              name="numberOfGuests"
              min={minimumNumberOfGuests}
              max={maximumNumberOfGuests}
              id="numberOfGuests"
            />
            <ErrorMessage
              name="numberOfGuests"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-field">
            <label htmlFor="occasion">Occasion</label>
            <Select
              options={occasions}
              name="occasion"
              id="occasion"
              value={occasions.find(
                (option) => option.value === values.occasion
              )}
              onChange={(option) => setFieldValue("occasion", option.value)}
            />
            <ErrorMessage
              name="occasion"
              component="div"
              className="error-message"
            />
          </div>
          <button className="button-primary" type="submit">
            Reserve now!
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default ReservationForm;
