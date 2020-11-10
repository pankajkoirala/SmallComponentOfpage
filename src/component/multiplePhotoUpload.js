import { Formik } from "formik";

const Input = (props) => {
  return (
    <Formik
      initialValues={{ name: [] }}
      onSubmit={(values, actions) => {
        // console.log(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <form onSubmit={props.handleSubmit}>
          <input
            multiple
            type="file"
            onChange={(e) => {
              const updatedName = [];
              Object.keys(e.target.files).forEach((a) => {
                updatedName.push(e.target.files[a]);
              });
              setFieldValue("name", values.name.concat(updatedName));
            }}
            name="name"
          />
          {values.name.map((file, i) => (
            <img
              src={URL.createObjectURL(file)}
              key={i}
              alt={file.name}
              className="img-thumbnail mt-2"
              height={200}
              width={200}
            />
          ))}
          <button onClick={() => console.log(values)} type="button">
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Input;
