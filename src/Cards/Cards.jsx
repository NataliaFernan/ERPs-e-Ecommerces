import React, {Component} from 'react'
import Card from './CardUi';
import img1 from "../assets/bling.png";
import img2 from "../assets/ecoys.jpg";
import img3 from "../assets/ihub.png";
import img4 from "../assets/infra.jpg";
import img5 from "../assets/linxC.png";
import img6 from "../assets/linxE.png";
import img7 from "../assets/linxO.png";
import img8 from "../assets/lojaI.png";
import img9 from "../assets/magento.png";
import img10 from "../assets/opencart.png";
import img11 from "../assets/tiny.png";
import img12 from "../assets/tray.png";
import img13 from "../assets/vtex.png";
import img14 from "../assets/woo.png";
import img15 from "../assets/magento2.png";
import img16 from "../assets/softvar.png";
import img17 from "../assets/Bseller.png";
import img18 from "../assets/idealeWare.png";

class Cards extends Component{
    render() {
        return(     
            <div className="container-fluid d-flex justify-content-center">
              
                <div className="row">
                <div className='header'>
                    <h1>Ecommerce</h1>
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img17} nome='bseller' title='BSeller'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img18} nome='idealeware' title='idealeWare'/>
                    </div>
                <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img3} nome='ihub' title='iHUB'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img4} nome='infracommerce' title='infra.commerce'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img8} nome='lojaintegrada' title='loja integrada'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img9} nome='magento' title='Magento'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img15} nome='magento2' title='Magento 2'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img10} nome='opencart' title='Opencart'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img12} nome='trayio' title='Tray.io'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img13} nome='vtex' title='Vtex'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img14} nome='woo' title='Woo Commerce'/>
                    </div>
                    <div className='erps'>
                    <h1>ERPs</h1>
                </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img1} nome='bling' title='Bling!'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img2} nome='ecoys' title='Ecoys'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img5} nome='linxc' title='Linx Commerce'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img6} nome='linxe' title='Linx Emillennium'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img7} nome='linxo' title='Linx Omnichannel'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img16} nome='softvar' title='Softvar'/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <Card imgsrc={img11} nome='tiny' title='Tiny'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;