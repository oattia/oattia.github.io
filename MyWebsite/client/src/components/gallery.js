import React from 'react';
import { Link } from 'react-router-dom'

const URLs = [
    "https://lonelyplanetimages.imgix.net/mastheads/129607243_super.jpg?sharp=10&vib=20&w=1200",
    "https://www.chinadiscovery.com/assets/images/travel-guide/chengdu/chengdu-panda-base/chengdu-panda-base-head.jpg",
    "http://travelzom.com/wp-content/uploads/2018/02/Romantic-santorini-greece.jpg",
    "https://scontent-lga3-1.cdninstagram.com/vp/14455181dce6d89fbaaf3dff739a75e8/5CF4082A/t51.2885-15/sh0.08/e35/c0.83.1044.1044/s640x640/47694595_508875036301780_5084557799763111755_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com",
    "https://c1.staticflickr.com/2/1881/42656919850_1d348245fd_c.jpg",
    "https://scontent-frt3-2.cdninstagram.com/vp/958e2d945c59b5c370f26de69a642de7/5CAEC3EC/t51.2885-15/e35/42002683_493320327851047_2407922820459469087_n.jpg?se=7&ig_cache_key=MTg4NDkyMDc3MDgzNzc0MDk1NA%3D%3D.2",
];
const renderImg = (URL) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="card mb3">
                <img src={URL} className="card-img"/>
            </div>
        </div>
    );
}

export default () => {
    return (
        <div>
            <div className="container">
                <div className="jumbotron">
                    <h1><i className="fas fa-camera-retro mr-3"></i> Image Gallery</h1>
                    <p>A bunch of beautiful images that I didn't take</p>
                </div>
                <div className="row">
                    {URLs.map(renderImg)}
                </div>
                <Link to='/'>
                    <button type="button" className='btn btn-dark'>Home</button>
                </Link>
            </div>
        </div>
    );
}