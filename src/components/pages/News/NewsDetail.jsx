import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '@/data';

export default function NewsDetail() {
  const params = useParams();
  const [item, setItem] = React.useState(null);
  console.log(item);

  React.useEffect(() => {
    setItem(data);
  }, [params.id]);
  return <div>{item && item[params.id - 1].description}</div>;
}
