import Post from "@/components/block/BPost/Post";
import Card from "@/components/Ui/Card/Card";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Select } from "antd";
import useFilter from "@/hooks/useFilter";
import { useTranslatedOptions } from "@/constant";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const posts = useSelector((state: RootState) => state.post.post);
  const OPTIONS = useTranslatedOptions();
  const [openComment, setOpenComment] = useState<number | string>("");

  const [result, setQuery] = useFilter({ posts });

  const handleSelectChange = (value: string) => {
    setQuery(value === "all" ? null : value);
  };

  return (
    <div>
      <Post />

      <div className={style.filterPost}>
        <Select
          defaultValue="All"
          style={{ width: 170 }}
          className={style.customSelect}
          onChange={handleSelectChange}
          options={OPTIONS}
        />

        <label style={{ fontSize: "14px", cursor: "pointer" }}>
          {t('sort by')} <DownOutlined />
        </label>
      </div>
      <div className={style.mainContent}>
        {result &&
          result.map((item, i) => (
            <Card
              setOpenComment={setOpenComment}
              openComment={openComment}
              item={item}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
