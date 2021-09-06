import React from 'react';

import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import DataTable from './components/DataTable/index'
import BarChart from './components/BarChart/index'
import Donut from './components/DonutChart/index'

function App() {
  return (
    <div className="text-primary">
        <Navbar />
        <div className="row px-3">
            <div className="col-sm-6">
                <h5>Taxa de sucesso %</h5>
                <BarChart />
            </div>
            <div className="col-sm-6">
                <h5>Todas as vendas</h5>
                <Donut />
            </div>
        </div>
        <DataTable />
        <Footer />
    </div>
  );
}

export default App;
