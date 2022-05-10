import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import userdata from './tempData1.json';
import '../attackStyle.css';
import Switch from '@material-ui/core/Switch';

export default function AttackNetworkTable1(props) {
  const [users, setUsers] = useState(userdata.data);

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(users);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setUsers(tempData);
  };

  return (
    <div className="">
      <DragDropContext onDragEnd={handleDragEnd}>
        <table className="MainTable Mtt2">
          <thead>
            <tr className="Mtt2">
              <th></th>
              <th className="Mtt2 padding1">정책</th>
              <th className="Mtt2 padding1">설명</th>
              <th className="Mtt2 padding1">활성화</th>
            </tr>
          </thead>
          <Droppable droppableId="droppable-1">
            {(provider) => (
              <tbody
                className="text-capitalize"
                ref={provider.innerRef}
                {...provider.droppableProps}
              >
                {users?.map((user, index) => (
                  <Draggable
                    key={user.name}
                    draggableId={user.name}
                    index={index}
                  >
                    {(provider) => (
                      <tr
                        className="Mtt2"
                        {...provider.draggableProps}
                        ref={provider.innerRef}
                      >
                        <td className="Mtt2" {...provider.dragHandleProps}>
                          ■
                        </td>
                        <td className="Mtt2">{user.name}</td>
                        <td className="Mtt2">{user.des}</td>
                        <td className="Mtt2">
                          <Switch></Switch>
                        </td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provider.placeholder}
              </tbody>
            )}
          </Droppable>
        </table>
      </DragDropContext>
    </div>
  );
}
