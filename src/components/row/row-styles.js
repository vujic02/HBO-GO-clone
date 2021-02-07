import styled from 'styled-components';

export const RowContainer = styled.div`
    display: flex;
    overflow: hidden;
    padding: 20px;
    &::-webkit-scrollbar {
        display: none;
    }
    .rec.rec-arrow {
        background-color: #000 !important;
        box-shadow: none;
        color: #fff;
        transition: all 0.3s ease;
    }
    .rec.rec-arrow:hover {
        transition: all 0.4s ease;
        color: #0091ea;
        background-color: transparent;
    }
    .rec.rec-arrow:active {
        background-color: #0282d1 !important;
    }
`

export const RowItemContainer = styled.div`
    display: inline-block;
    float: none;
    padding: 5px;
    margin: 5px;
    min-width: 142px;
    outline: none;
    cursor: pointer;
    @media screen and (max-width: 580px) {
        min-width: 210px; 
    }
    @media screen and (max-width: 428px) {
        min-width: 170px;
    }
    .img-overlay {
        opacity: 1;
        transition: opacity 305ms cubic-bezier(.4,0,.2,1);
    }
    &:hover {
        .row-item-img {
            border: 1px solid #0091ea;
        }
        
        .img-overlay {
            opacity: 0.8;
        }

        .row-item-header {
            text-decoration: underline;
            text-decoration-color: #0091ea;
            overflow: hidden;
        }
    }
`

export const RowItemImg = styled.img`
    position: relative;
    display: block;
    border-radius: 4px;
    background-size: cover;
    background-position: 50% 50%;
    max-width: inherit;
    max-height: 200px;
    border: 1px solid grey;
    z-index: 1;

`



export const RowItemHeader = styled.p`
    color: #fff;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 0px;
    margin: 0;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 400;
    &:before {
        display: block;
        position: absolute;
        content: "";
        top: 7px;
        right: 0;
        bottom: 0;
        width: 20px;
        z-index: 2;
        background: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,0.2)),to(rgba(0,0,0,1)));
        background: linear-gradient(to right,rgba(0,0,0,0.2),rgba(0,0,0,1));
    }
`

export const RowItemText = styled.p`
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 0px;
    padding-bottom: 5px;
    margin: 0;
    white-space: nowrap;
    color: #999;
    font-size: 14px;
    font-weight: 300;
    &:before {
        display: block;
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        width: 20px;
        z-index: 2;
        background: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,0.4)),to(rgba(0,0,0,1)));
        background: linear-gradient(to right,rgba(0,0,0,0.4),rgba(0,0,0,1));
    }
`

