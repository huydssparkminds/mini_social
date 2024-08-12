import { PublicRoute } from "@/router/route";
import style from "./style.module.scss";
import DarkMode from "@/components/Ui/DarkMode/DarkMode";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import i18n from "@/i18n/i18n";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };


  const items: MenuProps["items"] = [
    {
      label: "Tiếng Việt",
      key: "vi",
      onClick: () => handleLanguageChange("vi"),
    },
    {
      label: "English",
      key: "en",
      onClick: () => handleLanguageChange("en"),
    },
  ];

  const userLogin = useSelector((state: RootState) => state.user.user);

  return (
    <div className={style.sidebar}>
      <div>
        <Link className={style.logo} to={"/"}>
          SnapGram
        </Link>
        <nav>
          <ul>
            {PublicRoute.map((e, i) => (
              <li key={i}>
                <Link to={e.path.replace(":id", `${userLogin?.id}`)}>
                  {e.icon && <e.icon />}
                  <span>{e.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={style.bottom}>
        <DarkMode />
        <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
              {t("languages")}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Sidebar;
