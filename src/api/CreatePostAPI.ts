import axios from "../axios/axios";

interface IProps {
  title: string;
  description: string;
  fullText: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setOnButtoClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreatePostAPI = (props: IProps) => {
  const {title, description, fullText, setMessage, setOnButtoClick} = props;

  axios
    .post("/posts", {
      title: title,
      description: description,
      fullText: fullText,
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
