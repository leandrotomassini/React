import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const {
        data,
        isLoading,
    } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { name, species } = !!data && data;

    return (
        <>
            <div>BreakingBad Quotes</div>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote name={name} species={species} />

            }

            <button
                className="btn btn-primary"
                onClick={() => increment()}
                disabled={isLoading}
            >
                Next quote
            </button>

        </>
    )
}
