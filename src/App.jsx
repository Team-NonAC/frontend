import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import Maincontent from './components/maincontent';
import './App.css';

const App = () => {
  const [filters, setFilters] = useState({
    disabilities: [],
  });

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
    {
      srNo: 3,
      sector: 'Handicrafts and Carpet',
      jobRole: 'Agarbatti Maker (Divyangjan)',
      qpCode: 'PWD/HCS/Q7901',
      categoryOfDisability: 'Locomotor Disability(LD)',
      viewAllCoverDisability: [
        'Hemophilia',
        'Acid Attack Victim',
        'Short Stature/Dwarfism',
        'Multiple Sclerosis',
        'Thalassemia',
      ],
    },
    {
      srNo: 4,
      sector: 'Handicrafts and Carpet',
      jobRole: 'Agarbatti Maker (Divyangjan)',
      qpCode: 'PWD/HCS/Q7901',
      categoryOfDisability: 'Low Vision(LV)',
      viewAllCoverDisability: ['Low Vision'],
    },
    {
      srNo: 5,
      sector: 'Handicrafts and Carpet',
      jobRole: 'Agarbatti Maker (Divyangjan)',
      qpCode: 'PWD/HCS/Q7901',
      categoryOfDisability: 'Speech-and-Hearing-Impaired(SHI)',
      viewAllCoverDisability: ['Hearing Impairment', 'Speech and Language disability'],
    },
    {
      srNo: 6,
      sector: 'Handicrafts and Carpet',
      jobRole: 'Agarbatti Maker (Divyangjan)',
      qpCode: 'PWD/HCS/Q7901',
      categoryOfDisability: 'Visual Impairment(VI)',
      viewAllCoverDisability: ['Blindness'],
    },
    {
      srNo: 7,
      sector: 'Green Jobs',
      jobRole: 'Agri-residue Aggregator (Divyangjan)',
      qpCode: 'PWD/SGJ/Q6201',
      categoryOfDisability: 'Locomotor Disability(LD)',
      viewAllCoverDisability: [
        'Locomotor Disability',
        'Cerebral Palsy',
        'Multiple Sclerosis',
        'Hemophilia',
        'Thalassemia',
        'Acid Attack Victim',
        'Short Stature/Dwarfism',
        'Sickle Cell Disease',
      ],
    },
    {
      srNo: 8,
      sector: 'Aerospace',
      jobRole: 'Airline Customer Service Executive (Divyangjan)',
      qpCode: 'PWD/AAS/Q0301',
      categoryOfDisability: 'Locomotor Disability(LD)',
      viewAllCoverDisability: [
        'Cerebral Palsy',
        'Sickle Cell Disease',
        'Parkinson\'s Disease',
        'Short Stature/Dwarfism',
        'Acid Attack Victim',
        'Thalassemia',
        'Hemophilia',
        'Multiple Sclerosis',
        'Locomotor Disability',
      ],
    },
    {
      srNo: 9,
      sector: 'Media & Entertainment',
      jobRole: 'Animator (Divyangjan)',
      qpCode: 'PWD/MES/Q0701',
      categoryOfDisability: 'Locomotor Disability(LD)',
      viewAllCoverDisability: [
        'Parkinson\'s Disease',
        'Cerebral Palsy',
        'Locomotor Disability',
        'Multiple Sclerosis',
        'Hemophilia',
        'Thalassemia',
      ],
    },
    {
      srNo: 10,
      sector: 'Media & Entertainment',
      jobRole: 'Animator (Divyangjan)',
      qpCode: 'PWD/MES/Q0701',
      categoryOfDisability: 'Speech-and-Hearing-Impaired(SHI)',
      viewAllCoverDisability: ['Hearing Impairment', 'Speech and Language disability'],
    },
  ];

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'disability') {
      setFilters({
        ...filters,
        disabilities: [...filters.disabilities, value],
      });
    }
  };

  const handleRemoveDisability = (index) => {
    const updatedDisabilities = [...filters.disabilities];
    updatedDisabilities.splice(index, 1);
    setFilters({
      ...filters,
      disabilities: updatedDisabilities,
    });
  };

  return (
    <>
      <Navbar />
      <Header />
      <Maincontent
        jobDetails={jobDetails}
        filters={filters}
        onFilterChange={handleFilterChange}
        onRemoveDisability={handleRemoveDisability}
      />
      <Footer />
    </>
  );
};

export default App;
