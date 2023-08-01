import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const NavBar = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1">
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem> Dashboard </MenuItem>
          <MenuItem> Invoices </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Timeline Chart </MenuItem>
            <MenuItem> Bubble Chart </MenuItem>
          </SubMenu>
          <SubMenu label="Wallets">
            <MenuItem>Current Wallet</MenuItem>
            <MenuItem>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem> Transactions </MenuItem>
          <SubMenu label="Settings">
            <MenuItem> Account </MenuItem>
            <MenuItem> Privacy </MenuItem>
            <MenuItem> Notifications </MenuItem>
          </SubMenu>
          <MenuItem> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <h1>WELCOME TO QUICKPAY</h1>
    </div>
  );
};

export default NavBar;
