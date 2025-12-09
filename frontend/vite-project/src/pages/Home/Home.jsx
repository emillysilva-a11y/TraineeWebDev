import React, {useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container, Header, TableWrapper } from './Styles'; 
import LoginModal from './LoginModal';
import LogoCPE from '../../assets/logocpe.svg';
import Carousel from '../../components/Carousel/Carousel';

const memberData = [
    { id: 1, name: "Membro 1", role: "Consultor", checkIn: "20:00", timeSpent: "02:15" },
    { id: 2, name: "Membro 2", role: "Dev Lider", checkIn: "19:00", timeSpent: "01:43" },
    { id: 3, name: "Membro 3", role: "Dev Lider", checkIn: "20:30", timeSpent: "00:55" },
];

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleConfirmLogin = () => {console.log("Confirmado! Iniciando login na sessão...");handleCloseModal();
    }
    return (
        <Container>
            <Header>
                <img src={LogoCPE} alt="CPE Logo" className="cpe-logo-img" />
                
                <nav className="header-nav">
                    <a href="/home" className="nav-link active">HOME</a>
                    <a href="/perfil" className="nav-link">PERFIL</a>
                    <a href="/usuarios" className="nav-link">USUÁRIOS</a>
                </nav>
            </Header>

            <div className="home-content">

                <Carousel />
                
                <TableWrapper>
                    <div className="table-header">
                        <span>MEMBRO</span>
                        <span>CHEGADA</span>
                        <span>TEMPO</span>
                        <span></span>
                    </div>

                    {memberData.map(member => (
                        <div key={member.id} className="table-row">
                            <div className="member-info">
                                <span className="member-name">{member.name}</span>
                                <span className="member-role">{member.role}</span>
                            </div>
                            
                            <div className="time-block">{member.checkIn}</div>
                            <div className="time-block">{member.timeSpent}</div>
                            
                            <FontAwesomeIcon icon={faTrash} className="delete-icon" />
                        </div>
                    ))}
                </TableWrapper>
                <div style={{width: '100%', maxWidth: '600px', textAlign: 'right', marginTop: '20px'}}>
                    <button 
                        onClick={handleOpenModal} 
                        style={{
                            backgroundColor: '#FFE712', 
                            color: 'black', 
                            fontWeight: 'bold', 
                            padding: '10px 20px', 
                            border: 'none', 
                            borderRadius: '5px',
                            cursor: 'pointer',
                            textTransform: 'uppercase'
                        }}
                    >
                        Fazer Login
                    </button>
                </div>
            </div>
            <LoginModal
                isVisible={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmLogin} 
                projectName={"Mariana Rafaela"}/>
        </Container>
    );
};

export default Home;