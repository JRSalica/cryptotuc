const Footer = () => {
  return (
    <footer className='container-fluid d-flex justify-content-between align-items-center py-3 bg-dark'>
    <div className='col-md-3 ms-3 d-flex align-items-center'>
      <p className='mb-0 fs-5 text-white d-flex flex-column flex-sm-row'><span className='pe-2'>© 2022</span><span>CryptoTuc</span></p>
    </div>
    <div className='col-md-3 d-flex align-items-center justify-content-center mb-md-0 '>
      <a href='/' className='link-dark text-decoration-none'>
        <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' fill='currentColor' className='bi bi-currency-bitcoin text-light border border-2 rounded-circle' viewBox='0 0 16 16'>
          <path d='M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z'/>
        </svg>
      </a>
    </div>
    <div className='nav col-md-3 me-3 justify-content-end'>
      <ul className='d-flex flex-row mb-0 list-unstyled'>
        <li className='ms-3'><i className='bi bi-github text-white fs-3'></i></li>
        <li className='ms-3'><i className='bi bi-instagram text-white fs-3'></i></li>
        <li className='ms-3'><i className='bi bi-facebook text-white fs-3'></i></li>
      </ul>
    </div>
  </footer>
  );
};

export default Footer;
