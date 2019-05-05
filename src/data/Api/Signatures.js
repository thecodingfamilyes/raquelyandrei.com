export default () => {
    const host = process.env.GATSBY_API_HOST || 'http://localhost';
    const url = `${host}/api/signatures`;

    return {
        fetchSignatures: url,
        addSignature: ({ name, email, msg }) => ({
            addedSignature: {
                url: url,
                method: 'POST',
                body: JSON.stringify({ name, email, message: msg }),
            },
        }),
    };
};
