import Logo from '../../assets/logo.png';
import Bell from '../../assets/bell.png';
import * as S from './styles';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={Logo} alt='Logo'/>
            </S.LeftSide>.

            <S.RightSide>                
                <button>
                    <Link to="/">INÍCIO</Link>
                </button>

                <span className='dividir'></span>

                <button>
                    {/* NOVA TAREFA */}
                    <Link to="/task">NOVA TAREFA</Link>
                </button>

                <button>
                    <img src={Bell} alt='Imagem de Notificação' />
                    <span>3</span>
                </button>
            </S.RightSide>
        </S.Container>
    )
}

export default Home;