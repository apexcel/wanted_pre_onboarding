import React, { useState } from 'react';
import TabBody from './TabBody';
import TabNav from './TabNav';
import TabNavItem from './TabNavItem';

const Example: React.FC = () => {
    const [active, setActive] = useState(1);

    const onClick = (index: number) => setActive(index);

    return (
        <>
            <TabNav active={active} onClick={onClick}>
                <TabNavItem label='Needless to say, I keep in check. She was a bad-bad, nevertheless (Yeah)' />
                <TabNavItem label='Tab 2' />
                <TabNavItem label='Tab 3' />
            </TabNav>
            <TabBody active={active} index={0}>
                Tab Body 1
            </TabBody>
            <TabBody active={active} index={1}>
                Tab Body 2
            </TabBody>
            <TabBody active={active} index={2}>
                Tab Body 3
            </TabBody>
        </>
    )
};

export default Example;