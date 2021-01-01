import Head from "next/head";
import Layout from "../../components/Layout";
import LoginForm from "../../components/admin/LoginForm";

const Login = () => {
  return (
    <Layout>
      <Head>
        <title>Login | YSTT</title>
      </Head>
      <div className="container my-5 pt-3">
        <h1 className="py-5 text-center">Login</h1>
        <div className="d-flex justify-content-center">
          <div className="card p-5 bg-light w-login text-center">
            <h1>
              <i className="fas fa-lock mb-4"></i>
            </h1>
            <div className="h5 mb-4">Please log in to access this page.</div>
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
