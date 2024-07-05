
import React, { useState } from 'react';
import { userlogin } from './fetchdata';

export default function SignIn() {
  const [password, setpassword] = useState('');
  const [mail, setmail] = useState('');

  const handleClick = (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    window.alert('Testzugang! Email: user@example.com Passwort: password123 ');
  };


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Willkommen zurück!</h1>
          <p className="py-6">
            Deine nächsten Veranstaltungen warten - einfach einloggen und den
            Überblick behalten!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

          <form
            className="card-body"
            onSubmit={(e) => {
              e.preventDefault();
              userlogin(mail, password);
            }}
          >

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required

                value={mail}
                onChange={(e) => setmail(e.target.value)}

              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required

                value={password}
                onChange={(e) => setpassword(e.target.value)}

              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover"

                  onClick={handleClick}

                >
                  Forgot Login?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
