import { Avatar, Button } from "antd";
import style from "./style.module.scss";
import Input from "@/components/Ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { TypeComment } from "@/models/models";
import { createComment } from "@/redux/PostSlice/postSlice";
import { useNavigate } from "react-router-dom";
interface CommentPostProps {
  postId: string | number;
}
const CommentPost = ({ postId }: CommentPostProps) => {
  const userLogin = useSelector((state: RootState) => state.user.user);
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handlePostComment = () => {
    if (!userLogin?.id) {
      Navigate("/login");
    } else {
      if (content.trim()) {
        const newComment: TypeComment = {
          id: new Date().toISOString(),
          author: userLogin?.name ?? "",
          content: content,
          image: userLogin?.image ?? "",
          likes: {
            count: 0,
            users: [],
          },
          timestamp: new Date().toISOString(),
        };
        dispatch(createComment({ comment: newComment, postId: postId }));
        setContent("");
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handlePostComment();
    }
  };
  return (
    <div className={style.MyComment}>
      <Avatar src={userLogin?.image} />
      <div className={style.inputPost}>
        <Input
          name={content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handlePostComment}>Post</Button>
      </div>
    </div>
  );
};

export default CommentPost;
