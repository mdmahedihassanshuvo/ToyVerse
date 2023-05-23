import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import tabsData from '../../../Reuseable/TabsData';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file

const Category = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const [activeTabIndex, setActiveTabIndex] = useState(0)

    return (
        <div className='lg:mb-20 lg:mx-20' data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <h1 className='text-center text-xl mt-5 lg:mt-0 mb-5 lg:text-3xl text-accent font-bold lg:mb-24'>Toys Category</h1>
            <div>
                <div className='grid grid-cols-1 gap-2 lg:gap-5 md:grid-cols-3 lg:mx-12 lg:mb-24 text-center'>
                    {
                        tabsData.map((tab, index) => {
                            return (
                                <div key={tab.label}>
                                    <button
                                        key={tab.label}
                                        type='button'
                                        className={`rounded-md basis-1/2 py-2 border-b-4 font-bold transition-colors duration-300 ${index === activeTabIndex
                                            ? "border-primary text-accent"
                                            : "border-transparent hover:border-gray-200"
                                            }`}
                                        onClick={() => {
                                            // setIsLoading(true);
                                            setActiveTabIndex(index);
                                        }}
                                    >
                                        <p className='text-xl'>{tab.label}</p>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="py-4 ">
                    {tabsData[activeTabIndex].content}</div>
            </div>
        </div>
    );
};

export default Category;