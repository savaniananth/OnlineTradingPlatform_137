import React from 'react';
import { Route ,Routes} from 'react-router';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import App from './App';
import Reg from './Reg';
import Stocks from './stocks'
import Snap from './snapdeal_cmp'
import Inven from './stock_in'
import Kore from './kore_cmp'
import Home from './home';
import Tata from './tata_cmp'
import Oyo from './oyo_cmp'
import Essen from './essen_cmp'
import Cell from './cell_cmp'
import Free from './free_sub'
import Mem from './membership'
import Pre from './premium'
import Pro from './prod'
import Pur from './purchase'
import Rev from './review'
import Abo from './about'
import Btc from './btc';
import Log from './login'
import Fed from './feedback'
import store from './store';
import Acc from './account'
import FetchData from './fetch_api';
import { ImportExportRounded } from '@mui/icons-material';
// import { Login } from '@mui/icons-material';
import Chart from './stock_chart';

function App(){
    return(
        <div>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Log/>}/>
            <Route path="/stocks" element={<Stocks/>}/>
            <Route path="/tata_cpm" element={<Tata/>}/>
            <Route path="/Reg" element={<Reg/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/free_sub" element={<Free/>}/>
            <Route path="/membership" element={<Mem/>}/>
            <Route path="/premium" element={<Pre/>}/>
            <Route path="/prod" element={<Pro/>}/>
            <Route path="/cell_cmp" element={<Cell/>}/>
            <Route path="/snapdeal_cmp" element={<Snap/>}/>
            <Route path="/essen_cmp" element={<Essen/>}/>
            <Route path="/oyo_cmp" element={<Oyo/>}/>
            <Route path="/kore_cmp" element={<Kore/>}/>
            <Route path="/about" element={<Abo/>}/>
            <Route path="/stock_chart" element={<Chart/>}/>
            <Route path="/purchase" element={<Pur/>}/>
            <Route path="/btc" element={<Btc/>}/>
            <Route path="/feedback" element={<Fed/>}/>
            <Route path="/stock_in" element={<Inven/>}/>
            <Route path="/account" element={<Acc/>}/>
      

          </Routes>
        </div>
        // <FetchData/>
        // <Chart/>

    );
}

export default App;