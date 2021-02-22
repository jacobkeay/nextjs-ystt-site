import Head from "next/head";
import { useState, useEffect } from "react";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import cookie from "js-cookie";
import Layout from "../../components/Layout";
import Logout from "../../components/admin/Logout";
import DashMain from "../../components/admin/DashMain";
import Spinner from "../../components/Spinner";
import { server } from "../../config/index";

const Dashboard = ({ authed }) => {
  useEffect(() => {
    if (!authed) {
      Router.push("/admin/login");
    }
  }, []);
  return (
    <Layout>
      <Head>
        <title>Dashboard | YSTT</title>
      </Head>
      {!authed && (
        <div className="container my-5 pt-3">
          <Spinner path="/Loader.gif" text="Loading dashboard..." />
        </div>
      )}
      {authed && (
        <div className="container my-5 pt-3">
          <h1 className="pt-5 text-center">Admin Dashboard</h1>
          <div className="text-center mt-3 mb-5">
            <Logout />
          </div>
          <DashMain />
        </div>
      )}
    </Layout>
  );
};

Dashboard.getInitialProps = async ctx => {
  let authed = false;
  if (cookie.get("token")) {
    authed = true;
  }
  return { authed };
};

export default Dashboard;
