import { CirclesWithBar } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export function Loader() {
    return (
        <Container
        ><CirclesWithBar
                height="100%"
                width="100%"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />
        </Container>
    );
};