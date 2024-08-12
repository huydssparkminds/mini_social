import Input from "@/components/Ui/Input/Input";
import style from "./style.module.scss";
import { Avatar } from "antd";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { createPost } from "@/redux/PostSlice/postSlice";
import { TypePost } from "@/models/models";
import { useTranslation } from "react-i18next";
const Post = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const [content, setContent] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleCreatePost = () => {
    if (content.trim()) {
      const newPost: TypePost = {
        id: new Date().toISOString(),
        comments: [],
        content: content,
        image: null,
        likes: {
          count: 0,
          users: [],
        },
        timestamp: new Date().toISOString(),
        userId: user?.id ?? "",
      };

      dispatch(createPost(newPost));
      setContent("")
    }
  };

  return (
    <div className={style.postWrapper}>
      <div className={style.postContent}>
        <Avatar src={user?.image} />
        <Input name={content} onChange={handleOnChange}></Input>
        <Button onClick={handleCreatePost} type="primary" size={"large"}>
          {t('post')}
        </Button>
      </div>
      <div className={style.postbar}></div>
    </div>
  );
};

export default Post;
