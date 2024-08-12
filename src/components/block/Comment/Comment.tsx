import style from "./style.module.scss";
import { Avatar } from "antd";
import { TypeComment } from "@/models/models";

interface CommentProps {
  item: TypeComment;
}
const Comment = ({ item }: CommentProps) => {
  return (
    <div className={style.comment}>
      <div className={style.userComment}>
        <Avatar src={item.image} />
        <div className={style.commentContent}>
          <p className={style.name}>{item.author}</p>
          <p>{item.content}</p>
        </div>
      </div>
    </div>

  );
};

export default Comment;
