import axios from "../axios/axios";

const CreatePostAPI = (title, description, fullText, setMessage) => {
  axios
    .post("/posts", {
      title: title.value,
      description: description.value,
      fullText: fullText.value,
    })
    .then(() => {
      setMessage("Succes created!");
    })
    .catch((error) => {
      setMessage(error.response.data.error + "!");
    });
};

export default CreatePostAPI;
