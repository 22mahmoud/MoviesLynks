import * as Yup from "yup";

export default () =>
  Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(7, "password should be 7 or more char")
      .required("Required")
  });
