import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Text, Box, Button } from "rebass";
import { Formik, Field, Form } from "formik";

import { FormInput } from "../../ui/Form";
import { useFirebase } from "../../config/firebase";
import signupSchema from "../../utils/loginSchema";

function AuthForm({ type, history }) {
  const fb = useFirebase();
  const [fbErrorMsg, setfbErrorMsg] = useState("");

  return (
    <Formik
      validationSchema={signupSchema()}
      initialValues={{ email: "", password: "" }}
      onSubmit={async ({ email, password }, actions) => {
        actions.setSubmitting(true);
        setfbErrorMsg("");
        try {
          if (type.toLowerCase() === "login") {
            await fb.login({ email, password });
          }

          if (type.toLowerCase() === "signup") {
            await fb.signup({ email, password });
          }

          actions.setSubmitting(false);
          actions.resetForm();
          history.push("/");
        } catch (error) {
          setfbErrorMsg(error.message);
          actions.setSubmitting(false);
        }
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          {fbErrorMsg && (
            <Text fontWeight={0} fontSize={[2, 3]} color="tomato">
              {fbErrorMsg}
            </Text>
          )}
          <FormInput
            error={errors.email}
            touched={touched.email}
            as={Field}
            label="Email"
            name="email"
            placeholder="youremail@example.com"
            type="email"
          />
          <Box mt={4} />
          <FormInput
            error={errors.password}
            touched={touched.password}
            as={Field}
            name="password"
            type="password"
            placeholder="Your password"
            label="Password"
          />
          <Button
            variant={isSubmitting ? "disabled" : "primary"}
            disabled={!!isSubmitting}
            mt={4}
            type="submit"
          >
            {type === "login" ? "Login" : "Create Account"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default withRouter(AuthForm);
