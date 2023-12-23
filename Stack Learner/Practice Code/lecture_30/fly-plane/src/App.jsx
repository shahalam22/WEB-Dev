import IconText from "./component/iconText";
import Navbar from "./component/navbar";
import Icon from "./component/Icon";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import CardS from "./component/CardS";
import TitleHead from "./component/TitleHead";
import CardC from "./component/CardC";
import Benefits from "./component/Benefits";
import News from "./component/News";
import NewsCard from "./component/NewsCard";
import Footer from "./component/Footer";
import TagLineC from "./component/TagLineC";
import TagLine from "./component/TagLine";

function App(){
    return (
        <div>
            <div style={{position:'relative'}}>
                <div style={{backgroundImage: 'url("/image/boat-lake.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw'}}>
                    <div style={{display:'flex', justifyContent:'space-between', width:'85%', marginLeft:'auto', marginRight:'auto'}}>
                        <div style={{display:'flex'}}>
                            <IconText src='/icons/icons8-location-50.png' imgText='location' text='84 Forest Ave, Lake Grove, New York'/>
                            <IconText src='/icons/icons8-call-50.png' imgText='call' text ='(+12) 345-678-91012'/>
                            <IconText src='/icons/icons8-email-48.png' imgText='email' text='contact.colorlib@gmail.com'/>
                        </div>
                        <div style={{display:'flex', flexDirection:'row-reverse', marginTop:'15px'}}>
                            <Icon src="/icons/icons8-skype-50.png" alt="skype"/>
                            <Icon src="/icons/icons8-youtube-64.png" alt="youtube"/>
                            <Icon src="/icons/icons8-twitter-50.png" alt="twitter"/>
                            <Icon src="/icons/icons8-facebook-50.png" alt="facebook"/>
                        </div>
                    </div>
                    <Navbar/>
                    <br />
                    <br />
                    <br />
                    <div style={{marginLeft:'auto', marginRight:'auto', width:'60%', textAlign:'center', color:'white'}}>
                        <h1 style={{fontSize:'80px', fontWeight:'bold'}}>Let's Make Your Best Trip Ever</h1>
                        <p style={{fontSize:'30px'}}>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us</p>
                    </div>
                    <br />
                    <div style={{textAlign:'center'}}>
                        <button style={{width:'160px', height:'45px', border:'none', fontSize:'18px'}}>Discover Now</button>
                    </div>
                </div>


{/* navbar is here */}

                <div style={{display:'flex', position: 'relative', left:'50%', transform:'translate(-50%, -50%)', backgroundColor:'white', width:'90%', boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2)'}}>
                    
                        <div style={{width:'25%', display: 'flex', flexDirection:'column', padding:'20px', borderRight:'1px solid #ddd'}}>
                            <label htmlFor="place" style={{color:'black', fontWeight:'bold', fontSize:'28px'}}>Where</label>
                            <input type="text" id="place" placeholder="Dhaka, Bangladesh" style={{border: 'none', borderBottom:'1px solid #ddd', width:'80%', paddingTop:'5px'}}/>
                        </div>
                        <div style={{width:'25%', display: 'flex', flexDirection:'column', padding:'20px', borderRight:'1px solid #ddd'}}>
                            <label htmlFor="date" style={{color:'black', fontWeight:'bold', fontSize:'28px'}}>Date</label>
                            <input type="date" id="date" placeholder="01 January" style={{border: 'none', borderBottom:'1px solid #ddd', width:'80%', paddingTop:'5px'}}/>
                        </div>
                        <div style={{width:'25%', display: 'flex', flexDirection:'column', padding:'20px', borderRight:'1px solid #ddd'}}>
                            <label htmlFor="guest" style={{color:'black', fontWeight:'bold', fontSize:'28px'}}>Guests</label>
                            <select name="guest" id="guest" style={{border: 'none', borderBottom:'1px solid #ddd', width:'80%', paddingTop:'5px'}}>
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div style={{width:'25%'}}>
                            <button style={{width:'100%', height:'100%', border: 'none', backgroundColor:'blue', color: 'white', fontSize:'24px'}}>SEARCH PLANE</button>
                        </div>
                </div>
            </div>


            <div style={{width:'100vw'}}>

                <div>
                    <TagLine color='black' tag='Special Offers' text='The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.'/>
                </div>

                <div style={{color:'black', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={{width: '27.5%', margin:'20px', boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2)'}}>
                        <CardS src='/image/image1.jpg' title='Known monument in the black hills of south'/>
                    </div>
                    <div style={{width: '27.5%', margin:'20px', boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2)'}}>
                        <CardS src='/image/image2.jpg' title='Known monument in the black hills of south'/>
                    </div>
                    <div style={{width: '27.5%', margin:'20px', boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2)'}}>
                        <CardS src='/image/image5.jpg' title='Known monument in the black hills of south'/>
                    </div>
                </div>
            </div>

            
            <div style={{backgroundColor:'#ddd', marginTop:'7%', paddingTop:'5px', paddingBottom:'80px'}}>
                <div style={{width:'100%'}}>
                    <TagLineC color='black' align='center' tag='Our Benefits' text='The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.'/>
                </div>

                <div style={{display:'flex', color:'black', paddingLeft:'80px', paddingRight:'80px'}}>
                    <div style={{color:'black', width:'50%'}}>
                        <div style={{display:'flex'}}>
                            <div style={{width:'50%', margin:'8px'}}>
                                <Benefits src='/icons/calendar.png' title='Personal Schedule' text='The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.'/>
                            </div>
                            <div style={{width:'50%', margin: '6px'}}>
                                <Benefits src='/icons/diamond.png' title='Luxury Met Budget' text='The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.'/>
                            </div>
                        </div>

                        <div style={{display:'flex'}}>
                            <div style={{width:'50%', margin:'8px'}}>
                                <Benefits src='/icons/shield.png' title='Ultimate Safety' text='The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.'/>
                            </div>
                            <div style={{width:'50%', margin: '6px'}}>
                                <Benefits src='/icons/sailor.png' title='Professional Crew' text='The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.'/>
                            </div>
                        </div>
                    </div>

                    <div style={{color:'black', width:'50%', display:'flex', paddingLeft:'25px'}}>
                        <div style={{width:'50%', margin:'10px'}}>
                            <img src="/image/image_6.jpg" alt="image6" style={{width:'100%', margin:'5px'}}/>
                            <img src="/image/image_7.jpg" alt="image7" style={{width:'100%', margin:'5px'}}/>
                        </div>
                        <div style={{width:'50%', margin:'10px'}}>
                            <img src="/image/image5.jpg" alt="image9" style={{width:'100%', margin:'5px'}}/>
                            <img src="/image/image_8.jpg" alt="image8" style={{width:'100%', margin:'5px'}}/>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div>
                    <TagLineC color='black' align='center' tag='Featured Places' text='The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.'/>    
                </div>      

                <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                    <div style={{width:'80%', color:'black'}}>
                        <Carousel>
                            <Carousel.Item interval={2500}>
                                <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                                    <CardC src='/image/image1.jpg' title='Mountains' text="Some quick example text to build on the card title and make up the
                                          bulk of the card's content."/>
                                    <CardC src='/image/image2.jpg' title='Lakes' text="Some quick example text to build on the card title and make up the
                                          bulk of the card's content."/>
                                    <CardC src='/image/image3.jpg' title='Rain Forests' text="Some quick example text to build on the card title and make up the
                                          bulk of the card's content."/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={2500}>
                                <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                                    <CardC src='/image/image1.jpg' title='Mountains' text="Some quick example text to build on the card title and make up the
                                          bulk of the card's content."/>
                                    <CardC src='/image/image2.jpg' title='Lakes' text="Some quick example text to build on the card title and make up the
                                          bulk of the card's content."/>
                                    <CardC src='/image/image3.jpg' title='Rain Forests' text="Some quick example text to build on the card title and make up the
                                          bulk of the card's content."/>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={2500}>
                                <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                                    <CardC src='/image/image1.jpg' title='Mountains' text="Some quick example text to build on the card title and make up the
                                          bulk of the card's content."/>
                                    <CardC src='/image/image2.jpg' title='Lakes' text="Some quick example text to build on the card title and make up the
                                          bulk of the card's content."/>
                                    <CardC src='/image/image3.jpg' title='Rain Forests' text="Some quick example text to build on the card title and make up the
                                          bulk of the card's content."/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

            </div>


            <div style={{backgroundColor:'black', marginTop:'9%'}}>
                <div style={{width:'vw', position:'relative'}}>
                    <img src="/image/image1.jpg" alt="image1" style={{opacity:'50%', width:'100%'}}/>
                    <div style={{position:'absolute', top:'20px'}}>
                        <div>
                            <TagLineC color='white' align='center' tag='Destination Gallary' text='The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.'/>
                        </div>
                    </div>

                    <div style={{display:'flex', justifyContent:'center', alignContent:'center', position:'absolute', top:'45%'}}>
                        <div style={{width:'80%'}}>
                            <Carousel>
                              <Carousel.Item>
                                <img src="/image/image2.jpg" alt="image1" style={{width:'100%'}}/>
                                <Carousel.Caption>
                                  <h1 style={{fontSize:'100px'}}>VIETNAM</h1>
                                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img src="/image/image3.jpg" alt="image1" style={{width:'100%'}}/>
                                <Carousel.Caption>
                                <h1 style={{fontSize:'100px'}}>CANADA</h1>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img src="/image/image5.jpg" alt="image1" style={{width:'100%'}}/>
                                <Carousel.Caption>
                                  <h1 style={{fontSize:'100px'}}>AMERICA</h1>
                                  <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                  </p>
                                </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img src="/image/image_7.jpg" alt="image1" style={{width:'100%'}}/>
                                <Carousel.Caption>
                                  <h1 style={{fontSize:'100px'}}>HONG KONG</h1>
                                  <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                  </p>
                                </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                <img src="/image/image_9.jpg" alt="image1" style={{width:'100%'}}/>
                                <Carousel.Caption>
                                  <h1 style={{fontSize:'100px'}}>SINGAPORE</h1>
                                  <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                  </p>
                                </Carousel.Caption>
                              </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>

                
            </div>


            <div style={{marginTop:'21%', color:'black'}}>
                <div>
                    <TagLine color='black' tag='Latest News'/>
                </div>

                <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                    <div style={{width:'30%'}}>
                        <div>
                            <div style={{display:'flex', marginTop:'25px'}}>
                                <News src='/image/image1.jpg' title='The point of using Lorem Ipsum is that it has...'/>
                            </div>
                            <div style={{marginTop:'25px'}}>
                                <News src='/image/image1.jpg' title='The point of using Lorem Ipsum is that it has...'/>
                            </div>
                            <div style={{marginTop:'25px'}}>
                                <News src='/image/image1.jpg' title='The point of using Lorem Ipsum is that it has...'/>
                            </div>

                        </div>
                    </div>
                    <div style={{width:'25%', margin:'25px'}}>
                        <NewsCard src='/image/image1.jpg' title='Card Title' text='The point of using Lorem Ipsum is that it has...'/>
                    </div>
                    <div style={{width:'25%', margin:'25px'}}>
                        <NewsCard src='/image/image1.jpg' title='Card Title' text='The point of using Lorem Ipsum is that it has...'/>
                    </div>
                </div>

            </div>


            <div>
                <Footer/>
            </div>
            
        </div>        
    )
}

export default App;