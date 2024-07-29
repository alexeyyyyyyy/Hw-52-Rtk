import { useState } from "react"
import type { LoginRequest } from "../../utils/interfaces"
import { useAppDispatch } from "../../app/hooks"
import { loginFetch } from "../../features/actions/loginAction"

const LogIn = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useAppDispatch();


  const handleClickLogin = () => {
    const logUser:LoginRequest = {
      login:email,
      password
    }
   dispatch(loginFetch(logUser))
   setPassword("")
   setEmail("")
  }
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="mb-5">
            <h3>Log in</h3>
          </div>
        </div>
      </div>
        <div className="row gy-3 overflow-hidden">
          <div className="col-12">
            <div className="form-floating mb-1">
              <input
                onChange={(e) => setEmail(e.target.value.trim())}
                type="email" className="form-control  border-2 " name="email" id="email"
                     placeholder="name@example.com" required />
              <label form="email" className="email form-label">Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating mb-1">
              <input
                onChange={(e) => setPassword(e.target.value.trim())}
                type="password" className="password form-control border-2" name="password" id="password" defaultValue=""
                     placeholder="Password" required />
              <label htmlFor="password" className="pass form-label">Password</label>
            </div>
          </div>

          <div className="col-12">
            <div className="d-grid">
              <button
                onClick={handleClickLogin}
                className="btn bsb-btn-3xl btn-primary py-3" type="submit">Log in now</button>
            </div>
          </div>
          <div className="col-12">
            <div className="d-grid">
              <button

                className="btn bsb-btn-3xl btn-primary py-3" type="submit">Clear</button>
            </div>
          </div>
        </div>
    </div>


)
}

export default LogIn