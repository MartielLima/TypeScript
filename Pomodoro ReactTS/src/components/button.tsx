interface Props {
    onClick?: () => void;
    className?: string;
    children: string;
}

export function Button({ children, className, onClick }: Props): JSX.Element {
    return (
        <button type="button" onClick={onClick} className={className}>
            {children}
        </button>
    );
}
