import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';


export default function Shop() {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);

    return (
        <div>
            <h1>Withdraw/Deposit Money</h1>
            <button className="btn btn-outline-primary mx-2" onClick={() => { withdrawMoney(100) }}>-</button>
            Update Balance
            <button className="btn btn-outline-primary mx-2" onClick={() => { depositMoney(100) }}>+</button>
        </div>
    )
}
