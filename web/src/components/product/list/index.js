import './styles.css';

const Product = () => {
    return(
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img src={"https://images.tcdn.com.br/img/img_prod/866956/racao_biofresh_para_caes_castrados_de_racas_pequenas_e_mini_3kg_67_1_20210122141814.png"}
                    className="img-fluid"/>
                </div>
                <div className="col-6">
                    <h6>
                        <label className="badge badge-primary">R$ 50,00</label>
                    </h6>
                    <small>
                        <b>Nome do Produto</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-secundary rounded-circle"></button>
                </div>
            </div>
        </div>
    );
}

export default Product;