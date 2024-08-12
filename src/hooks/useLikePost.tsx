import { TypePost, TypeUser } from "@/models/models";
import { likePost, unlikePost } from "@/redux/PostSlice/postSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
interface useLikePost {
  item: TypePost;
  userLogin: TypeUser | null;
}
const useLikePost = ({ item, userLogin }: useLikePost) => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  useEffect(() => {
    if (userLogin && item.likes.users.includes(userLogin.id)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [item.likes, userLogin]);

  const handleLike = () => {
    if (userLogin) {
      dispatch(likePost({ postId: item.id, userId: userLogin.id }));
    } else {
      Navigate("/login");
    }
  };

  const handleUnLike = () => {
    if (userLogin) {
      dispatch(unlikePost({ postId: item.id, userId: userLogin.id }));
    }
  };

  return { isLike, setIsLike, handleLike, handleUnLike };
};

export default useLikePost;
