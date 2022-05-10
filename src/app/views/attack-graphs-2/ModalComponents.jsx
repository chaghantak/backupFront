import React from 'react';
import './Modal.scss';
import testImage from './test.png';


const ModalComponents = ({ModalOnOff, id, type}) => {
    const random = Math.random()*100; 
    const onCloseModal = (e) => {

        if(e.target === e.currentTarget){
            ModalOnOff()
        }

    }
    return (
        <div className="modal__container" onClick={onCloseModal}>
            <div className="modal">
            <pre>title/{id} ////// {random} </pre>

            {type=='firewall'? (
                     <table className='modalTable' >
                     <thead>
                     <tr>
                         <th>룰</th>
                         <th>소스</th>
                         <th>대상</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr>
                         <td>차단</td>
                         <td>IP/PORT</td>
                         <td>IP/PORT</td>
                     </tr>
                     <tr>
                         <td>허용</td>
                         <td>IP/PORT</td>
                         <td>IP/PORT</td>
                     </tr>
                     <tr>
                         <td>허용</td>
                         <td>IP/PORT</td>
                         <td>IP/PORT</td>
                     </tr>
                     </tbody>
                 </table>
            ):(type =='pc')?(
                <img src={testImage} height='300px' width='300px'/>
            ):(
                <table className='modalTable' >
                     <thead>
                     <tr>
                         <th>TID</th>
                         <th>확률</th>
                         <th>설명</th>
                         <th>대응</th>
                         <th>수행</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr>
                         <td>2210</td>
                         <td>78.xx</td>
                         <td>~</td>
                         <td>RID</td>
                         <td>자동</td>
                     </tr>
                     <tr>
                         <td>2222</td>
                         <td>13.xx</td>
                         <td>~</td>
                         <td>RID</td>
                         <td>수동</td>
                     </tr>
                     <tr>
                         <td>3333</td>
                         <td>9.xx</td>
                         <td>~</td>
                         <td>RID</td>
                         <td>자동</td>
                     </tr>
                     </tbody>
                 </table>
            )}
           <br />
                <button className="modal__button" onClick={ModalOnOff}> 닫기</button>
            
            </div>
        </div>
    )
}

export default ModalComponents;