import { useTypedSelector } from '../hooks/useTypedSelector';
import { useEffect } from 'react';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';
import React from 'react';
import { useActions } from '../hooks/useActions';
import './cellList.css';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => {
      return data[id];
    });
  });
  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderedCells = cells.map((cell) => (
    <React.Fragment key={cell.id}>
      <CellListItem key={cell.id} cell={cell} />
      <AddCell previousCellId={cell.id} />
    </React.Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
