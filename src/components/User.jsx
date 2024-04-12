import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, selectUser} from '../redux/userSlice.js';

const User = ({username}) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`)
                const data = await response.json();
                dispatch(setUser({
                    name: data.name,
                    username: data.login,
                    followers: data.followers,
                    repositorios:data.public_repos,
                    imagen:data.avatar_url
                }))
            } catch (error) {
                console.error(error);
            }
        }
        getUserInfo();
    }, [username]);


    return(
        <>
        <h1>Datos de usuario</h1>
            <ul>
                <li><strong>Nombre: </strong>{user.name}</li>
                <li><strong>Usuario: </strong>{user.username}</li>
                <li><strong>Seguidores: </strong>{user.followers}</li>
                <li><strong>Repositorios publicos: </strong>{user.repositorios}</li>
                <li><strong>Avatar: </strong><img src={user.imagen} alt={user.username}/></li>
            </ul>  
        </>
    )

};

export default User;