import React from 'react';

const BatchSelector = ({ batches, selectedBatch, onSelectBatch }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ color: 'black' }} htmlFor="batch-select">Select Batch: </label>
      <select
        style={{ color: 'black', fontWeight: 'bold', fontSize: '13px', textAlign: 'center', backgroundColor: '#404a6d8a', borderRadius: '4px', borderWidth: '0px', borderColor: 'black', marginBottom: '20px' }}
        id="batch-select"
        value={selectedBatch}
        onChange={(e) => onSelectBatch(e.target.value)}
      >
        <option value="" disabled>Select a batch</option>
        {batches.map((batch, index) => (
          <option key={index} value={batch}>
            {batch}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BatchSelector;
