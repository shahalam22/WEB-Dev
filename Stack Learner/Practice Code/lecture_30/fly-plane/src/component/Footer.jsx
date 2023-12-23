const Footer = () => {
    return (
        <div>
            <div style={{marginTop:'7%', paddingTop:'5%', paddingBottom:'6%', width:'vw', backgroundColor:'black', display:'flex', justifyContent:'center', alignContent:'center'}}>
                <div style={{textAlign:'center', width:'70%'}}>
                    <div>
                        <h1 style={{margin:'20px'}}>FLY PLANE</h1>
                        <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, impedit. Soluta quasi animi quod accusamus atque id, harum ullam veritatis blanditiis aliquid excepturi sequi sed ad. Veniam nihil incidunt quibusdam.</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                        <img src="/icons/icons8-facebook-50.png" alt="facebook" style={{margin:'30px', width:'40px'}}/>
                        <img src="/icons/icons8-twitter-50.png" alt="twitter" style={{margin:'30px', width:'40px'}}/>
                        <img src="/icons/icons8-skype-50.png" alt="skype" style={{margin:'30px', width:'40px'}}/>
                        <img src="/icons/icons8-youtube-64.png" alt="youtube" style={{margin:'30px', width:'40px'}}/>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignContent:'center', color:'white', fontSize:'25px'}}>
                        <a href="#" style={{color:'white', textDecoration:'none', marginLeft:'20px', marginRight:'20px'}}>HOME</a>
                        <a href="#" style={{color:'white', textDecoration:'none', marginLeft:'20px', marginRight:'20px'}}>PAGES</a>
                        <a href="#" style={{color:'white', textDecoration:'none', marginLeft:'20px', marginRight:'20px'}}>BLOG</a>
                        <a href="#" style={{color:'white', textDecoration:'none', marginLeft:'20px', marginRight:'20px'}}>ABOUT US</a>
                        <a href="#" style={{color:'white', textDecoration:'none', marginLeft:'20px', marginRight:'20px'}}>CONTACTS</a>
                    </div>
                    <p style={{marginTop:'10px'}}>Copyright ©2023 All rights reserved | This template is made with  by <a href="#" style={{textDecoration:'none'}}>Shah Alam</a></p>
                </div>
            </div>
        </div>
    )
}


export default Footer;