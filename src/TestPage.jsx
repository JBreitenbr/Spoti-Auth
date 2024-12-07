import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import spotify, { isAccessTokenValid } from "./utils/functions";
const TestPage = () => {const navigate = useNavigate();
                        useEffect(() => {
    if (!isAccessTokenValid()) {
      localStorage.clear();
      navigate("/Spoti-Auth/login");
    } else {
      const accessToken = localStorage.getItem("access_token");
      spotify.setAccessToken(accessToken);
    }
  }, [navigate]);
  return (
    <div>
      <h1>Das ist nur so ein Test</h1>
      {window.location.origin}
    </div>
  );
}
export default TestPage;