function LoginPage() {
  return (
    <>
      <section className="vh-100">
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="shadow col-12 col-md-8 col-lg-6 col-xl-5 ">
              <div
                className="card "
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                  <hr className="my-4" />
                </div>
                <a href="/auth/register" style={{color:"#000", textDecoration: "none"}}>Create Account</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
