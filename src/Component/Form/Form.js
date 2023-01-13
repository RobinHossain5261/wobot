import './Form.css';
import logo from '../../images/wobot-logo_blue 1.png';
import leftRetangle from '../../images/Rectangle 381.png';
import rightRetangle from '../../images/Rectangle 382.png';
import left from '../../images/Rectangle.png';
import middle from '../../images/Rectangle Copy.png';
import right from '../../images/Rectangle Copy 2.png';


const Form = () => {

    return (
        <div>
            <div className='body'>
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                </div>
                <img className='leftRetangel' src={leftRetangle} alt="" />
                <img className='rightRetangel' src={rightRetangle} alt="" />
                <div className='form-body'>
                    <div className='top-icon'>
                        <img className='icon-1' src={left} alt="" />
                        <img className='icon-2' src={middle} alt="" />
                        <img className='icon-3' src={right} alt="" />
                    </div>
                    <h1>It’s a delight to have you onboard.</h1>
                    <p>Help us know you better. <br />
                        (This is how we optimize Wobot as per your business needs)
                    </p>

                    <form>
                        <div>
                            <label className='lavel'>Company name</label> <br />
                            <input className='form-input' type="text" placeholder=' e.g. Example Inc' />
                        </div>
                        <div>
                            <label htmlFor="inds" className='lavel'>Industry</label> <br />
                            <select className='form-select' name="inds" id="inds">
                                <option disabled selected >Select</option>
                                <option>Primary industry.</option>
                                <option>Secondary industry.</option>
                            </select>
                        </div>
                        <div>
                            <label className='lavel'>Company size</label> <br />
                            <div className='company-size'>
                                <h4 className='size'>1-20</h4>
                                <h4 className='size'>21-50</h4>
                                <h4 className='size'>51-200</h4>
                                <h4 className='size'>201-500</h4>
                                <h4 className='size'>500+</h4>
                            </div>
                        </div>
                        <input className='btn' type="button" value="Get Started" />
                    </form>
                </div>
            </div>
            <footer>
                <small>Terms of use | Privacy policy</small>
            </footer>
        </div>
    );
};

export default Form;