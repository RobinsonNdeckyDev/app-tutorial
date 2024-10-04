/* eslint-disable react/prop-types */
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="wrapper flex">
      <Sidebar />
      <div className="main-content border">
        <Navbar />
        <div className="principal-content px-3 py-2">{children}</div>
      </div>
    </div>
  );
};


export default DashboardLayout;

// /* eslint-disable react/prop-types */
// import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/Navbar";

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="wrapper flex">
//       <Sidebar />
//       <div className="main-content border">
//         <Navbar />
//         <div className="principal-content px-3 py-2">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
