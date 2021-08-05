import axios from "../axios/axios";

const CreatePostAPI = (title, description, fullText, setMessage, setOnButtoClick) => {
  axios
    .post("/posts", {
      title: title.value,
      description: description.value,
      fullText: fullText.value,
    })
    .then(() => {
      setMessage("Succes created!");
      setOnButtoClick(false)
    })
    .catch((error) => {
      setMessage(error.response.data.error + "!");
      setOnButtoClick(false)
    });
};

export default CreatePostAPI;
