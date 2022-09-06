import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BreadCrumb from "../components/Breadcrumb";

const Home = ({active,breadcrumb }) => {

  const itemsWithHeading = [
    { text: "Dicsovery", key: "" },
    { text: "New Job", key: "" },
    // Generally, only the last item should ever be a heading.
    // It would typically be h1 or h2, but we're using h4 here to better fit the structure of the page.
    // { text: 'Folder 2', key: 'd2', isCurrentItem: true, as: 'h4' },
  ];

  const location = useLocation();

  const [, ...pathname] = location.pathname.split("/");

  pathname.length >= 1 &&
    pathname.forEach((arr, i) => {
      if (arr !== "")
        itemsWithHeading.push({ text: arr, key: `d${Math.random() * 1}` });
    });

  return (
    <div
      className="outletHome"
      style={{ left: active ? "30px" : "" }}
      data-testid="home"
    >
     
      {breadcrumb && <BreadCrumb value={itemsWithHeading} />}

      <div className="children">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
