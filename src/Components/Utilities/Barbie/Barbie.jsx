import React, { useEffect, useState } from 'react';
import ToyCard from '../../ToyCard/ToyCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file

const Barbie = () => {

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://toy-server-psi.vercel.app/categoryToys?subCategory=barbie')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setToys(data);
            })
    }, [])

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5' data-aos="fade-down-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500">
            {
                toys.map(toy => <ToyCard
                    key={toy._id}
                    toy={toy}
                ></ToyCard>)
            }
        </div>
    );
};

export default Barbie;