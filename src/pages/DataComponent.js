import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

function DataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, 'path/to/data');
    onValue(dataRef, (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  return (
    <div>
      <h2>Data dari Firebase:</h2>
    </div>
  );
}

export default DataComponent;