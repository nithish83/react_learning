// src/pages/AddUserPage.jsx
import { useForm } from "react-hook-form";

export default function AddUserPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      city: "",
    },
  });

  async function onSubmit(data) {
    console.log("Submitting form data:", data);

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("User added successfully (React Hook Form)");
    reset(); // clear fields after submit
  }

  return (
    <div className="page-content">
      <h2>Add User (React Hook Form)</h2>

      {/* 👇 THIS is the correct form tag */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "400px", marginTop: "20px" }}
      >
        {/* Name */}
        <label>Name</label>
        <input
          type="text"
          className="input-box"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
        />
        {errors.name && (
          <p className="error-text">{errors.name.message}</p>
        )}

        {/* Email */}
        <label>Email</label>
        <input
          type="text"
          className="input-box"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="error-text">{errors.email.message}</p>
        )}

        {/* City */}
        <label>City</label>
        <input
          type="text"
          className="input-box"
          {...register("city", {
            required: "City is required",
          })}
        />
        {errors.city && (
          <p className="error-text">{errors.city.message}</p>
        )}

        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Add User"}
        </button>
      </form>
    </div>
  );
}
