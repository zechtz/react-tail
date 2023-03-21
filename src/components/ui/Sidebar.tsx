import { BsFillLightningFill, BsGearFill, BsPlus } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SidebarIcon = ({ icon, text = "Tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}
    <div className="sidebar-tooltip group-hover:scale-100">{text}</div>
  </div>
);

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg content-center items-center bg-primary text-secondary">
      <SidebarIcon icon={<FaFire size={28} />} />
      <SidebarIcon icon={<BsPlus size={28} />} />
      <SidebarIcon icon={<BsFillLightningFill size={28} />} />
      <SidebarIcon icon={<FaPoo size={28} />} />
      <SidebarIcon icon={<BsGearFill size={28} />} />
    </div>
  );
};

export default Sidebar;
