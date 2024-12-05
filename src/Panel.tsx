import React, {useState} from 'react';
import {Button, Modal} from "antd";

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
            {open && <div className={'panel-content fade-in-quick'}>
                <h3><span>{number}</span> {title}</h3>
                <Button type={"primary"} ghost icon={'<'} onClick={()=>setOpen(!open)}>Volver</Button>
                {children}
            </div>}

            <Modal width={800} open={false} onCancel={() => setOpen(false)} footer={null}>
                <h3><span>{number}</span> {title}</h3>
                {children}
            </Modal>

        </>
    );
};

export default Panel;
