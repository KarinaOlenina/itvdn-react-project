//Пример списка

export const names = ['Lisa', 'Anna', 'Mary'];

export const ListItem = props => {
    return <li>{props.value}</li>

}

function ListOfName(props) {
    const names = props.names;
    const listItems = names.map((name) =>
        <ListItem key={name} value={name}/>);

    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default ListOfName;