export const ShowIncrement = ({ increment }) => {

    console.log('Me volví a generar (ツ).');

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => {
                    increment();
                }}
            >
                Incrementar
            </button>
        </>
    )
}