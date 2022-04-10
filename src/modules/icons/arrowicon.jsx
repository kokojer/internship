import s from './icons.module.scss'
export const Arrowicon = ({width, height,style}) => {

    return (
        <svg width={width} height={height} data-testid="arrow" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={'ml-sm-1 ml-0 mb-1 mb-sm-0 ' + s.arrowIcon} style={style}>
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#6E7178" fill='none' strokeWidth="2"/>
        </svg>
    )}