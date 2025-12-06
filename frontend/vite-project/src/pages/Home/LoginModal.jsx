import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const RESPONSIVE_BREAKPOINT_SM = "280px";

export const ResponsiveModalWrapper = styled(Modal)`
.ant-modal {
        max-width: 350px;
        @media (max-width: ${RESPONSIVE_BREAKPOINT_SM}) {
        .ant-modal {
            max-width: 95%;
            margin: 0 10px
        }
    }
}    
`;    

const LoginModal = ({ isVisible, onClose, onConfirm }) => {
    return (
        <Modal
            open={isVisible}
            onCancel={onClose}
            centered 
            width={350}
            footer={null}
            closeIcon={<FontAwesomeIcon icon={faTimes} style={{ color: 'black', fontSize: '20px' }} />} 
            styles={{
                content: { 
                    backgroundColor: 'white',
                    borderRadius: '15px', 
                    padding: '20px'
                },
                body: { 
                    padding: '0px'
                }
            }}
        > 
            <div style={{ textAlign: 'center', color: 'black' }}>
                <h2 style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', margin: '10px 0 5px 0' }}>
                    Você deseja mesmo fazer login?
                </h2>
                <p style={{ color: '#666', fontSize: '14px', margin: '0 0 30px 0' }}>
                    Tem certeza que você deseja fazer esse login?
                </p>
                <Button
                    key="login"
                    onClick={onConfirm}
                    style={{
                        backgroundColor: 'white',
                        color: 'black',
                        fontWeight: 'bold',
                        height: '45px',
                        width: '100%',
                        borderRadius: '8px',
                        border: '1px solid #FFE712'
                    }}
                >
                    LOGIN
                </Button>
            </div>
        </Modal>
    );
};

export default LoginModal;