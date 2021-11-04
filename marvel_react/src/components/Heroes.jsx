import './Heroes.css'

function Heroes(props){
    return(
        <div className="cardHeroes">
        <img className="heroes-image" src={props.img} alt={props.name} />
        <h1 className="heroes-name">{props.name}</h1>
        <p className="heroes-universe">Вселенная: {props.universe}</p>
        <p className="heroes-alterEgo">Альтер эго: {props.alterEgo}</p>
        <p className="heroes-class">Род деятельности: {props.class}</p>
        <p className="heroes-friends">Друзья: {props.friends}</p>
        <p className="heroes-superPowers">Суперсилы: {props.superPowers}</p>
        <p className="heroes-info">Подробнее: {props.info}</p>
        </div>
    );
}
export default Heroes;