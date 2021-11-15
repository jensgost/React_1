import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p onClick={() => navigate("/home")}>Home</p>
      <p onClick={() => navigate("/movies")}>Movies</p>
    </div>
  );
};
