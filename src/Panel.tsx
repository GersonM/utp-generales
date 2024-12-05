import React, {useState} from 'react';
import {Modal} from "antd";

interface PanelProps {
    number: React.ReactNode;
    title: React.ReactNode;
    children: React.ReactNode;
}

const Panel = ({number, title, children}: PanelProps) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={'panel-container'}>
                <h4 className={'item'} onClick={() => setOpen(!open)}><span>{number}</span> {title}</h4>
            </div>
            <Modal width={800} open={open} onCancel={() => setOpen(false)} footer={null}>
                <h3><span>{number}</span> {title}</h3>
                {children}
            </Modal>

        </>
    );
};

export default Panel;
