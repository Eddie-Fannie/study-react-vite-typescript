import React from 'react';

const ListItem: React.FC = (props) => {
  return (
    <li>{props.value}</li>
  );
};

const NumberList: React.FC = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 正确！key 应该在数组的上下文中被指定
    <ListItem key={number.toString()} value={number} />
  );
  console.log(ListItem);
  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default NumberList;
