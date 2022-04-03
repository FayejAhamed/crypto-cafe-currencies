import React from 'react';
import {
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

const CustomLink = ({to, pathname, children, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
        style={{ color: match ? "#0991B1" : "BLACK" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    );
};

export default CustomLink;