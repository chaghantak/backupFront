import React from 'react';
import './Modal.scss';


const ModalComponents = ({ModalOnOff, id}) => {
    const onCloseModal = (e) => {

        if(e.target === e.currentTarget){
            ModalOnOff()
        }

    }
    return (
        <div className="modal__container" onClick={onCloseModal}>
            <div className="modal">
                <p>{id}</p>
                     <table className='modalTable' >
                     <thead>
                     <tr>
                         <th>일시</th>
                         <th>공격명</th>
                         <th>대상 호스트</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr>
                         <td>2021-10-11 13:22:24</td>
                         <td>PowerShell with suspicious commands</td>
                         <td>호스트A (192.168.37.105)</td>

                     </tr>
                     <tr>
                         <td>2021-11-04 15:11:34</td>
                         <td>Suspicious PowerShell Execution</td>
                         <td>호스트B (192.168.37.134)</td>

                     </tr>
                     </tbody>
                 </table>
           <br />
                <button className="modal__button" onClick={ModalOnOff}> 닫기</button>
            
            </div>
        </div>
    )
}

export default ModalComponents;