import Button from "./Button"


const Header = ({ title, onAdd, showAdd }) => {


    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'blue' : 'green'} text={showAdd ? 'Hide' : 'Add'} onClick={onAdd} />
        </header>
    )
}



export default Header