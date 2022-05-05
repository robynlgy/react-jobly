function Alert({ errors }) {
  return (
    <div className="alert-danger">
      {errors.map((error) => (
        <p>{error}</p>
      ))}
    </div>
  );
}

export default Alert