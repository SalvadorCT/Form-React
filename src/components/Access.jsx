import './Extra.css';

export const Access = ()=> {
    return(
        <div className="d-flex justify-content-center container">
            <div className='acceso'>
            <ul class="nav navbar-general">
                <li class="nav-item active nav-a">
                    <a href="#login-form" data-component="tab">Iniciar Sesión</a>
                </li>
                <li class="nav-item nav-b">
                    <a href="#register-form" data-component="tab">Crear cuenta</a>
                </li>
            </ul>
            </div>
        </div>
    )
}