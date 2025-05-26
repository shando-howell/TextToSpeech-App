export async function POST(request: Request) {
    const { text } = await request.json()

    if (!text) {
        return Response.json({ error: 'Text is required' }, { status: 400 });
    }

    console.log('[on the server]Text: ', text);

    // use AI models to convert text to audio

    return Response.json({ hello: 'world' });
}