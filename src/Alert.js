function Alert({ errors }) {
  return (
    <div className="alert alert-warning">
      {errors.map((error) => (
        <p>{error}</p>
      ))}
    </div>
  );
}

export default Alert