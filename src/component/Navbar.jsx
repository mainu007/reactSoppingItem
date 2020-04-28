import React from "react";
const Navbar = (props) => {
    const {data} = props;
    const newData = data.filter(val=>val.value > 0);
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Total items
        </a>
        <span className="mr-auto badge badge-secondary">
            {newData.length===0?null: newData.length}
        </span>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
