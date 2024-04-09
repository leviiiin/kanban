import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Form from "../Form/Form";
import Button from "../Button/Button";
import "./RegistrationForm.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();
  const [error, setError] = useState("");

  const watchPassword = watch("password", "");

  const handleRegistration = (formData) => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirm_password
    ) {
      setError("Please fill in all fields");
      return;
    }
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    navigate("/board");
  };

  return (
    <Form
      className="registration-form"
      onSubmit={handleSubmit(handleRegistration)}
    >
      <p className="form__title">Create your Kanban account</p>
      <p className="form__">
        Have a Kanban account?
        <Link to="/" className="form__link">
          Sign in
        </Link>
      </p>
      <Input
        type="text"
        name="name"
        className="form__input"
        placeholder="Name"
        control={control}
        rules={{
          required: "Name is required",
          minLength: {
            value: 1,
            message: "Name is required",
          },
        }}
      />
      {errors.name && (
        <p className="form__error-message">{errors.name.message}</p>
      )}
      <Input
        type="email"
        name="email"
        className="form__input"
        placeholder="Your e-mail"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        }}
      />
      {errors.email && (
        <p className="form__error-message">{errors.email.message}</p>
      )}
      <Input
        type="password"
        name="password"
        className="form__input"
        placeholder="Your password"
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
      />
      {errors.password && (
        <p className="form__error-message">{errors.password.message}</p>
      )}
      <Input
        type="password"
        name="confirm_password"
        className="form__input"
        placeholder="Confirm password"
        control={control}
        rules={{
          required: "Confirm password is required",
          validate: (value) =>
            value === watchPassword || "Passwords do not match",
        }}
      />
      {errors.confirm_password && (
        <p className="form__error-message">{errors.confirm_password.message}</p>
      )}
      {error && <p className="form__error-message">{error}</p>}
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default RegistrationForm;
