import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Product() {
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return <h1>Product {params.slug}</h1>;
}
