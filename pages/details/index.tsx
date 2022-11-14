import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Map from './components/Map';
import Footer from './components/Footer';


function JobDetails() {
    return (
        <div className='flex max-w-[60%]'>
            <div className='flex flex-col'>
                <Header title="Job Details"/>
                <Main 
                    title="Arbeitsmediziner/-in/Betriebsmediziner/-in(m/w/d) oder einen Arzt/eine Arztin(m/w/d)fur die Weiterbildung zum Facharzt/zur Facharztin fur Arbeitsnedizin(m/w/d)"
                    salary="€ 54000-60000"
                />
                <Footer />
            </div>
            <div>
                <Map styles="min-w-[50%]"/>
            </div>
        </div>
    );
}

export default JobDetails;