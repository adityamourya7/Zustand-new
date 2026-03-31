import '../../../../src/App.css';

function CardCont({ children }) {
    return <>
        <div className="container">
            {children}
        </div >
    </>
}

export default CardCont;