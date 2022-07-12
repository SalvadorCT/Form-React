import './Extra.css';

export const Pform = () => {
    return(
        <div className='f1'>
        <div className="tab-panes active" id="login-form">
            <form name="login_form" 
            method="post" 
            action="/account/login_check"
            className='mt-3'>
                <div className="row">
                    <div className="col-sm-6 mt-3">
                        <label className="form-label required" for="">Email</label>
                        <input type="email" required="required" className="form-control" placeholder="Ejemplo: jgonzalesc89@gmail.com" pattern="^[a-zA-Z0-9._%+\-]+@([a-zA-Z0-9-]{1,}\.)+[a-zA-Z]{2,}$" ng-model="email" />
                    </div>
                    <div className="col-sm-6 mt-3">
                        <label className="form-label required" for="login_form_password">Contraseña</label>
                        <input type="password"required="required" className="form-control" placeholder="" ng-model="pwd" data-toggle-password="" />
                    </div>
                    <div className="col-sm-12 mt-3">
                        <a className="link-low-sm sub" href="a">
                            Olvidé mi contraseña
                        </a>
                    </div>
                </div>

                <button type="submit"
                    className="btn btn-security col-12 bg-warning mt-3">
                Iniciar sesión segura
                </button>
          </form>
        </div>
        </div>
    )
}