import Header from "../../components/header";
import "./styles.css";

const Petshop = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
              className="img-fluid petshop-images"
            />
            <b>Petlove</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star"></span>
              <text>
                <b>4,2</b>
              </text>
              <span className="mdi mdi-cash-usd-outline"></span>
              <text>$$$</text>
              <span className="mdi mdi-crosshairs-gps"></span>
              <text>3,9km</text>
            </div>
            <label className="badge badge-primary">Frete Grátis </label>
          </div>
          <div className="col-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Petshop;
