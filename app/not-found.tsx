import LinkButton from './ui/linkButton';

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <LinkButton href={'/'}>Return Home</LinkButton>
        </div>
    );
}
