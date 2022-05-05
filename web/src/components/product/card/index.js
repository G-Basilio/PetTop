import './styles.css';

const Product = () => {
    return (
        <div className="product col-3">
            <img 
            src="https://guabinatural.com.br/wp-content/uploads/2020/09/GN-Cao-Filhote-Mini-e-Pequeno-Frango-e-Arroz-Integral-1kg-FRENTE.png"
            className="img-fluid align-center"
            />
            <button className="btn btn-primary rounded-circle">+</button>
            <h4>
                <label className="badge badge-primary">R$ 100,00</label>
            </h4>
            <small>
                <b>Ração Guabi Natural Adulto Raças Pequenas e Mini</b>
            </small>
        </div>
    );
};

export default Product;