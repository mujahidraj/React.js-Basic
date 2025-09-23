import React, { use } from 'react';
import Shoes from '../Shoes/Shoes';

const ManyShoes = ({fetchShoe}) => {
    const shoes= use(fetchShoe);
    console.log(shoes);
    
    return (
        <div>
            {
                shoes.map(list=><Shoes key={list.id} list={list}></Shoes>)
            }
        </div>
    );
};

export default ManyShoes;