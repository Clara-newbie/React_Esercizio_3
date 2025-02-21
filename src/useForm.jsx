import { useState } from "react";

const initialData = {
  username: "",
  password: "",
};

export default function useForm() {
  const [data, setData] = useState(initialData);

  function handleFormInput(event) {
    const { name, value } = event.target;

    event.preventDefault();
    setData((prev) => ({ ...prev, [name]: value }));
  }

  return {
    handleFormInput,
    data,
    initialData,
  };
  {
    /* <form onSubmit={handleFormInput}>
      <input
        name={username}
        value={data.username}
        type="text"
        placeholder="username..."
      />
      <input
        name={password}
        value={data.password}
        type="password"
        placeholder="password..."
      />
      <button type="submit">Send</button>
    </form> */
  }
}
