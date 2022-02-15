import React from 'react'
import { useParams } from 'react-router-dom'
import BSellerForm from '../Components/BSellerForm';
import IdealeWare from '../Components/idealeWare';
import Ecoys from '../Components/Ecoys';
import Bling from '../Components/Bling';
import IHub from '../Components/IHub';
import InfraCommerce from '../Components/InfraCommerce';
import Lojaintegrada from '../Components/Lojaintegrada';
import Magento from '../Components/Magento';
import Magento2 from '../Components/Magento2';
import Opencart from '../Components/Opencart';
import TrayIo from '../Components/TrayIo';
import LinxE from '../Components/LinxE';
import LinxC from '../Components/LinxC';
import LinxO from '../Components/LinxO';
import Softvar from '../Components/Softvar';
import Tiny from '../Components/Tiny';
import Vtex from '../Components/Vtex';
import Woo from '../Components/Woo';


export default function Forms() {
   let {nomeEmpresa} = useParams();


   let form;
    if (nomeEmpresa == "bseller") {
    form = <BSellerForm/>
    }else if (nomeEmpresa == "idealeware"){
       form = <IdealeWare/>
    }else if (nomeEmpresa == "ecoys"){
       form = <Ecoys/>
    }else if (nomeEmpresa == "bling"){
        form = <Bling/>
    }else if (nomeEmpresa == "ihub"){
        form = <IHub/>
    } else if (nomeEmpresa == "infracommerce"){
        form = <InfraCommerce/>
    }else if (nomeEmpresa == "lojaintegrada"){
        form = <Lojaintegrada/>
    } else if (nomeEmpresa == "magento"){
        form = <Magento/>
    }else if (nomeEmpresa == "magento2"){
        form = <Magento2/>
    }else if (nomeEmpresa == "opencart"){
        form = <Opencart/>
    }else if (nomeEmpresa == "trayio"){
        form = <TrayIo/>
    }else if (nomeEmpresa == "linxe"){
        form = <LinxE/>
    }else if (nomeEmpresa == "linxc"){
        form = <LinxC/>
    }else if (nomeEmpresa == "linxo"){
        form = <LinxO/>
    }else if (nomeEmpresa == "softvar"){
        form = <Softvar/>
    }else if (nomeEmpresa == "tiny"){
        form = <Tiny/>
    }else if (nomeEmpresa == "vtex"){
        form = <Vtex/>
     }else if (nomeEmpresa == "woo"){
            form = <Woo/>
    }else {
        form = <h1>Em construção</h1>
    }

  return (
      <div className="justify-content-center">
       
          <br>
          </br>
          <div className="row">
              {form}
          </div>
      </div>
  )
}
