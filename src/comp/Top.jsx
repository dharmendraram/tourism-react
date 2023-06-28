import React from 'react'

const Top = () => {
  return (
    <>
    {/* top section start */}
    <section className='top'>
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 info-top">
                <ul className='d-flex gap-4 py-1 '>
                    <li><a href="" ><i class="bi bi-telephone pe-2"></i>+1 763-227-5032</a></li>
                    <li><a href=""><i class="bi bi-envelope pe-2"></i>info@example.com</a></li>
                </ul>
            </div>
            <div className="col-lg-4 text-center social-icon py-2">
            <ul className='d-flex gap-4'>
                <li><a href=""><i class="bi bi-instagram"></i></a></li>
                <li><a href=""><i class="bi bi-facebook"></i></a></li>
                <li><a href=""><i class="bi bi-twitter"></i></a></li>
                <li><a href=""><i class="bi bi-whatsapp"></i></a></li>
            </ul>
            </div>
            <div className="col-lg-2 text-end py-2 drop-icon">
     <div className="dropdown">
  <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    ENG
  </a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">BAN</a></li>
    <li><a className="dropdown-item" href="#">FSP</a></li>
    <li><a className="dropdown-item" href="#">CHI</a></li>
  </ul>
</div>

            </div>
        </div>
    </div>

    </section>

    {/* top section end */}
      
    </>
  )
}

export default Top
