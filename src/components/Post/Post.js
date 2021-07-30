import style from "./post.module.css";
import readMoreImg from "../../Images/read-more_img.png";
import {
  Link,
} from "react-router-dom";
import FullPost from "../FullPost/FullPost";

function Post({ postData }) {
  const { title, description, postedBy, _id } = postData;

  return (
      <div className={style.post}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={style.descr}>
          <h5>Author: {postedBy}</h5>
          <h5>Post Id: {_id}</h5>
        </div>
        <div className={style.buttons}>
            <Link to={`/post/${_id}`} title="Read more..." className={style.button}>
              <img src={readMoreImg} alt="Read more..." />
            </Link>
        </div>
      </div>
  );
}

export default Post;
