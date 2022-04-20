import React, { Children, isValidElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { TabNavItemProps } from './TabNavItem';

const StyledTabNav = styled.div`
    position: relative;
    border-bottom: 1px solid rgba(133, 133, 133, 0.5);
    ::after {
        content: '';
        display: block;
        clear: both;
    }
`;

const StyledWrapper = styled.div<{ isActive: boolean }>`
    float: left;
    color: ${props => props.isActive ? props.theme.palette.primary : 'black'};
`;

const Indicator = styled.span<{ x1: number, x2: number }>`
    position: absolute;
    bottom: -1px;
    // TabNavItem.tsx에서 좌우 padding 8px, 총 16px을 주었으므로 -16px
    left: ${props => props.x1 - 16}px;
    width: ${props => props.x2}px;
    height: 2px;
    background-color: ${props => props.theme.palette.primary};
    transition: all 0.5s ease;
`;

interface TabNavProps {
    active: number;
    onClick: (index: number) => void;
}

const TabNav: React.FC<TabNavProps> = ({ active, onClick, children }) => {
    const arrayChildren = Children.toArray(children);
    const ref = useRef<HTMLDivElement>(null);
    const [indicatorCoords, setIndicatorCoords] = useState({ x1: 0, x2: 0 });

    useEffect(() => {
        if (ref.current) {
            const { x, width } = ref.current.getBoundingClientRect();
            setIndicatorCoords({ x1: x, x2: width });
        }
    }, [active, ref]);

    return (
        <StyledTabNav>
            {
                Children.map(arrayChildren, (child, i) => {
                    if (!isValidElement<TabNavItemProps>(child)) {
                        throw new Error('Invalid Props!');
                    }
                    return (
                        <StyledWrapper
                            onClick={() => onClick(i)}
                            ref={active === i ? ref : null}
                            isActive={active === i}
                        >
                            {child}
                        </StyledWrapper>
                    )
                })
            }
            <Indicator x1={indicatorCoords.x1} x2={indicatorCoords.x2} />
        </StyledTabNav>
    )
};

export default TabNav;