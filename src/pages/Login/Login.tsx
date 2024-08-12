import style from "./style.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import db from "@/data/data.json";
import { useDispatch } from "react-redux";
import { login } from "@/redux/userSlice/UserSlice";

type FormValues = {
  username: string;
  password: string;
};

const Login = () => {
  const { handleSubmit, control } = useForm<FormValues>();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const onSubmit = (data: FormValues) => {
    const userAuth = db.users.find(
      (e) => e.username === data.username && e.password === data.password
    );

    if (userAuth) {
      dispatch(login(userAuth));
      Navigate("/");
    } else {
      alert("Đăng nhập không thành công");
    }
  };

  return (
    <div className={style.login}>
      <h3>Login</h3>

      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              size="large"
              prefix={<UserOutlined />}
              placeholder="Nhập tên người dùng"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input.Password
              {...field}
              placeholder="************"
              size="large"
            />
          )}
        />
        <p>
          Chưa có tài khoản! <Link to={"/register"}>Đăng ký</Link>
        </p>
        <Button type="primary" htmlType="submit" block>
          Đăng Nhập
        </Button>
      </form>
    </div>
  );
};

export default Login;
