import React from 'react';
import { useParams } from 'react-router-dom';

function ChannelDetail() {
  const { id } =useParams();
  return (
    <div>
      {id}
    </div>
  )
}

export default ChannelDetail
