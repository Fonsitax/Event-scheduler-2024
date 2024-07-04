import React, { useState } from 'react';
import { addNewUser } from './fetchdata';

export default function SignUp() {
  const [password, setpassword] = useState('');
  const [mail, setmail] = useState('');

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sei dabei!</h1>
          <p className="py-6">
            Entdecke spannende Events ganz leicht - registriere dich jetzt und
            bleibe immer auf dem Laufenden!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            className="card-body"
            onSubmit={(e) => {
              e.preventDefault();
              addNewUser(mail, password);
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
                <span className="label-text">Password (Min 8 Zeichen)</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
