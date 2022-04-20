import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 340px;
    margin: 10px 0;
`;

const StyledSliderWrapper = styled.div`
    position: relative;
`;

const StyledSliderBar = styled.input`
    position: relative;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 18px;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
    z-index: 2;

    &::-webkit-slider-runnable-track {
        height: 4px;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: -5px;
        height: 14px;
        width: 14px;
        background-color: ${props => props.theme.palette.primary};
        box-shadow: 0 0 0 4px #fff;
        border-radius: 50%;
    }
`;

const StyledIndicatorsWrappers = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: -5px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`;

const StyledIndicator = styled.span<{ isActive: boolean }>`
    position: relative;
    display: block;
    width: 14px;
    height: 14px;
    background-color: ${props => props.isActive ? props.theme.palette.primary : '#dedede'};
    border-radius: 50%;
`;

const StyledMarkerSubWrappers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
`;

const StyledMarkerSub = styled.span<{ tag: string }>`
    position: relative;
    display: block;
    text-align: center;
    width: 14px;
    height: 18px;
    font-size: 14px;
    cursor: pointer;

    &:hover::after {
        background-color: ${props => props.theme.palette.primary};
        color: #fff;
    }

    &::after {
        position: absolute;
        text-align: center;
        content: '${props => props.tag}';
        width: 40px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2px 0;
        background-color: #dedede;
        color: #707070;
        border-radius: 10px;
        padding: 2px 4px;
        transition: all 0.5s ease;
    }

    &:first-child::after {
        margin-left: 16px;
    }

    &:last-child::after {
        margin-left: -16px;
    }
`;

const ProgressBar = styled.div<{ widthParam: number }>`
    position: absolute;
    content: '';
    top: 7px;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #dedede;

    &::before {
        position: absolute;
        content: '';
        left: 0;
        width: ${props => props.widthParam}%;
        background-color: ${props => props.theme.palette.primary};
        height: 4px;
    }
`;

interface SliderBarProps {
    value: number,
    setValue: (value: number) => void;
    /**
     * Number of indicator to display.
     * should be larger than 1
     */
    indicators?: number;
}

const SliderBar: React.FC<SliderBarProps> = ({
    value,
    setValue,
    indicators = 5
}) => {
    if (indicators <= 1) indicators = 2;
    const iter = Array(indicators).fill(0).map((_, i) => i * Math.floor(100 / (indicators - 1)));

    const onClick = (e: SyntheticEvent) => {
        const target = e.target as HTMLSpanElement;
        if (target && target.dataset.tag) {
            setValue(parseInt(target.dataset.tag));
        }
    }

    const onChange = (e: SyntheticEvent) => {
        const { value } = e.target as HTMLInputElement;
        setValue(parseInt(value));
    }

    return (
        <Wrapper>
            <StyledSliderWrapper>
                <StyledSliderBar
                    type='range'
                    min={0}
                    max={100}
                    step={1}
                    value={value}
                    onChange={onChange}
                />
                <StyledIndicatorsWrappers>
                    {
                        iter.map((v, i) => <StyledIndicator key={i} isActive={v <= value} />)
                    }
                </StyledIndicatorsWrappers>
                <ProgressBar widthParam={value}/>
            </StyledSliderWrapper>
            <StyledMarkerSubWrappers>
                {
                    iter.map((v, i) =>
                        <StyledMarkerSub
                            key={i}
                            tag={v.toString() + '%'}
                            data-tag={v}
                            onClick={onClick}
                        />
                    )
                }
            </StyledMarkerSubWrappers>
        </Wrapper>
    )
};

export default SliderBar;