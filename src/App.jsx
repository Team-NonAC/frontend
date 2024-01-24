import React from 'react'; // Import Link from react-router-dom
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import Maincontent from './components/maincontent';
import './App.css';

const App = () => {
  const jobDetails = [
    {
      srNo: 1,
      sector: 'BFSI',
      jobRole: 'Accounts Assistant (Divyangjan)',
      qpCode: 'PWD/BSC/Q8103',
      categoryOfDisability: 'Locomotor Disability (LD)',
      viewAllCoverDisability: [
        'Short Stature/Dwarfism',
        'Cerebral Palsy',
        'Thalassemia',
        'Hemophilia',
        'Locomotor Disability',
        'Acid Attack Victim',
        'Leprosy cured',
        'Chronic Neurological Conditions',
        'Parkinson\'s Disease',
        'Sickle Cell Disease',
        'Multiple Sclerosis',
      ],
    },
    {
      srNo: 2,
      sector: 'BFSI',
      jobRole: 'Accounts Assistant (Divyangjan)',
      qpCode: 'PWD/BSC/Q8103',
      categoryOfDisability: 'Speech-and-Hearing-Impaired (SHI)',
      viewAllCoverDisability: ['Hearing Impairment', 'Speech and Language disability'],
    },
  ];
  return (
    <>
      <Navbar/>
      <Header />
      <Maincontent jobDetails={jobDetails}/>
      <Footer />
    </>
  );
};




export default App;
