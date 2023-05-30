import "./style.scss";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useAuthLogoutMutation } from "~/app/services/authService";
import { logout } from "~/app/slices/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [logoutApi] = useAuthLogoutMutation();
  const handleLogout = async () => {
    const result: any = await logoutApi({});
    dispatch(logout());
    router.push("/auth/login");
  };
  return (
    <header>
      <Button icon={<ArrowLeftOutlined />} onClick={handleLogout} />
    </header>
  );
}
