import Head from "next/head";
import { useState, useEffect } from "react";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import cookie from "js-cookie";
import Layout from "../../components/Layout";
import Logout from "../../components/admin/Logout";
import DashMain from "../../components/admin/DashMain";
import { server } from "../../config/index";

const Dashboard = props => {
  const [authed, setAuthed] = useState(props.isAuthenticated);

  useEffect(() => {
    checkAuthed();
    if (!authed) {
      Router.push("/admin/login");
    }
  });

  const checkAuthed = async () => {
    const token = cookie.get("token");

    const res = await fetch(`/api/auth`, {
      method: "POST",
      headers: {
        "x-auth-token": token,
      },
    });

    const data = await res.json();
    setAuthed(data.success);
  };

  return (
    <Layout>
      <Head>
        <title>Dashboard | YSTT</title>
      </Head>
      <div className="container my-5 pt-3">
        <h1 className="pt-5 text-center">Admin Dashboard</h1>
        <div className="text-center mt-3 mb-5">
          <Logout />
        </div>
        <DashMain />
      </div>
    </Layout>
  );
};

Dashboard.getInitialProps = async ctx => {
  const token = cookie.get("token");

  const res = await fetch(`${server}/api/auth`, {
    method: "POST",
    headers: {
      "x-auth-token": token,
    },
  });

  const data = await res.json();
  const isAuthenticated = data.success;
  return { isAuthenticated };
};

export default Dashboard;
