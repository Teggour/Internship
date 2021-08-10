import readMoreImg from "../../Images/read-more_img.png";
import { Link } from "react-router-dom";
import { DemoPost, Descr } from "./styled";

interface IProps {
  postData: any;
  title: string;
  description: string;
  postedBy: string;
  _id: string;
};

const Post = ({postData}: IProps) => {
  const { title, description, postedBy, _id } = postData;

  return (
    <DemoPost>
      <h2>{title}</h2>
      <p>{description}</p>
      <Descr>
        <h5>Author: {postedBy}</h5>
        <h5>Post Id: {_id}</h5>
      </Descr>
      <Link to={`/post/${_id}`} title="Read more...">
        <img src={readMoreImg} alt="Read more..." />
      </Link>
    </DemoPost>
  );
}

export default Post;
