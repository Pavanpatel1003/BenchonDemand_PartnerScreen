import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/logo.svg";
import toggle from "../assets/image/toggle.png";
import octicon_project from "../assets/image/octicon_project.png";
import fluent_people from "../assets/image/fluent_people.png";
import hugeicons_mail from "../assets/image/hugeicons_mail.png";
import carbon_user from "../assets/image/carbon_user.png";
import peopleCommunity from "../assets/image/peopleCommunity.png";

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <nav className={`sidebar ${isOpen ? "show" : ""}`}>
      <div className="position-sticky">
        <NavLink
          className="logo-set"
          to="/dashboard"
          onClick={onToggle}
          activeClassName="active"
        >
          <div className="">
            <img src={logo} alt="toggle" />
          </div>
        </NavLink>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/dashboard"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={toggle} alt="toggle" />
              </div>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/Project"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={octicon_project} alt="octicon_project" />
              </div>
              Project
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/MyPartner"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={fluent_people} alt="fluent_people" />
              </div>
              My Partner
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/Mailbox"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={hugeicons_mail} alt="hugeicons_mail" />
              </div>
              Mailbox
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/MyInterview"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={carbon_user} alt="carbon_user" />
              </div>
              My Interview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/ShortlistCandidates"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={peopleCommunity} alt="peopleCommunity" />
              </div>
              Shortlist Candidates
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/ClientResource"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={peopleCommunity} alt="peopleCommunity" />
              </div>
              Partner Resource
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/ClientOpenPosition"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={peopleCommunity} alt="peopleCommunity" />
              </div>
              Partner Open Position
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/ClientInterviewDetails"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={peopleCommunity} alt="peopleCommunity" />
              </div>
              Client Interview Details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/ClientInterview"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={peopleCommunity} alt="peopleCommunity" />
              </div>
              Client Interview
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/ClientOnboarded"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={peopleCommunity} alt="peopleCommunity" />
              </div>
              Partner Onboarded
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link topbar-left"
              to="/ClientOnBench"
              onClick={onToggle}
              activeClassName="active"
            >
              <div className="mx-2">
                <img src={peopleCommunity} alt="peopleCommunity" />
              </div>
              Partner OnBench
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Sidebar;
