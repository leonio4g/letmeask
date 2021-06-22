import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import Button from '../components/Button'

import '../styles/auth.scss'


export default function NewRoom() {

   // const { user } = useAuth();
    return (
        <div id="page-auth" >
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolixando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da Sala"
                        />
                        <Button type="submit">Criar sala</Button>

                    </form>
                    <p>Quer entra em uma sala Exitente ? <Link to="/" >Clique Aqui</Link></p>
                </div>
            </main>
        </div>
    )
}