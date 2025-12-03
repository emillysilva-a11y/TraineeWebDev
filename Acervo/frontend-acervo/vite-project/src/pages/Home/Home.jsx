import React, {useState}from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container, Header, CarouselWrapper, TableWrapper } from './Styles'; 
import LoginModal from '../Login/LoginModal';
import LogoCPE from '../../assets/logocpe.svg'; 

const memberData = [
    { id: 1, name: "Mariana Rafaela", role: "Gerente de Recrutamento e Seleção", checkIn: "22:34", timeSpent: "01:34" },
    { id: 2, name: "Osvaldo Neto", role: "Dev Lider", checkIn: "22:36", timeSpent: "01:34" },
    { id: 3, name: "João Pirajá", role: "Dev Lider", checkIn: "22:36", timeSpent: "01:34" },
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
                <CarouselWrapper>
                    <Carousel 
                        showArrows={true}
                        showThumbs={false}
                        infiniteLoop={true}
                    >
                        <div className="carousel-slide">
                            <img src="/assets/slide1.png" alt="Informação da Empresa 1" />
                            <p className="legend">Slide 1: Nossa Missão</p>
                        </div>
                        <div className="carousel-slide">
                            <img src="/assets/slide2.png" alt="Informação da Empresa 2" />
                            <p className="legend">Slide 2: Nossos Valores</p>
                        </div>
                    </Carousel>
                </CarouselWrapper>
                
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