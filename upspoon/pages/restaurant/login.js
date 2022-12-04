import { useState, useEffect } from "react";
import styles from "../../styles/restaurant/RestaurantLogin.module.css";
import UpInput from "../../components/upInput";
import UpButton from "../../components/UpButton";
import UpDropdown from "../../components/upDropdown";
import { packageServices } from "../../constants/package-services";
import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";
import { restaurantLogin } from "../../api/restaurant-user";

const RestaurantLogin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftArea}>
        <div className={styles.inputContainer}>
          <h2 className={styles.inputHeading}>UpSpoon'a Giriş Yap!</h2>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(8, "Must be 8 characters or more")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              restaurantLogin(values.email, values.password);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              handleReset,
              dirty,
              isSubmitting,
              touched,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-4"
              >
                <UpInput
                  name="email"
                  value={values.email}
                  placeholder="E-Posta"
                  onChange={handleChange}
                  className={[styles.input, styles.emailInput].join(" ")}
                  required
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
                {errors.email && touched.email && (
                  <div className={styles.errorField}>{errors.email}</div>
                )}
                <UpInput
                  name="password"
                  value={values.password}
                  placeholder="Şifre"
                  onChange={handleChange}
                  className={[styles.input, styles.passwordInput].join(" ")}
                  type="password"
                  required
                />
                {errors.password && touched.password && (
                  <div className={styles.errorField}>{errors.password}</div>
                )}

                <UpButton
                  type="submit"
                  disabled={!dirty || isSubmitting}
                  className={
                    !dirty || isSubmitting
                      ? styles.loginSubmitButtonDisabled
                      : styles.loginSubmitButton
                  }
                >
                  Login
                </UpButton>
              </form>
            )}
          </Formik>

          <div className={styles.linkContainer}>
            <Link
              href="/restaurant/forgot-password"
              className={styles.forgotPassword}
            >
              Şifremi Unuttum
            </Link>

            <Link href="/restaurant/register" className={styles.register}>
              Kayıt Ol
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.rightArea}>
        <img src="/images/upspoon-logo.png" alt="upspoon-logo" />
        <h4 className={styles.rightAreaHeading}>UpSpoon'a Hoşgeldiniz</h4>
      </div>
    </div>
  );
};

export default RestaurantLogin;
