
import { useState, useEffect, useRef } from "react"
import { jwtDecode } from "jwt-decode";
interface loginProps {
    token: string | null,
    id: string | null,
    firstName: string | null,
    secondName: string | null
  } 
const JwtDecode= ()=> {
    const [userData, setUserData] = useState<loginProps>()
    const token = useRef("")
    const storageName="userData"
    useEffect(() => {
        
        const userDataFromStorage = localStorage.getItem(storageName)
        if (userDataFromStorage) {
         
            setUserData(JSON.parse(userDataFromStorage))
        }
    }, []) 
useEffect(()=> {
console.log("U data" +JSON.stringify(userData))
if(userData!=undefined){

    if(typeof userData.token =="string" ){
        
     //   console.log("decode" + JSON.stringify(jwtDecode(userData.token)))
     //   token.current=JSON.stringify(jwtDecode(userData.token))
    }
}
}, [userData])
//return {userData, token}
return {userData}
}

export default JwtDecode














/*
   // const {jwt} = useContext()
    const {id, idd} =useParams()
    const [userData, setUserData] = useState<loginProps>()

    useEffect(() => {
        
        const userDataFromStorage = localStorage.getItem(storageName)
        if (userDataFromStorage) {
         
            setUserData(JSON.parse(userDataFromStorage))
        }
    }, []) 
useEffect(()=> {
console.log("U data" +JSON.stringify(userData))
if(userData!=undefined){

    if(typeof userData.token =="string" ){
        
        console.log("decode" + JSON.stringify(jwtDecode(userData.token)))
    }
}
}, [userData])
*/
/*
const token = 'ваш JWT токен'; // здесь должен быть ваш JWT токен

const userId = '659d7eb6ccd6bd3fdd45f16d'; // извлеченный userId из токена

const данные = {
    товар: 'Название товара',
    цена: 100
    // другие данные для добавления в корзину
};

fetch('/api/user/cart/add', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        userId: userId,
        данные: данные
    })
})
    .then(response => {
        // Обработка ответа от сервера
        console.log(response);
    })
    .catch(error => {
        // Обработка ошибок
        console.error('Ошибка:', error);
    });

    */