
import './Loader.css';
import React from 'react';
import { connect } from 'react-redux';



export default function Loader(props) {
    
    const{loading} = props;
    

    if(!loading) return true;

    return (
        <div>
            
            <div className='overlay'></div>
            <div className='absolute w-1/4 top-50 p-3  text-center left-50 bg-white border border-gray-400'>
                <div class='lds-roller'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>Loading</div>
            </div>
        </div>
    );
}