import logoReact from "../img/logo.svg";


/** 
 * Creates a logo element */
function LogoReact() {
    return(
      <div className='logo-container'>
        <img 
          src={logoReact} 
          alt="Logo React" 
          className='logo' 
        />
      </div>
    );
}

export default LogoReact;