import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { Dropdown, useColors } from 'frontatish';

const DropdownExample = () => {
  const Colors = useColors();
  const items = ['ITEM-A', 'ITEM-B', 'ITEM-C', 'ITEM-D', 'ITEM-E', 'ITEM-F'];
  const dropItems = [
    { value: 'AN', label: 'ANDAMAN & NICOBAR ISLANDS' },
    { value: 'AP', label: 'ANDHRA PRADESH' },
    { value: 'AR', label: 'ARUNACHAL PRADESH' },
    { value: 'AS', label: 'ASSAM' },
    { value: 'BH', label: 'BIHAR' },
  ];
  const [active, setActive] = useState(0);
  const onChange = (index: number) => {
    setActive(index);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        // justifyContent: 'center',
      }}
    >
      <Dropdown dropItems={items} active={active} onChange={onChange} />
      <Dropdown dropItems={dropItems} active={active} onChange={onChange} />
    </SafeAreaView>
  );
};

export default DropdownExample;
