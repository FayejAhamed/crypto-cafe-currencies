import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const url = ` https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCoin(data);
                setLoading(false);
            })
    }, [id])
    return (
        <>
            {
                loading ? <Spinner></Spinner> :
                    <div className='px-4 h-[70vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                        <div className='h-full grid grid-col-1 md:grid-cols-2 justify-center items-center gap-4 content-center'>
                            <div className='order-2 md:order-1'>
                                <h1 className='text-3xl'>General info:</h1>
                                <hr />
                                <h1>Coin Name: {coin.name}</h1>
                                <h1>Market Cap RAnk: {coin.market_cap_rank}</h1>
                                <h1>Orgin: {coin.country_orgin ? coin.country_orgin : 'Not Available'}</h1>

                                <h1 className='text-3xl'>Scores</h1>
                                <hr />
                                <h1>Community Score:: {coin.community_score}</h1>
                                <h1>Developer Score: {coin.developer_score}</h1>
                            </div>
                            <div className='flex justify-center items-center order-1 md:order-2'>
                                <img src={coin.image?.large} alt="" />
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default CoinDetails;