const host = process.env.API_HOST || 'http://localhost';
const url = `${host}/api/signatures`;

export default () => ({
    fetchSignatures: url,
    addSignature: ({ name, email, msg }) => ({
        addedSignature: {
            url: url,
            method: 'POST',
            body: JSON.stringify({ name, email, message: msg }),
        },
    }),
});