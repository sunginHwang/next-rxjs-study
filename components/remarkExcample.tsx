import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {iRootState, Dispatch} from '../store';

interface RemarkExampleProps {
}


const RemarkExampleProps: React.FC<RemarkExampleProps> = ({}) => {

    const {count} = useSelector((state: iRootState) => state);
    const dispatch = useDispatch<Dispatch>();

    // @ts-ignore
    const onBtnClick = () => dispatch.count.increment();

    return (
        <div>
            <button onClick={onBtnClick}> {count}</button>
        </div>
    );
};

export default RemarkExampleProps;
