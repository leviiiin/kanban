import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Form from "../Form/Form";
import Button from "../Button/Button";
import "./LoginForm.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const handleLogin = (formData) => {
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    navigate("/board");
  };

  return (
    <Form className="login-form" onSubmit={handleSubmit(handleLogin)}>
      <p className="form__title">Sign in to Kanban</p>
      <p className="form__">
        Need a Kanban account?
        <Link to="/registration" className="form__link">
          Create an account
        </Link>
      </p>
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
      {errors.name && (
        <p className="form__error-message">{errors.name.message}</p>
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
      {error && <p className="form__error-message">{error}</p>}
      <Button type="submit">Sign in</Button>
    </Form>
  );
};

export default LoginForm;
