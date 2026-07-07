export function SocialLinks(accounts) {
    return (
        <>
            {Object.entries(accounts).map(([key, account]) => (
                <a key={key} target="_blank" rel="noreferrer" href={account.link}>
                    <i className={account.icon} />
                </a>
            ))}
        </>
    );
}