import { Avatar } from "antd";
import style from "./style.module.scss";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { TypePost } from "@/models/models";
import { selectUserById } from "@/redux/customerSlice/customerSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { formatDateToDayMonth } from "@/utils/toDateMonth";
import Comment from "@/components/block/Comment/Comment";
import useLikePost from "@/hooks/useLikePost";
import CommentPost from "@/components/block/CommentPost/CommentPost";
import { Link } from "react-router-dom";
interface CardProps {
  item: TypePost;
  openComment: string | number;
  setOpenComment: (index: string | number) => void;
}

const Card = ({ item, openComment, setOpenComment }: CardProps) => {
  const user = useSelector((state: RootState) =>
    selectUserById(state, item.userId)
  );
  const userLogin = useSelector((state: RootState) => state.user.user);
  const { isLike, handleLike, handleUnLike } = useLikePost({ item, userLogin });

  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <Avatar src={user?.image} />
        <div className={style.name}>
          <p>
            <Link to={`/profile/${user?.id}`}>{user?.name}</Link>
          </p>
          <span>{formatDateToDayMonth(item.timestamp)}</span>
        </div>
      </div>
      <div className={style.cardbody}>
        <p>{item.content}</p>
      </div>
      <div className={style.cardfooter}>
        <div className={style.bottom}>
          <div className={style.like}>
            <BiLike />
            <span>{item.likes.users.length}</span>
          </div>
          <div className={style.like}>
            <FaRegComment />
            <span>{item.comments.length}</span>
          </div>
        </div>
        <div className={style.btnBottom}>
          {isLike ? (
            <button className={style.active} onClick={handleUnLike}>
              Like
            </button>
          ) : (
            <button onClick={handleLike}>Like</button>
          )}
          <button onClick={() => setOpenComment(item.id)}>Comment</button>
        </div>

        {item.comments &&
          item.comments.map((e, i) => <Comment key={i} item={e} />)}

        {openComment === item.id && <CommentPost postId={item.id} />}
      </div>
    </div>
  );
};

export default Card;
