import { useParams } from "react-router-dom";
import data from "@/data/data.json";
import { useEffect, useState } from "react";
import { TypeUser } from "@/models/models";
import style from "./style.module.scss";
import { Avatar, Button, Select } from "antd";
import Card from "@/components/Ui/Card/Card";
import useFilter from "@/hooks/useFilter";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useTranslatedOptions } from "@/constant";

const selectUserPosts = (state: RootState, userId: string | number) =>
  state.post.post.filter((post) => post.userId === userId);

const Profile = () => {
  const OPTIONS = useTranslatedOptions();
  const { id } = useParams<{ id: string }>();
  const userId = parseInt(id ?? "0");

  const posts = useSelector((state: RootState) =>
    selectUserPosts(state, userId)
  );

  const [dataUser, setDataUser] = useState<TypeUser | null>(null);
  const [openComment, setOpenComment] = useState<number | string>("");
  const [result, setQuery] = useFilter({ posts });

  useEffect(() => {
    if (id) {
      const user = data.users.find((e) => e.id === parseInt(id));
      setDataUser(user ?? null);
    }
  }, [id]);

  const handleSelectChange = (value: string) => {
    setQuery(value === "all" ? null : value);
  };

  if (!id) {
    return <h1>Không tìm thấy user</h1>;
  }

  return (
    <div className={style.profile}>
      <div className={style.header}>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          src={dataUser?.image}
        />
        <h2 className={style.name}>{dataUser?.name}</h2>
        <p className={style.username}>@{dataUser?.username}</p>
        <Button color="">Follow</Button>
      </div>

      <div className={style.filterPost}>
        <Select
          style={{ width: 170 }}
          defaultValue={OPTIONS[0].label}
          className={style.customSelect}
          onChange={handleSelectChange}
          options={OPTIONS}
        />
      </div>
      <div className={style.myPost}>
        {result &&
          result.map((item, i) => (
            <Card
              item={item}
              key={i}
              setOpenComment={setOpenComment}
              openComment={openComment}
            />
          ))}
      </div>
    </div>
  );
};

export default Profile;
