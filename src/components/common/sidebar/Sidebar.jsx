import { useEffect, useState } from "react";
import { SidebarDropdown } from "../sidebarDropdown/SidebarDropdown";
import {
  dashboard,
  manageTip,
  marketManagement,
  mangeNews,
  feedback,
  adminMessage,
  marketCommentary,
  staffUser,
  membership,
  user,
  setting,
  traderClinic,
  analytics,
  document,
} from "./sidebarNavigationObject";
import {
  DashboardIcon,
  ManageTipIcon,
  ManageNewsIcon,
  FeedbackIcon,
  MessageIcon,
  CommentaryIcon,
  StaffUsersIcon,
  MemberShipIcon,
  UsersIcon,
  SettingIcon,
  TraderClinicIcon,
  AnalyticsIcon,
  DocumentIcon,
} from "../icons/Icons";
import "./Sidebar.css";

export const Sidebar = () => {
  const [openId, setOpenId] = useState(() => {
    if (sessionStorage.getItem("openId")) {
      return sessionStorage.getItem("openId");
    } else {
      return "";
    }
  });

  useEffect(() => {
    sessionStorage.setItem("openId", openId);
  }, [openId]);

  return (
    <aside className="scrollBox w-max min-w-max h-full flex-[0.15] flex flex-col bg-bgBlue overflow-y-scroll">
      <SidebarDropdown
        openId={openId}
        Icon={DashboardIcon}
        setOpenId={setOpenId}
        id="0"
        heading={dashboard.module}
        path={dashboard.path}
      />
      <SidebarDropdown
        openId={openId}
        Icon={ManageTipIcon}
        setOpenId={setOpenId}
        id="1"
        heading={manageTip.module}
        menu={manageTip.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={ManageTipIcon}
        setOpenId={setOpenId}
        id="2"
        heading={marketManagement.module}
        menu={marketManagement.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={ManageNewsIcon}
        setOpenId={setOpenId}
        id="3"
        heading={mangeNews.module}
        menu={mangeNews.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={FeedbackIcon}
        setOpenId={setOpenId}
        id="4"
        heading={feedback.module}
        menu={feedback.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={MessageIcon}
        setOpenId={setOpenId}
        id="5"
        heading={adminMessage.module}
        menu={adminMessage.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={CommentaryIcon}
        setOpenId={setOpenId}
        id="6"
        heading={marketCommentary.module}
        menu={marketCommentary.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={StaffUsersIcon}
        setOpenId={setOpenId}
        id="7"
        heading={staffUser.module}
        menu={staffUser.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={MemberShipIcon}
        setOpenId={setOpenId}
        id="8"
        heading={membership.module}
        menu={membership.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={UsersIcon}
        setOpenId={setOpenId}
        id="9"
        heading={user.module}
        menu={user.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={SettingIcon}
        setOpenId={setOpenId}
        id="10"
        heading={setting.module}
        menu={setting.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={TraderClinicIcon}
        setOpenId={setOpenId}
        id="11"
        heading={traderClinic.module}
        menu={traderClinic.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={AnalyticsIcon}
        setOpenId={setOpenId}
        id="12"
        heading={analytics.module}
        menu={analytics.menuList}
      />
      <SidebarDropdown
        openId={openId}
        Icon={DocumentIcon}
        setOpenId={setOpenId}
        id="13"
        heading={document.module}
        menu={document.menuList}
      />
    </aside>
  );
};
