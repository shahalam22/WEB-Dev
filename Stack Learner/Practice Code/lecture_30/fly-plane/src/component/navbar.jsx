// import bootstrap from 'bootstrap';

const Navbar = () => {
    return (
        <div style={{width:'85%', marginLeft:'auto', marginRight:'auto'}}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{borderRadius:'10px'}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{fontSize:'30px', fontWeight:'bold', margin:'1px 30px'}}>FLY Buddy</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav" style={{display:'flex', flexDirection:'row-reverse'}}>
                        <ul class="navbar-nav">
                            <li class="nav-item" style={{fontSize:'18px', marginLeft:'30px'}}>
                                <a class="nav-link" aria-current="page" href="#" style={{color:'black'}}>Home</a>
                            </li>
                            <li class="nav-item" style={{fontSize:'18px', marginLeft:'30px'}}>
                                <a class="nav-link" href="#" style={{color:'black'}}>Pages</a>
                            </li>
                            <li class="nav-item" style={{fontSize:'18px', marginLeft:'30px'}}>
                                <a class="nav-link" href="#" style={{color:'black'}}>Blog</a>
                            </li>
                            <li class="nav-item" style={{fontSize:'18px', marginLeft:'30px'}}>
                                <a class="nav-link" href="#" style={{color:'black'}}>About Us</a>
                            </li>
                            <li class="nav-item" style={{fontSize:'18px', marginLeft:'30px'}}>
                                <a class="nav-link" href="#" style={{color:'black'}}>Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;