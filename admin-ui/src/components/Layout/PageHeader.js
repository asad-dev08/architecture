import { Avatar, Button, Divider, Dropdown, Menu, Typography } from "antd";
import React from "react";

import { MdPerson } from "react-icons/md";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../Auth/AuthContext";

const PageHeader = ({
  toggleSider,
  collapsed,
  isMediumScreen,
  showDrawer,
  user,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogoutFromApp = async (e) => {
    e.preventDefault();
    // dispatch(logout());
    // toast.success("Logged Out", { duration: 4000 });
    // navigate("/login", { replace: true });
    toast.success("Logged Out", { duration: 4000 });
    logout();
  };

  const menu = (
    <Menu style={{ width: "110px", textAlign: "left" }}>
      {/* <Menu.Item>
        <span>Profile</span>
      </Menu.Item>
      <Menu.Item>
        <span>Settings</span>
      </Menu.Item> */}
      <Divider plain style={{ margin: "2px 0" }} />

      <Menu.Item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          className="w-full"
          type="primary"
          danger
          onClick={(e) => handleLogoutFromApp(e)}
        >
          Sign Out
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className=" w-full h-full flex items-center justify-between">
      <Button
        type="text"
        className="ml-3 rounded-full h-10 w-10 flex items-center justify-center"
        onClick={!isMediumScreen ? toggleSider : showDrawer}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>

      <Dropdown overlay={menu}>
        <div className="bg-slate-100 px-5 py-[6px] rounded-md flex items-center gap-3 justify-between hover:cursor-pointer">
          <Typography style={{ fontWeight: 500 }}>
            Hi, {user?.username}
          </Typography>
          <Avatar
            className="hover:cursor-pointer"
            icon={<MdPerson />}
            size="large"
          />
        </div>
      </Dropdown>
    </div>
  );
};

export default PageHeader;
